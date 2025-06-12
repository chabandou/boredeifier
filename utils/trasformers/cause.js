export function detect(text){
  const patterns = [
    /\b(because|as|since|due to|after) [^.,;]+/i,
    /\bto (relax|unwind|sleep|cope|escape)/i,
    /\b(just felt like it|no reason|nothing better to do|out of boredom)/i,
  ];

  for (const pattern of patterns) {
    const match = text.match(pattern);
    if (match) return match[0];
  }

  return undefined;
}


export function transform(cause) {
  const lower = cause.toLowerCase();

  if (/after [a-z\s]+/.test(lower)) {
    return lower.replace(/after/, "following");
  }

  if (/after watching/.test(lower)) return "following media consumption";
  if (/after (playing|gaming)/.test(lower)) return "subsequent to recreational activity";
  if (/because.*bored/.test(lower)) return "due to emotional flatness";
  if (/because.*hungry/.test(lower)) return "owing to caloric necessity";
  if (/since.*nothing to do/.test(lower)) return "as a result of inactivity";
  if (/due to hunger/.test(lower)) return "owing to caloric necessity";
  if (/due to.*tired/.test(lower)) return "as a consequence of physiological fatigue";
  if (/because.*sad/.test(lower)) return "as a result of affective imbalance";
 

  if (/(bored|boredom|nothing better to do|just felt like it)/.test(lower)) {
    return "due to motivational deficit";
  }

  if (/after work/.test(lower)) {
    return "following occupational obligations";
  }

  if (/((couldn't|wouldn't) sleep|insomnia)/.test(lower)) {
    return "due to sleep disruption";
  }

  if (/(to relax|to unwind|to chill|to cope)/.test(lower)) {
    return "for stress mitigation purposes";
  }

  


  return "as a consequence of undefined stimuli";
}
