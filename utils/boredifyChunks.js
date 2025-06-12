import * as action from "@/utils/trasformers/action";
import * as time from "@/utils/trasformers/time";
import * as cause from "@/utils/trasformers/cause";
import * as location from "@/utils/trasformers/location";
import * as subject from "@/utils/trasformers/subject";
import { parseSentence } from "./parseSentence";


export function boredifyChunks(parts) {
  const chunks = [];

  // Add subject if present
  if (parts.subject) {
    const subjectChunk = subject.transform(parts.subject);
    if (subjectChunk) chunks.push("In the context of " + subjectChunk + ",");
  }
  if (parts.action) chunks.push(action.transform(parts.action));
  if (parts.time) chunks.push(time.transform(parts.time));
  if (parts.cause) chunks.push(cause.transform(parts.cause));
  if (parts.location) chunks.push(location.transform(parts.location));
  if (chunks.length === 0) {
    return "I am currently devoid of any specific activity or intention.";
  }

  return chunks.join(" ") + ".";
}
