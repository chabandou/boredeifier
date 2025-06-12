export function lightlyFormalize(text) {
  let result = text;

  // Step 1: Replace contractions
  const contractions = {
    "I'm": "I am",
    "can't": "cannot",
    "won't": "will not",
    "don't": "do not",
    "shouldn't": "should not",
    "wouldn't": "would not",
    "couldn't": "could not",
    "doesn't": "does not",
    "we're": "we are",
    "let's": "let us",
    "let's go": "let us proceed",
    "ate": "consumed",
    "slept": "rested",
    "game": "interactive digital entertainment",
    "games": "interactive digital entertainment",
    "chill": "relax",
    "chilled": "relaxed"
  };

  for (const [contraction, expansion] of Object.entries(contractions)) {
    // Don't strip apostrophes from our search pattern - instead escape it properly
    const escapedContraction = contraction.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    // Simple exact match - our contractions object has the correct form
    result = result.replace(new RegExp(`\\b${escapedContraction}\\b`, 'gi'), expansion);
  }

  // Step 2: Replace casual words
  const dictionary = {
    lit: "exciting",
    lol: "That was moderately amusing.",
    gonna: "going to",
    wanna: "want to",
    cool: "acceptable",
    awesome: "adequate",
    fun: "mildly enjoyable",
    "let's go": "let us proceed",
    nice: "satisfactory",
    bro: "colleague",
    bros: "colleagues",
    dude: "individual",
    "you guys": "the group",
    guy: "individual",
  };

  for (const [key, value] of Object.entries(dictionary)) {
    const regex = new RegExp(`\\b${key}\\b`, "gi");
    result = result.replace(regex, value);
  }

  // Step 3: Remove exclamations/emojis
  result = result.replace(/[!😂🤣😍💀✨]+/g, "");

  return result.trim();
}
