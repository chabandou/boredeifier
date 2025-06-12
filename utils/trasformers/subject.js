export function detect(text) {
  const subjectMatch = text.match(/\b(i|you|we|they|he|she|it|my friends and i)\b/i);
  return subjectMatch?.[0].toLowerCase();
}

export function transform(subject) {
  const normalized = subject.toLowerCase();

  switch (normalized) {
    case "i":
      return "Personal action";
    case "you":
      return "Second-party engagement";
    case "he":
    case "she":
    case "it":
      return "Third-party activity";
    case "we":
      return "Group engagement";
    case "they":
    case "my friends and i":
      return "Multi-agent behavior";
    default:
      return "Action";
  }
}

