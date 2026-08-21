/**
 * Small, deterministic vocabulary shared by the text-to-gloss layer and the
 * avatar renderer. AI output can use any key here and the renderer receives
 * the canonical uppercase gloss token.
 *
 * A token without a dedicated word animation is still safe: AvatarPlayer
 * fingerspells it with the A-Z animations already in the project.
 */

const makeGlossEntries = (words) => Object.fromEntries(
  words.map((word) => [word, [word.toUpperCase()]])
);

export const NOUN_DICTIONARY = Object.freeze({
  ...makeGlossEntries([
    "aeroplane", "dog", "city", "car", "bottle", "book", "house", "school", "hospital", "doctor",
    "water", "food", "apple", "banana", "milk", "tea", "coffee", "bread", "rice", "bus",
    "train", "road", "market", "shop", "park", "office", "room", "door", "window", "chair",
    "table", "bag", "key", "phone", "computer", "money", "man", "woman", "child", "boy",
    "girl", "family", "friend", "mother", "father", "brother", "sister", "teacher", "student", "police",
  ]),
});

export const COMMON_TERM_DICTIONARY = Object.freeze({
  ...makeGlossEntries([
    "yes", "no", "please", "sorry", "welcome", "good", "bad", "help", "stop", "wait",
    "come", "go", "give", "take", "want", "need", "like", "know", "understand", "ask",
    "answer", "tell", "show", "look", "see", "listen", "talk", "start", "finish", "again",
    "live", "work", "play", "walk", "run", "sit", "stand", "open", "close", "bring",
    "send", "receive", "use", "make", "do", "try", "change", "think", "feel", "eat",
  ]),
});

export const WH_QUESTION_DICTIONARY = Object.freeze({
  what: ["WHAT"],
  where: ["WHERE"],
  when: ["WHEN"],
  why: ["WHY"],
  who: ["WHO"],
  whom: ["WHO"],
  whose: ["WHO"],
  which: ["WHICH"],
  how: ["HOW"],
  "how much": ["HOW_MUCH"],
  "how many": ["HOW_MANY"],
});

// Common variants that the speech recognizer or an AI model may return.
const DICTIONARY_ALIASES = Object.freeze({
  airplane: "aeroplane",
  aeroplanes: "aeroplane",
  airplanes: "aeroplane",
  canine: "dog",
  puppy: "dog",
  puppies: "dog",
  automobile: "car",
  automobiles: "car",
  vehicle: "car",
  vehicles: "car",
  town: "city",
  towns: "city",
  bottle: "bottle",
  bottles: "bottle",
  "how_many": "how many",
  "how_much": "how much",
});

export const ISL_GLOSS_DICTIONARY = Object.freeze({
  ...NOUN_DICTIONARY,
  ...COMMON_TERM_DICTIONARY,
  ...WH_QUESTION_DICTIONARY,
});

const normalizeDictionaryKey = (value) => String(value || "")
  .trim()
  .toLowerCase()
  .replace(/[_-]+/g, " ")
  .replace(/\s+/g, " ");

/** Resolve an AI/speech token to one or more canonical ISL gloss tokens. */
export function getDictionaryGloss(value) {
  const key = normalizeDictionaryKey(value);
  const canonicalKey = DICTIONARY_ALIASES[key] || key;
  return ISL_GLOSS_DICTIONARY[canonicalKey] || null;
}

export const DICTIONARY_COUNTS = Object.freeze({
  nouns: Object.keys(NOUN_DICTIONARY).length,
  commonTerms: Object.keys(COMMON_TERM_DICTIONARY).length,
  whQuestions: Object.keys(WH_QUESTION_DICTIONARY).length,
});

