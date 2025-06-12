export function detect(text) {
  const patterns = [
    /\b(until|till|at|around|before|after|since|by|during) \d{1,2}(:\d{2})? ?(am|pm)\b/i,
    /\bfrom \d{1,2} ?(am|pm)? ?(to|until) \d{1,2} ?(am|pm)?\b/i,
    /\b(around|until|till) (noon|midnight)\b/i,
    /\bin the (morning|afternoon|evening|night)\b/i,
    /\b(before|after|since|by|during) (breakfast|lunch|dinner|sunrise|sunset|dawn|dusk|night|morning|afternoon|evening|midnight)\b/i,
  ];

  for (const pattern of patterns) {
    const match = text.match(pattern);
    if (match) return match[0];
  }

  return undefined;
}

export function transform(time) {
  const lower = time.toLowerCase();

  let preposition;
  // Smart exact time mapping
  const match = lower.match(
    /(until|till|at|around|before|after|since|by|during) (\d{1,2})(?::\d{2})? ?(am|pm)/i
  );
  if (match) {
    console.log(`Matched time: ${match}`, `artifact: ${match[1]}`);
    if (match[1] === "until" || match[1] === "till") {
      preposition = "until";
    } else if (match[1] === "at") {
      preposition = "at";
    } else if (match[1] === "around") {
      preposition = "around";
    } else if (match[1] === "before") {
      preposition = "before";
    } else if (match[1] === "after") {
      preposition = "after";
    } else if (match[1] === "since") {
      preposition = "since";
    } else if (match[1] === "by") {
      preposition = "by";
    } else if (match[1] === "during") {
      preposition = "during";
    }

    let hour = parseInt(match[2], 10);
    const meridian = match[3].toLowerCase();

    if (meridian === "pm" && hour !== 12) hour += 12;
    if (meridian === "am" && hour === 12) hour = 0;

    if (hour >= 0 && hour < 6) return `${preposition} early morning hours`;
    if (hour >= 6 && hour < 12) return `${preposition} pre-meridian hours`;
    if (hour === 12 || hour === 13) return `${preposition} midday`; // during midday;
    if (hour > 13 && hour < 18) return `${preposition} post-meridian hours`; //` "during epost-meridian hours";
    if (hour >= 18 && hour < 21) return `${preposition} dusk period`; //"during dusk period";
    return `${preposition} nocturnal interval`; //"during late nocturnal interval";
  }

  if (/around noon/.test(lower)) return "approximately midday";
  if (/around midnight/.test(lower)) return "approximately zero-hundred hours";
  if (/(until|till) noon/.test(lower)) return "untill midday";
  if (/(until|till) midnight/.test(lower)) return "untill zero-hundred hours";
  if (/in the morning/.test(lower)) return "during pre-meridian hours";
  if (/in the afternoon/.test(lower)) return "during post-meridian hours";
  if (/in the evening/.test(lower)) return "during dusk period";
  if (/in the night/.test(lower)) return "during nocturnal interval";
  if (/before sunrise/.test(lower)) return "prior to solar emergence";
  if (/after dinner/.test(lower))
    return "subsequent to evening nutritional intake";
  if (/after lunch/.test(lower)) return "subsequent to midday intake";
  if (/before breakfast/.test(lower))
    return "preceding initial nutritional engagement";
  if (/until \d{1,2} ?(am|pm)/.test(lower)) return "until early morning hours";
  if (/after midnight/.test(lower)) return "following nocturnal transition";
  if (/before dawn/.test(lower)) return "prior to sunrise";
  if (/from \d{1,2}( ?(am|pm))? to \d{1,2}( ?(am|pm))?/.test(lower))
    return "during a specified temporal range";

  return "at an unspecified time frame";
}
