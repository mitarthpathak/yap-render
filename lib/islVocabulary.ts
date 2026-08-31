/**
 * The exact set of canonical ISL gloss tokens the 3D avatar knows how to play.
 *
 * This is the single source of truth shared by:
 *  - the Gemini system prompt in `app/api/translate-isl/route.ts`
 *  - the client-side hybrid bridge in `lib/islTranslator.ts`
 *  - the direct-playback fast path in `components/avatar/AvatarPlayer.tsx`
 *
 * Keep it aligned with the exported animation names in
 * `components/avatar/animations/words.js`. Multi-word signs use an underscore
 * (THANK_YOU, HOW_MUCH, COME_IN, …) exactly as the animation module exports them.
 */
export const SUPPORTED_TOKENS: readonly string[] = [
  'YOU', 'HOME', 'TIME', 'PERSON', 'HELLO', 'HELP', 'PLEASE', 'SORRY', 'WELCOME', 'GOOD', 'BAD', 'STOP', 'WAIT',
  'COME', 'GO', 'WANT', 'NEED', 'LIKE', 'KNOW', 'UNDERSTAND', 'ASK', 'DRINK', 'EAT', 'WATER', 'GIVE', 'TAKE',
  'SHOW', 'LOOK', 'SEE', 'LISTEN', 'TALK', 'START', 'FINISH', 'AGAIN', 'SLEEP', 'TOILET', 'DOCTOR', 'HOSPITAL',
  'ANSWER', 'TELL', 'FOOD',
  'PAIN', 'SCHOOL', 'CLASS', 'TEACHER', 'STUDENT', 'BOOK', 'READ', 'WRITE', 'STUDY', 'LEARN', 'EXAM', 'QUESTION',
  'PROJECT', 'COMPUTER', 'COLLEGE', 'PHONE', 'MOBILE', 'EMERGENCY', 'DANGER', 'SAFE', 'POLICE', 'WHAT', 'WHY',
  'WHEN', 'WHERE', 'WHO', 'HOW', 'WHICH', 'HOW_MUCH', 'HOW_MANY', 'ROAD', 'CAR', 'BUS', 'TRAIN', 'MARKET', 'SHOP',
  'CITY', 'VILLAGE', 'PARK', 'OFFICE', 'MILK', 'TEA', 'COFFEE', 'FRUIT', 'VEGETABLE', 'RICE', 'BREAD', 'BREAKFAST',
  'LUNCH', 'DINNER', 'HOUSE', 'ROOM', 'DOOR', 'WINDOW', 'CHAIR', 'TABLE', 'BAG', 'CLOTHES', 'KEY', 'MONEY', 'MAN',
  'WOMAN', 'CHILD', 'BOY', 'GIRL', 'PARENT', 'FAMILY', 'FRIEND', 'NEIGHBOR', 'MOTHER', 'FATHER', 'BROTHER', 'SISTER',
  'NAME', 'AGE', 'LIVE', 'WORK', 'PLAY', 'WALK', 'RUN', 'SIT', 'STAND', 'COME_IN', 'GO_OUT', 'OPEN', 'CLOSE', 'BRING',
  'SEND', 'RECEIVE', 'KEEP', 'USE', 'MAKE', 'DO', 'TRY', 'NEED_HELP', 'BEGIN', 'CHANGE', 'WAIT_MINUTE', 'REMEMBER',
  'FORGET', 'THINK', 'FEEL', 'BELIEVE', 'BECAUSE', 'HAPPY', 'SAD', 'ANGRY', 'SCARED', 'CONFUSED', 'TIRED', 'READY',
  'LATE', 'EARLY', 'IMPORTANT', 'YES', 'NO', 'THANK_YOU',
]

export const SUPPORTED_TOKEN_SET: ReadonlySet<string> = new Set(SUPPORTED_TOKENS)

/** A single A–Z letter, i.e. a fingerspelling instruction. */
export function isFingerspellToken(token: string): boolean {
  return /^[A-Z]$/.test(token)
}

/** True when `AvatarPlayer` can play this token directly without translating. */
export function isPlayableToken(token: string): boolean {
  return SUPPORTED_TOKEN_SET.has(token) || isFingerspellToken(token)
}

/**
 * Coerce an arbitrary token list (from Gemini or the offline engine) into tokens
 * the avatar can always play: supported signs are kept as-is; anything else is
 * expanded into individual letters for fingerspelling. Never throws.
 */
export function sanitizeTokens(input: unknown): string[] {
  if (!Array.isArray(input)) return []
  const output: string[] = []
  for (const entry of input) {
    const token = String(entry ?? '').toUpperCase().replace(/[^A-Z_]/g, '')
    if (!token) continue
    if (SUPPORTED_TOKEN_SET.has(token) || token.length === 1) {
      output.push(token)
      continue
    }
    for (const letter of token.replace(/_/g, '')) {
      if (letter) output.push(letter)
    }
  }
  return output
}

/** True when every whitespace-separated token is already avatar-playable. */
export function looksPreTranslated(text: string): boolean {
  const tokens = text.trim().toUpperCase().split(/\s+/).filter(Boolean)
  return tokens.length > 0 && tokens.every(isPlayableToken)
}
