import * as action from "@/utils/trasformers/action";
import * as time from "@/utils/trasformers/time";
import * as cause from "@/utils/trasformers/cause";
import * as location from "@/utils/trasformers/location";
import * as subject from "@/utils/trasformers/subject";

export function parseSentence(text) {
  return {
    subject: subject.detect(text),
    action: action.detect(text),
    time: time.detect(text),
    cause: cause.detect(text),
    location: location.detect(text)
  };
}
