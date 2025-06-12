import { parseSentence } from './parseSentence';
import { boredifyChunks } from './boredifyChunks';
import { lightlyFormalize } from '@/utils/trasformers/lightlyFormelize';
import { addBureaucraticObfuscation } from '@/utils/trasformers/addBureaucraticObfuscation';

export function boredify(text, level) {
  if (typeof text !== 'string') {
    throw new Error('Input must be a string');
  }
  if (level && typeof level !== 'string') {
    throw new Error('Boring level must be a string');
  }
  if (level && !['low', 'medium', 'high'].includes(level)) {
    throw new Error('Boring level must be one of: low, medium, high');
  }

   if (level === "low") {
    return lightlyFormalize(text);
  }

  const parts = parseSentence(text);
  let result = boredifyChunks(parts);
  
  if (level === 'high') {
    result = addBureaucraticObfuscation(result);
  }
  
  return result;
}



// export function boredify(text) {
//   if (typeof text !== "string") {
//     throw new Error("Input must be a string");
//   }
//   let result = text;

//   // Normalize case
//   result = result.toLowerCase();

//   // logic
//   result = result.replace(/\bI'm\b/gi, "I am");
//   result = result.replace(/\bcan't\b/gi, "cannot");
//   result = result.replace(/\bwon't\b/gi, "will not");
//   result = result.replace(/\bdon't\b/gi, "do not");
//   result = result.replace(/\bshouldn't\b/gi, "should not");
//   result = result.replace(/\bwouldn't\b/gi, "would not");
//   result = result.replace(/\bcouldn't\b/gi, "could not");
//   result = result.replace(/\bdoesn't\b/gi, "does not");
//   result = result.replace(/\bwe're\b/gi, "we are");

//   // Step 2: Replace casual words
//   const dictionary = {
//     lol: "That was moderately amusing.",
//     gonna: "going to",
//     wanna: "want to",
//     cool: "acceptable",
//     awesome: "adequate",
//     fun: "mildly enjoyable",
//     "let's go": "let us proceed",
//     nice: "satisfactory",
//     bro: "colleague",
//     dude: "individual",
//     chill: "relax",
//     sick: "ill",
//     lit: "highly energetic",
//   };
//   Object.keys(dictionary).forEach((key) => {
//     const regex = new RegExp(`\\b${key}\\b`, "gi");
//     result = result.replace(regex, dictionary[key]);
//   });

//   // Step 3: Replace emojis with a period
//   const emojiDictionary = [
//     "😀",
//     "😃",
//     "😄",
//     "😁",
//     "😆",
//     "😅",
//     "😂",
//     "🤣",
//     "😊",
//     "😇",
//     "🙂",
//     "🙃",
//     "😉",
//     "😌",
//     "😍",
//     "😘",
//     "😗",
//     "😙",
//     "😚",
//     "😋",
//     "😛",
//     "😜",
//     "🤪",
//     "🤨",
//     "🧐",
//     "🤓",
//     "😎",
//     "🤩",
//     "🥳",
//     "🥺",
//     "🤗",
//     "🤭",
//     "🤫",
//     "!",
//     "💀",
//     "✨",
//   ];

//   emojiDictionary.forEach((emoji) => {
//     const regex = new RegExp(emoji, "g");
//     result = result.replace(regex, ".");
// });

// // Step : Add generic formal phrases
// if (Math.random() > 0.5) {
//   result = "As per current understanding, " + result;
// } else {
//   result = "It can be concluded that " + result;
// }

//   // Match patterns like:
//   // - i ate a giant pizza
//   // - i eat ramen
//   // - i'm eating spicy noodles
//   // - i was eating a burger
//   const eatingRegex =
//     /\bi (ate|eat|am eating|’m eating|'m eating|was eating|have eaten)\b\s+(a\s+)?((\w+\s+){0,3})?(pizza|burger|ramen|meal|snack|noodles|food|something)/i;

//   const match = result.match(eatingRegex);

//   if (match) {
//     const eatingPart = match[0]; // the full match: e.g., "I ate a giant pizza"

//     // Replace just that part
//     const replaced = result.replace(eatingPart, "Nutritional intake occurred");

//     return replaced;
//   }


//   return result;
// }
 


