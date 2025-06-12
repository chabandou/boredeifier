export function addBureaucraticObfuscation(text) {
    let bereaucraticReplacement = {
        "i": "The undersigned",
        "you": "the recipient of this communication",
        "we": "the involved parties",
        "your": "the recipient's",
        "my": "the undersigned's",
        "is": "is hereby deemed to be",
        "are": "are hereby acknowledged as",
        "was": "was formally recognized as",
        "were": "were duly noted as"
    };

    for (let key in bereaucraticReplacement) {
        let regex = new RegExp(`\\b${key}\\b`, "gi");
        text = text.replace(regex, bereaucraticReplacement[key]);
    }

    let bureaucraticPhrases = [
        "As per standard operating procedures",
        "With reference to the matter at hand",
        "In accordance with established protocols",
        "Pursuant to our previous correspondence",
        "For the purposes of regulatory compliance",
        "In consideration of procedural requirements",
        "Under the provisions of applicable guidelines",
    ];
    let randomPhrase = bureaucraticPhrases[Math.floor(Math.random() * bureaucraticPhrases.length)];
    text = `${randomPhrase}, ${text.replace(/^/, '')}`;

  return text
    .replace(/\boccurred\b/g, "was instantiated in a temporal context")
    .replace(/\bfollowing\b/g, "subsequent to the conclusion of")
    .replace(/\bdue to\b/g, "in light of prevailing circumstances")
    .replace(/\bin\b/g, "within the confines of")
    .replace(/\bat\b/g, "during the interval of")
    + " This statement is subject to retrospective reevaluation.";
}
