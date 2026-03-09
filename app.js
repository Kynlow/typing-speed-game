const easyWords = [
    "chat",
    "chien",
    "pain",
    "lait",
    "eau",
    "sucre",
    "table",
    "chaise",
    "porte",
    "mur",
    "main",
    "pied",
    "tête",
    "nez",
    "yeux",
    "bras",
    "jambe",
    "dos",
    "ami",
    "amie",
    "père",
    "mère",
    "frère",
    "sœur",
    "jour",
    "nuit",
    "matin",
    "soir",
    "hier",
    "demain",
    "ici",
    "là",
    "oui",
    "non",
    "bien",
    "mal",
    "vite",
    "lent",
    "haut",
    "bas",
    "gros",
    "petit",
    "beau",
    "laid",
    "vrai",
    "faux",
    "bon",
    "mauvais",
    "chaud",
    "froid",
    "plein",
    "vide",
    "dur",
    "mou",
    "clair",
    "sombre",
    "neuf",
    "vieux",
];
const mediumWords = [
    "maison",
    "voiture",
    "ordinateur",
    "clavier",
    "écran",
    "téléphone",
    "fenêtre",
    "cuisine",
    "salon",
    "chambre",
    "bureau",
    "travail",
    "école",
    "collège",
    "université",
    "professeur",
    "élève",
    "étudiant",
    "exercice",
    "question",
    "réponse",
    "solution",
    "problème",
    "histoire",
    "géographie",
    "science",
    "nature",
    "animal",
    "plante",
    "montagne",
    "rivière",
    "océan",
    "forêt",
    "prairie",
    "désert",
    "nuage",
    "pluie",
    "orage",
    "vent",
    "soleil",
    "étoile",
    "planète",
    "galaxie",
    "univers",
    "énergie",
    "force",
    "vitesse",
    "distance",
    "volume",
    "surface",
    "température",
    "pression",
    "matière",
    "atome",
    "molécule",
    "réaction",
    "expérience",
    "analyse",
    "mesure",
    "calcul",
];
const hardWords = [
    "administration",
    "organisationnelle",
    "responsabilité",
    "professionnel",
    "développement",
    "implémentation",
    "international",
    "communication",
    "interprétation",
    "collaboration",
    "coordination",
    "expérimentale",
    "documentation",
    "classification",
    "transformation",
    "optimisation",
    "configuration",
    "synchronisation",
    "visualisation",
    "représentation",
    "identification",
    "authentification",
    "autorisation",
    "infrastructure",
    "architecture",
    "algorithmique",
    "programmation",
    "compilation",
    "interopérabilité",
    "compatibilité",
    "virtualisation",
    "automatisation",
    "orchestration",
    "distribution",
    "sauvegarde",
    "restauration",
    "supervision",
    "monitoring",
    "performance",
    "scalabilité",
    "résilience",
    "tolérance",
    "redondance",
    "migration",
    "intégration",
    "déploiement",
    "validation",
    "vérification",
    "évaluation",
    "amélioration",
    "innovation",
    "technologique",
    "scientifique",
    "méthodologie",
    "statistique",
    "probabilité",
    "modélisation",
    "simulation",
    "corrélation",
    "causalité",
];
const actualArray = [];
const textareaContent = [];
let numberOfErrors = 0;

const $start = document.querySelector("#start");
const $dialog1 = document.querySelector("#dialog1");
const $radios = document.getElementsByName("radios");
const $backDiv = document.querySelector("#backDiv");
const $textarea = document.querySelector("textarea");

$start.addEventListener("click", () => {
    $dialog1.close();
    for (let radio of $radios) {
        if (radio.checked) {
            createSentence(radio.value);
        }
    }
});

function createSentence(difficulty) {
    if (difficulty == "easy") {
        for (let i = 0; i < 80; i++) {
            const random = Math.round(Math.random() * easyWords.length);
            actualArray.push(easyWords[random]);
            $backDiv.innerHTML += `<span class="grey" id="span${i}">${actualArray[i]}</span> `;
        }
    }
    if (difficulty == "medium") {
        for (let i = 0; i < 80; i++) {
            const random = Math.round(Math.random() * mediumWords.length);
            actualArray.push(mediumWords[random]);
            $backDiv.innerHTML += `<span class="grey" id="span${i}">${actualArray[i]}</span> `;
        }
    }
    if (difficulty == "hard") {
        for (let i = 0; i < 80; i++) {
            const random = Math.round(Math.random() * hardWords.length);
            actualArray.push(hardWords[random]);
            $backDiv.innerHTML += `<span class="grey" id="span${i}">${actualArray[i]}</span> `;
        }
    }
    /*$backDiv.setAttribute("data-placeholder", actualArray.join(" "));*/
}
$textarea.addEventListener("keydown", (e) => {
    console.log("hello");
    if (e.key == " ") {
        const words = $textarea.value.trim().split(" ");
        const lastWord = words[words.length - 1];

        if (lastWord != "") {
            textareaContent.push(lastWord);

            isEqual(lastWord, words);
        }
    }
});

function isEqual(lastWord, words) {
    if (lastWord != actualArray[words.length - 1]) {
        numberOfErrors++;
        console.log("works");
        const actualSpan = document.querySelector(`#span${words.length - 1}`);
        actualSpan.classList.add("red");
    }
}
