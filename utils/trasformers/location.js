export function detect(text) {
  const patterns = [
    /\b(at|in) home\b/i,
    /\b(in|at) (the )?park\b/i,
    /\b(in|at) (my|a|the)? ?(friend'?s|cousin'?s|parent'?s)? (house|place)\b/i,
    /\b(in|on) bed\b/i,
    /\b(at|in) (school|work|university|office)\b/i,
    /\b(in|at) (a )?restaurant\b/i,
    /\b(in|at) (a )?car\b/i,
  ];

  for (const pattern of patterns) {
    const match = text.match(pattern);
    if (match) return match[0];
  }

  return undefined;
}
 

export function transform(phrase) {
  const lower = phrase.toLowerCase();

  if (/\b(at|in) home\b/.test(lower)) return "in a domestic environment";
  if (/\b(in|at) (the )?park\b/.test(lower)) return "within a publicly accessible green space";
  if (/\b(friend'?s|cousin'?s|parent'?s) (house|place)\b/.test(lower)) return "in a secondary residential unit";
  if (/\b(in|on) bed\b/.test(lower)) return "within a personal rest zone";
  if (/\b(school|university|work|office)\b/.test(lower)) return "at an institutional workplace";
  if (/restaurant/.test(lower)) return "in a designated dining establishment";
  if (/\b(in|at) (a )?car\b/.test(lower)) return "within a mobile transport unit";

  return;
}
