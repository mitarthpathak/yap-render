/**
 * Indian Sign Language (ISL) Text-to-Gloss NLP Engine
 * 
 * Converts spoken/written English into grammatically structured ISL Gloss format:
 * 1. Time / Temporal markers at the beginning
 * 2. Subject - Object - Verb (SOV) order
 * 3. Copulas (is, am, are, was, were) and Stopwords (a, an, the, to, of) removed
 * 4. Verb Lemmatization (eating -> EAT, went -> GO)
 * 5. Negations (NOT, NO) placed at the end of the clause
 * 6. WH-Question words (WHAT, WHERE, WHY, WHO, WHEN, HOW) placed at the very end
 */

// Common ISL Idiomatic and Compound Phrases
const PHRASE_DICTIONARY = {
  "HOW ARE YOU": ["YOU", "HOW"],
  "HOW ARE YOU DOING": ["YOU", "HOW"],
  "WHAT IS YOUR NAME": ["YOUR", "NAME", "WHAT"],
  "WHAT'S YOUR NAME": ["YOUR", "NAME", "WHAT"],
  "WHERE DO YOU LIVE": ["YOU", "LIVE", "WHERE"],
  "WHERE ARE YOU FROM": ["YOU", "WHERE", "FROM"],
  "WHERE ARE YOU GOING": ["YOU", "GO", "WHERE"],
  "SEE YOU LATER": ["LATER", "YOU", "SEE"],
  "NICE TO MEET YOU": ["MEET", "YOU", "NICE"],
  "GOOD MORNING": ["GOOD", "MORNING"],
  "GOOD AFTERNOON": ["GOOD", "AFTERNOON"],
  "GOOD EVENING": ["GOOD", "EVENING"],
  "GOOD NIGHT": ["GOOD", "NIGHT"],
  "THANK YOU": ["THANK", "YOU"],
  "THANK YOU VERY MUCH": ["THANK", "YOU"],
  "PLEASE HELP ME": ["ME", "HELP", "PLEASE"],
  "HELP ME": ["ME", "HELP"],
  "HELP": ["HELP"],
  "PLEASE": ["PLEASE"],
  "SORRY": ["SORRY"],
  "THANKS A LOT": ["THANK", "YOU"],
  "WELCOME": ["WELCOME"],
  "YOU ARE WELCOME": ["WELCOME"],
  "I AM SORRY": ["SORRY"],
  "YES": ["YES"],
  "NO": ["NO"],
  "GOOD": ["GOOD"],
  "BAD": ["BAD"],
  "STOP": ["STOP"],
  "WAIT": ["WAIT"],
  "COME HERE": ["HERE", "COME"],
  "GO THERE": ["THERE", "GO"],
  "GIVE ME": ["ME", "GIVE"],
  "TAKE THIS": ["THIS", "TAKE"],
  "I WANT": ["I", "WANT"],
  "I NEED": ["I", "NEED"],
  "I LIKE": ["I", "LIKE"],
  "I KNOW": ["I", "KNOW"],
  "I UNDERSTAND": ["I", "UNDERSTAND"],
  "CALL POLICE": ["POLICE", "CALL"],
  "WHERE IS HOSPITAL": ["HOSPITAL", "WHERE"],
  "WHERE IS TOILET": ["TOILET", "WHERE"],
  "WHERE IS DOCTOR": ["DOCTOR", "WHERE"],
  "I AM IN PAIN": ["I", "PAIN"],
  "I HAVE PAIN": ["I", "PAIN"],
  "I GO TO SCHOOL": ["I", "SCHOOL", "GO"],
  "I GO TO COLLEGE": ["I", "COLLEGE", "GO"],
  "I READ BOOK": ["I", "BOOK", "READ"],
  "I WRITE EXAM": ["I", "EXAM", "WRITE"],
  "I STUDY COMPUTER": ["I", "COMPUTER", "STUDY"],
  "I LOVE YOU": ["I", "YOU", "LOVE"],
  "I DO NOT KNOW": ["I", "KNOW", "NOT"],
  "I DONT KNOW": ["I", "KNOW", "NOT"],
  "HOW MUCH": ["HOW_MUCH"],
  "HOW MANY": ["HOW_MANY"],
  "COME IN": ["COME_IN"],
  "GO OUT": ["GO_OUT"],
  "NEED HELP": ["NEED_HELP"],
  "WAIT A MINUTE": ["WAIT_MINUTE"]
};

// Contractions map
const CONTRACTIONS = {
  "what's": "what is",
  "whats": "what is",
  "where's": "where is",
  "wheres": "where is",
  "how's": "how is",
  "hows": "how is",
  "who's": "who is",
  "whos": "who is",
  "it's": "it is",
  "that's": "that is",
  "there's": "there is",
  "i'm": "i am",
  "im": "i am",
  "you're": "you are",
  "youre": "you are",
  "we're": "we are",
  "they're": "they are",
  "he's": "he is",
  "she's": "she is",
  "don't": "do not",
  "dont": "do not",
  "doesn't": "does not",
  "doesnt": "does not",
  "didn't": "did not",
  "didnt": "did not",
  "can't": "cannot",
  "cant": "cannot",
  "won't": "will not",
  "wont": "will not",
  "isn't": "is not",
  "isnt": "is not",
  "aren't": "are not",
  "arent": "are not",
  "wasn't": "was not",
  "wasnt": "was not",
  "weren't": "were not",
  "werent": "were not",
  "haven't": "have not",
  "havent": "have not",
  "hasn't": "has not",
  "hasnt": "has not",
  "hadn't": "had not",
  "hadnt": "had not",
  "wouldn't": "would not",
  "couldn't": "could not",
  "shouldn't": "should not"
};

// Irregular verb lemmatization dictionary
const IRREGULAR_VERBS = {
  "went": "go", "gone": "go", "going": "go", "goes": "go",
  "ate": "eat", "eaten": "eat", "eating": "eat", "eats": "eat",
  "drank": "drink", "drunk": "drink", "drinking": "drink", "drinks": "drink",
  "saw": "see", "seen": "see", "seeing": "see", "sees": "see",
  "came": "come", "coming": "come", "comes": "come",
  "ran": "run", "running": "run", "runs": "run",
  "wrote": "write", "written": "write", "writing": "write", "writes": "write",
  "read": "read", "reading": "read", "reads": "read",
  "bought": "buy", "buying": "buy", "buys": "buy",
  "spoke": "speak", "spoken": "speak", "speaking": "speak", "speaks": "speak",
  "thought": "think", "thinking": "think", "thinks": "think",
  "took": "take", "taken": "take", "taking": "take", "takes": "take",
  "gave": "give", "given": "give", "giving": "give", "gives": "give",
  "knew": "know", "known": "know", "knowing": "know", "knows": "know",
  "slept": "sleep", "sleeping": "sleep", "sleeps": "sleep",
  "taught": "teach", "teaching": "teach", "teaches": "teach",
  "built": "build", "building": "build", "builds": "build",
  "said": "say", "saying": "say", "says": "say",
  "met": "meet", "meeting": "meet", "meets": "meet",
  "made": "make", "making": "make", "makes": "make",
  "felt": "feel", "feeling": "feel", "feels": "feel",
  "heard": "hear", "hearing": "hear", "hears": "hear",
  "found": "find", "finding": "find", "finds": "find",
  "told": "tell", "telling": "tell", "tells": "tell",
  "worked": "work", "working": "work", "works": "work",
  "played": "play", "playing": "play", "plays": "play",
  "learned": "learn", "learning": "learn", "learns": "learn",
  "studied": "study", "studying": "study", "studies": "study",
  "watched": "watch", "watching": "watch", "watches": "watch",
  "cried": "cry", "crying": "cry", "cries": "cry",
  "smiled": "smile", "smiling": "smile", "smiles": "smile",
  "laughed": "laugh", "laughing": "laugh", "laughs": "laugh",
  "helped": "help", "helping": "help", "helps": "help",
  "walked": "walk", "walking": "walk", "walks": "walk",
  "talked": "talk", "talking": "talk", "talks": "talk",
  "listened": "listen", "listening": "listen", "listens": "listen",
  "called": "call", "calling": "call", "calls": "call",
  "asked": "ask", "asking": "ask", "asks": "ask",
  "looked": "look", "looking": "look", "looks": "look",
  "opened": "open", "opening": "open", "opens": "open",
  "closed": "close", "closing": "close", "closes": "close",
  "started": "start", "starting": "start", "starts": "start",
  "stopped": "stop", "stopping": "stop", "stops": "stop",
  "liked": "like", "liking": "like", "likes": "like",
  "loved": "love", "loving": "love", "loves": "love",
  "wanted": "want", "wanting": "want", "wants": "want",
  "needed": "need", "needing": "need", "needs": "need",
  "brought": "bring", "bringing": "bring", "brings": "bring",
  "sent": "send", "sending": "send", "sends": "send",
  "received": "receive", "receiving": "receive", "receives": "receive",
  "kept": "keep", "keeping": "keep", "keeps": "keep",
  "used": "use", "using": "use", "uses": "use",
  "did": "do", "done": "do", "doing": "do", "does": "do",
  "tried": "try", "trying": "try", "tries": "try",
  "began": "begin", "begun": "begin", "beginning": "begin", "begins": "begin",
  "changed": "change", "changing": "change", "changes": "change",
  "remembered": "remember", "remembering": "remember", "remembers": "remember",
  "forgot": "forget", "forgotten": "forget", "forgetting": "forget", "forgets": "forget",
  "believed": "believe", "believing": "believe", "believes": "believe",
  "sat": "sit", "sitting": "sit", "sits": "sit",
  "stood": "stand", "standing": "stand", "stands": "stand"
};

// Common plural to singular mappings
const PLURAL_NOUNS = {
  "apples": "apple", "books": "book", "children": "child", "kids": "kid",
  "people": "person", "men": "man", "women": "woman", "cars": "car",
  "houses": "house", "days": "day", "friends": "friend", "students": "student",
  "teachers": "teacher", "dogs": "dog", "cats": "cat", "birds": "bird",
  "fruits": "fruit", "flowers": "flower", "trees": "tree", "hands": "hand",
  "eyes": "eye", "legs": "leg", "letters": "letter", "videos": "video",
  "pictures": "picture", "questions": "question", "answers": "answer",
  "markets": "market", "shops": "shop", "cities": "city", "villages": "village", "parks": "park", "offices": "office",
  "vegetables": "vegetable",
  "rooms": "room", "doors": "door", "windows": "window", "chairs": "chair", "tables": "table", "bags": "bag", "keys": "key",
  "boys": "boy", "girls": "girl", "parents": "parent", "families": "family", "neighbors": "neighbor", "mothers": "mother", "fathers": "father", "brothers": "brother", "sisters": "sister", "names": "name", "ages": "age"
};

// Temporal / Time markers (placed first in ISL)
const TIME_WORDS = new Set([
  "yesterday", "today", "tomorrow", "now", "later", "before", "early",
  "morning", "afternoon", "evening", "night", "daily", "always",
  "sometimes", "soon", "recently", "tonight", "time", "monday",
  "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday",
  "year", "month", "week", "day", "hour", "minute", "past", "future",
  "already", "everyday", "last-night", "yesterday-night", "late"
]);

// Interrogative / Question words (placed at the very end in ISL)
const QUESTION_WORDS = new Set([
  "what", "where", "when", "why", "who", "whom", "whose", "which", "how", "how_much", "how_many"
]);

// Negation words (placed at the end or after verb in ISL)
const NEGATION_WORDS = new Set([
  "not", "no", "never", "nothing", "nobody", "none", "neither", "nor", "cannot"
]);

// Pronouns / Subjects
const PRONOUNS = new Set([
  "i", "me", "my", "mine", "myself",
  "you", "your", "yours", "yourself",
  "he", "him", "his", "himself",
  "she", "her", "hers", "herself",
  "it", "its", "itself",
  "we", "us", "our", "ours", "ourselves",
  "they", "them", "their", "theirs", "themselves",
  "this", "that", "these", "those"
]);

// Known Verbs set for POS disambiguation
const KNOWN_VERBS = new Set([
  "go", "come", "eat", "drink", "see", "run", "write", "read", "buy",
  "speak", "think", "take", "give", "know", "sleep", "teach", "build",
  "say", "meet", "make", "feel", "hear", "find", "tell", "work",
  "play", "learn", "study", "watch", "cry", "smile", "laugh", "help",
  "walk", "talk", "listen", "call", "ask", "look", "open", "close",
  "start", "stop", "like", "love", "want", "need", "live", "stay",
  "bring", "cook", "stand", "sit", "wait", "drive", "fly", "jump",
  "dance", "sing", "win", "lose", "cut", "clean", "wash", "pay",
  "send", "receive", "keep", "use", "do", "try", "begin", "change", 
  "remember", "forget", "believe"
]);

// Stopwords & Copulas to strip
const STOPWORDS = new Set([
  "a", "an", "the",
  "is", "am", "are", "was", "were", "be", "been", "being",
  "do", "does", "did",
  "to", "of", "for", "at", "by", "from", "with", "into", "onto", "upon", "about", "as",
  "and", "or", "so", "than", "that",
  "will", "shall", "would", "should", "could", "may", "might", "must", "can"
]);

/**
 * Expands contractions in text
 */
function expandContractions(text) {
  let words = text.split(/\s+/);
  return words.map(w => {
    let clean = w.toLowerCase().replace(/[^a-z']/g, "");
    if (CONTRACTIONS[clean]) {
      return CONTRACTIONS[clean];
    }
    return w;
  }).join(" ");
}

/**
 * Lemmatizes a single word into its root form
 */
export function lemmatizeWord(word) {
  let lower = word.toLowerCase();

  // Check irregular verbs
  if (IRREGULAR_VERBS[lower]) {
    return IRREGULAR_VERBS[lower];
  }

  // Check plural nouns
  if (PLURAL_NOUNS[lower]) {
    return PLURAL_NOUNS[lower];
  }

  // Rule-based verb suffixes
  if (lower.endsWith("ing") && lower.length > 5) {
    let base = lower.slice(0, -3);
    // Double consonant removal (e.g. running -> run, swimming -> swim)
    if (base.length >= 3 && base[base.length - 1] === base[base.length - 2] && !['l', 's'].includes(base[base.length - 1])) {
      base = base.slice(0, -1);
    }
    return base;
  }
  if (lower.endsWith("ed") && lower.length > 4) {
    let base = lower.slice(0, -2);
    if (base.endsWith("i")) {
      base = base.slice(0, -1) + "y"; // studied -> study
    }
    return base;
  }
  if (lower.endsWith("es") && lower.length > 4) {
    return lower.slice(0, -2);
  }
  if (lower.endsWith("s") && !lower.endsWith("ss") && lower.length > 3) {
    return lower.slice(0, -1);
  }

  return lower;
}

/**
 * Classifies a token into ISL grammatical role
 */
function classifyToken(token) {
  let lemma = lemmatizeWord(token);

  if (TIME_WORDS.has(lemma)) return { role: "TIME", value: lemma.toUpperCase() };
  if (QUESTION_WORDS.has(lemma)) return { role: "QUESTION", value: lemma.toUpperCase() };
  if (NEGATION_WORDS.has(lemma)) return { role: "NEGATION", value: lemma.toUpperCase() };
  if (PRONOUNS.has(lemma)) return { role: "SUBJECT", value: lemma.toUpperCase() };
  if (KNOWN_VERBS.has(lemma)) return { role: "VERB", value: lemma.toUpperCase() };

  // Fallback noun/object
  return { role: "OBJECT", value: lemma.toUpperCase() };
}

/**
 * Transforms a single sentence into ISL Gloss order (SOV + Time + Question + Negation rules)
 */
function convertSentenceToGloss(sentence) {
  let cleanSentence = sentence.trim().toUpperCase().replace(/[.,!]/g, "");

  // 1. Check direct phrase match
  if (PHRASE_DICTIONARY[cleanSentence]) {
    return {
      tokens: PHRASE_DICTIONARY[cleanSentence],
      text: PHRASE_DICTIONARY[cleanSentence].join(" ")
    };
  }

  // 2. Expand contractions and tokenize
  let expanded = expandContractions(sentence.replace(/[?!.,]/g, " "));
  let rawTokens = expanded.split(/\s+/).filter(w => w.trim().length > 0);

  // A run of individual letters is fingerspelling, not an English sentence.
  // In particular, "a b c d" must retain A: treating it as an article would
  // silently drop a sign that the signer explicitly requested.
  const normalizedTokens = rawTokens
    .map(token => token.replace(/[^a-z0-9]/gi, ""))
    .filter(Boolean);
  if (normalizedTokens.length > 0 && normalizedTokens.every(token => /^[a-z]$/i.test(token))) {
    const tokens = normalizedTokens.map(token => token.toUpperCase());
    return { tokens, text: tokens.join(" ") };
  }

  // 3. Filter stopwords (except when part of specific grammar)
  let filtered = [];
  for (let t of rawTokens) {
    let lower = t.toLowerCase().replace(/[^a-z0-9]/g, "");
    if (!lower) continue;
    if (!STOPWORDS.has(lower) || QUESTION_WORDS.has(lower) || NEGATION_WORDS.has(lower) || PRONOUNS.has(lower)) {
      filtered.push(t);
    }
  }

  if (filtered.length === 0) {
    return { tokens: [], text: "" };
  }

  // 4. Categorize tokens
  let timeTokens = [];
  let subjectTokens = [];
  let objectTokens = [];
  let verbTokens = [];
  let negationTokens = [];
  let questionTokens = [];
  let otherTokens = [];

  for (let raw of filtered) {
    let info = classifyToken(raw);
    switch (info.role) {
      case "TIME":
        timeTokens.push(info.value);
        break;
      case "QUESTION":
        questionTokens.push(info.value);
        break;
      case "NEGATION":
        negationTokens.push(info.value);
        break;
      case "SUBJECT":
        subjectTokens.push(info.value);
        break;
      case "VERB":
        verbTokens.push(info.value);
        break;
      case "OBJECT":
        objectTokens.push(info.value);
        break;
      default:
        otherTokens.push(info.value);
    }
  }

  // 5. Synthesize ISL Word Order:
  // [TIME] -> [SUBJECT] -> [OBJECT] -> [OTHER / ADJ] -> [VERB] -> [NEGATION] -> [QUESTION]
  let glossTokens = [];

  glossTokens.push(...timeTokens);
  glossTokens.push(...subjectTokens);
  glossTokens.push(...objectTokens);
  glossTokens.push(...otherTokens);
  glossTokens.push(...verbTokens);
  glossTokens.push(...negationTokens);
  glossTokens.push(...questionTokens);

  // Handle case where sentence is empty or standard single-word
  if (glossTokens.length === 0) {
    glossTokens = filtered.map(w => lemmatizeWord(w).toUpperCase());
  }

  return {
    tokens: glossTokens,
    text: glossTokens.join(" ")
  };
}

/**
 * Main function: Converts multi-sentence text to ISL Gloss
 * 
 * @param {string} text - The input English sentence(s)
 * @returns {object} { glossText: string, tokens: string[], original: string, sentences: object[] }
 */
export function textToGloss(text) {
  if (!text || typeof text !== "string") {
    return {
      glossText: "",
      tokens: [],
      original: text || "",
      sentences: []
    };
  }

  // Split by sentence delimiters (period, question mark, exclamation, semicolon, newline)
  let rawSentences = text
    .split(/([.?!;\n]+)/)
    .filter(s => s.trim().length > 0 && !s.match(/^[.?!;\n]+$/));

  if (rawSentences.length === 0) {
    rawSentences = [text];
  }

  let allTokens = [];
  let sentenceResults = [];

  for (let s of rawSentences) {
    let res = convertSentenceToGloss(s);
    if (res.tokens.length > 0) {
      allTokens.push(...res.tokens);
      sentenceResults.push(res);
    }
  }

  return {
    glossText: allTokens.join(" "),
    tokens: allTokens,
    original: text,
    sentences: sentenceResults
  };
}

export default textToGloss;
