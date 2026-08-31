import { NextResponse } from 'next/server'
import { GoogleGenAI, Type } from '@google/genai'
import { SUPPORTED_TOKENS, sanitizeTokens } from '@/lib/islVocabulary'

// Route Handlers are never cached for POST, but be explicit: every request is a
// fresh translation that must run on the server at request time.
export const dynamic = 'force-dynamic'

const MODEL = 'gemini-2.5-flash'

const SYSTEM_INSTRUCTION = `You are an expert Indian Sign Language (ISL) interpreter. You convert English text into an ordered list of ISL gloss tokens for a signing avatar.

# ISL GRAMMAR (apply strictly, in this order)
1. TEMPORAL FIRST: time words (YESTERDAY, TODAY, TOMORROW, NOW, LATER, MORNING, NIGHT, TIME, ...) come first.
2. SOV ORDER: then SUBJECT, then OBJECT, then VERB. Drop articles (a, an, the), copulas (is, am, are, was, were, be), and auxiliaries (do, does, will, have).
3. NEGATION LAST-ISH: negation words (NOT, NO, NEVER) go at the END of the clause, after the verb.
4. WH-QUESTIONS AT THE VERY END: question words (WHAT, WHY, WHEN, WHERE, WHO, HOW, WHICH, HOW_MUCH, HOW_MANY) always come last.
Example: "Where did you go yesterday?" -> ["TIME"? no -> "YESTERDAY" is not supported, use closest] -> ["YOU","GO","WHERE"].
Example: "I do not understand" -> ["I","UNDERSTAND","NO"].

# VOCABULARY (you may ONLY output tokens from this exact list)
${JSON.stringify(SUPPORTED_TOKENS)}

# MAPPING RULES
- If an input word is not in the list, map it to the CLOSEST supported synonym. Examples: "automobile"->"CAR", "vehicle"->"CAR", "sick"/"ill"/"hurt"->"PAIN", "instructor"/"professor"->"TEACHER", "buy"/"purchase"->"TAKE", "physician"->"DOCTOR", "kid"->"CHILD", "cellphone"->"MOBILE", "restroom"/"washroom"->"TOILET", "cash"->"MONEY", "cannot"->"NO".
- Pronouns have dedicated signs: "I"/"me"/"myself"/"we"/"us" -> "I"; "my"/"mine"/"our" -> "MY"; "you" -> "YOU"; "your"/"yours" -> "YOUR". Third person "he"/"she"/"they"/"him"/"her" -> "PERSON".
- "good morning" -> ["GOOD","MORNING"]; "love"/"loves"/"loved" -> "LOVE"; "meet"/"met"/"meeting" -> "MEET".
- Multi-word signs must use the underscore form exactly as in the list: THANK_YOU, HOW_MUCH, HOW_MANY, COME_IN, GO_OUT, NEED_HELP, WAIT_MINUTE.
- PROPER NOUNS & UNKNOWNS: if a word is a person's name (e.g. "Amit"), a brand, or has no reasonable supported equivalent, output it as INDIVIDUAL UPPERCASE LETTERS for fingerspelling, e.g. "Amit" -> "A","M","I","T".
- Never invent tokens. Never output lowercase. Never output punctuation or empty strings.

# OUTPUT
Return ONLY a JSON array of strings, e.g. ["YOU","HOME","GO"]. No explanation, no markdown.`

type TranslateRequestBody = { text?: unknown }

export async function POST(request: Request) {
  const apiKey = process.env.GEMINI_API_KEY
  if (!apiKey) {
    return NextResponse.json(
      { error: 'GEMINI_API_KEY is not configured on the server.', tokens: [] },
      { status: 500 },
    )
  }

  let text = ''
  try {
    const body = (await request.json()) as TranslateRequestBody
    text = typeof body.text === 'string' ? body.text.trim() : ''
  } catch {
    return NextResponse.json({ error: 'Request body must be valid JSON.', tokens: [] }, { status: 400 })
  }

  if (!text) {
    return NextResponse.json({ error: 'Missing "text" field.', tokens: [] }, { status: 400 })
  }
  if (text.length > 600) {
    text = text.slice(0, 600)
  }

  try {
    const ai = new GoogleGenAI({ apiKey })
    const response = await ai.models.generateContent({
      model: MODEL,
      contents: text,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0,
        // Disable multi-step "thinking" so gemini-2.5-flash replies with the
        // lowest possible latency for short conversational inputs.
        thinkingConfig: { thinkingBudget: 0 },
        responseMimeType: 'application/json',
        responseSchema: { type: Type.ARRAY, items: { type: Type.STRING } },
      },
    })

    const raw = (response.text ?? '').trim()
    let parsed: unknown
    try {
      parsed = JSON.parse(raw || '[]')
    } catch {
      console.error('[translate-isl] model returned non-JSON payload:', raw.slice(0, 200))
      return NextResponse.json({ error: 'Model returned malformed JSON.', tokens: [] }, { status: 502 })
    }

    const tokens = sanitizeTokens(parsed)
    if (tokens.length === 0) {
      return NextResponse.json({ error: 'Model produced no usable tokens.', tokens: [] }, { status: 422 })
    }

    return NextResponse.json({ tokens, mode: 'online', model: MODEL })
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown Gemini error.'
    const rateLimited = /quota|rate.?limit|resource.?exhausted|\b429\b/i.test(message)
    console.error('[translate-isl] Gemini request failed:', message)
    return NextResponse.json(
      { error: rateLimited ? 'Gemini rate limit reached.' : message, tokens: [] },
      { status: rateLimited ? 429 : 502 },
    )
  }
}
