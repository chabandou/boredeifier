export function detect(text) {
const patterns = [
    /\b(i (?:ate|eat|am eating)) (?:a |an )?([a-zA-Z\s]+)\b/i,
    /\b(i (?:watched|am watching|watch|was watching|binge-watched|saw|viewed)) ([a-zA-Z\s]+)\b/i,
    /\b(i (?:played|am playing|play)) ([a-zA-Z\s]+)\b/i,
    /\b(i (?:slept|am sleeping|sleep))\b/i,
    /\b(i (?:am taking|took|take) a nap)\b/i,
    /\b(i (?:called|am calling|call)) ([a-zA-Z\s]+)\b/i,
    /\b(i (?:texted|am texting|text)) ([a-zA-Z\s]+)\b/i,
    /\b(i (?:ran|am running|run))\b/i,
    /\b(i (?:walked|am walking|walk))\b/i,
    /\b(i (?:jogged|ran|walked|hiked|worked out|exercised|lifted weights|danced|jumped|swam))\b/i,
    /\b(i (?:studied|read|revised|learned|researched|reviewed))\b/i,
    /\b(i (?:relaxed|was chilling|chilled|rested|napped))\b/i,
];

  for (const pattern of patterns) {
    const match = text.match(pattern);
    console.log(`Checking pattern: ${pattern.toString()}`);
    console.log(`Match found: ${match ? match[0] : "none"}`);

    if (match) return match[0];
  }

  return undefined;
}

export function transform(action) {
  const lower = action.toLowerCase();
  console.log(`Transforming action: ${lower}`);

  if (/i (ate|am eating|eat)/.test(lower)) return "Nutritional intake occurred";
  if (/i (watched|am watching|watch)/.test(lower))
    return "Media consumption occurred";
  if (/i (played|am playing|play)/.test(lower))
    return "Recreational interaction occurred";
  if (/i (slept|am sleeping|sleep)/.test(lower))
    return "Unconscious rest period was initiated";
  if (/i (took|am taking|take) a nap/.test(lower))
    return "Brief unconscious engagement occurred";
  if (/i (called|am calling|call)/.test(lower))
    return "Telephonic social interaction occurred";
  if (/i (texted|am texting|text)/.test(lower))
    return "Text-based communication transpired";
  if (/i (walked|am walking|walk)/.test(lower))
    return "Ambulatory exercise transpired";
  if (/i (ran|am running|run)/.test(lower))
    return "Accelerated ambulation occurred";
  // Physical
  if (/(jogged|ran|walked|hiked|exercised|worked out|danced|jumped|swam)/.test(lower)) {
    return "physical exertion was performed";
  }

  // Mental
  if (/(studied|read|revised|learned|researched|reviewed)/.test(lower)) {
    return "cognitive activity occurred";
  }

  // Leisure / Relax
  if (/(watched|was watching|viewed|saw|binge-watched)/.test(lower)) {
    return "passive media consumption occurred";
  }

  if (/(relaxed|was chilling|chilled|rested|napped)/.test(lower)) {
    return "recreational inactivity occurred";
  }

  if (/(played|was playing|gamed|played video games)/.test(lower)) {
    return "interactive digital engagement occurred";
  }

  return "An activity of unspecified nature occurred";
}
