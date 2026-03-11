const easyWords = [
    "chat",
    "chien",
    "pain",
    "lait",
    "eau",
    "sel",
    "sucre",
    "table",
    "chaise",
    "porte",
    "mur",
    "sol",
    "main",
    "pied",
    "tete",
    "nez",
    "yeux",
    "bras",
    "jambe",
    "dos",
    "ami",
    "amie",
    "pere",
    "mere",
    "frere",
    "soeur",
    "oncle",
    "tante",
    "jour",
    "nuit",
    "matin",
    "soir",
    "hier",
    "demain",
    "ici",
    "la",
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
    "je",
    "tu",
    "il",
    "elle",
    "nous",
    "vous",
    "eux",
    "elles",
    "mon",
    "ton",
    "son",
    "notre",
    "votre",
    "leur",
    "ce",
    "cet",
    "cette",
    "ces",
    "un",
    "une",
    "des",
    "le",
    "la",
    "les",
    "du",
    "au",
    "aux",
    "sur",
    "sous",
    "dans",
    "avec",
    "sans",
    "vers",
    "pour",
    "contre",
    "chez",
    "entre",
    "avant",
    "apres",
    "pendant",
    "toujours",
    "souvent",
    "parfois",
    "jamais",
    "encore",
    "deja",
    "trop",
    "peu",
    "beaucoup",
    "tout",
    "rien",
    "quelque",
    "ainsi",
    "alors",
    "donc",
    "mais",
    "ou",
    "et",
    "car",
    "si",
    "quand",
    "comme",
    "pourquoi",
    "comment",
    "combien",
    "oublie",
    "trouve",
    "pense",
    "aime",
    "marche",
    "court",
    "saute",
    "parle",
    "crie",
    "rit",
    "pleure",
    "mange",
    "boit",
    "dort",
    "lit",
    "ecrit",
    "ouvre",
    "ferme",
    "tourne",
    "regarde",
    "ecoute",
    "attend",
    "prend",
    "pose",
    "donne",
    "garde",
    "cherche",
    "montre",
    "pousse",
    "tire",
    "porte",
    "tombe",
    "leve",
    "baisse",
    "monte",
    "descend",
    "arrive",
    "part",
    "reste",
    "vient",
    "voit",
    "sent",
    "touche",
    "essaie",
    "joue",
    "gagne",
    "perd",
    "change",
    "ajoute",
    "retire",
    "coupe",
    "colle",
    "range",
    "lave",
    "seche",
    "plie",
];
const mediumWords = [
    "maison",
    "voiture",
    "ordinateur",
    "clavier",
    "ecran",
    "telephone",
    "fenetre",
    "cuisine",
    "salon",
    "chambre",
    "bureau",
    "travail",
    "ecole",
    "college",
    "universite",
    "professeur",
    "eleve",
    "etudiant",
    "exercice",
    "question",
    "reponse",
    "solution",
    "probleme",
    "histoire",
    "geographie",
    "science",
    "nature",
    "animal",
    "plante",
    "montagne",
    "riviere",
    "ocean",
    "foret",
    "prairie",
    "desert",
    "nuage",
    "pluie",
    "orage",
    "vent",
    "soleil",
    "etoile",
    "planete",
    "galaxie",
    "univers",
    "energie",
    "force",
    "vitesse",
    "distance",
    "volume",
    "surface",
    "temperature",
    "pression",
    "matiere",
    "atome",
    "molecule",
    "reaction",
    "experience",
    "analyse",
    "mesure",
    "calcul",
    "nombre",
    "valeur",
    "resultat",
    "fonction",
    "variable",
    "tableau",
    "liste",
    "donnee",
    "fichier",
    "dossier",
    "reseau",
    "internet",
    "serveur",
    "logiciel",
    "programme",
    "developpeur",
    "application",
    "navigation",
    "connexion",
    "securite",
    "identifiant",
    "motdepasse",
    "interface",
    "utilisateur",
    "parametre",
    "configuration",
    "installation",
    "miseajour",
    "version",
    "prototype",
    "conception",
    "architecture",
    "structure",
    "organisation",
    "strategie",
    "gestion",
    "projet",
    "planning",
    "objectif",
    "priorite",
    "qualite",
    "performance",
    "amelioration",
    "optimisation",
    "creation",
    "invention",
    "decouverte",
    "innovation",
    "imagination",
    "inspiration",
    "motivation",
    "concentration",
    "attention",
    "memoire",
    "reflexion",
    "decision",
    "evaluation",
    "comparaison",
    "observation",
    "description",
    "explication",
    "interpretation",
    "communication",
    "discussion",
    "conversation",
    "argument",
    "opinion",
    "information",
    "connaissance",
    "apprentissage",
    "formation",
    "education",
    "enseignement",
    "lecture",
    "ecriture",
    "redaction",
    "traduction",
    "prononciation",
    "grammaire",
    "orthographe",
    "vocabulaire",
    "expression",
    "langage",
    "discours",
    "presentation",
    "conference",
    "reunion",
    "collaboration",
    "partenariat",
    "negociation",
    "transaction",
    "commerce",
    "entreprise",
    "industrie",
    "production",
    "distribution",
    "livraison",
    "transport",
    "logistique",
    "itineraire",
    "destination",
    "voyage",
    "tourisme",
    "aventure",
    "exploration",
    "souvenir",
    "emotion",
    "sensation",
    "impression",
    "adaptation",
    "transformation",
    "evolution",
    "progression",
    "developpement",
    "croissance",
];
const hardWords = [
    "administration",
    "organisationnel",
    "responsabilite",
    "professionnel",
    "developpement",
    "implementation",
    "international",
    "communication",
    "interpretation",
    "collaboration",
    "coordination",
    "experimentale",
    "documentation",
    "classification",
    "transformation",
    "optimisation",
    "configuration",
    "synchronisation",
    "visualisation",
    "representation",
    "identification",
    "authentification",
    "autorisation",
    "infrastructure",
    "architecture",
    "algorithmique",
    "programmation",
    "compilation",
    "interoperabilite",
    "compatibilite",
    "virtualisation",
    "containerisation",
    "automatisation",
    "orchestration",
    "distribution",
    "sauvegarde",
    "restauration",
    "supervision",
    "monitoring",
    "performance",
    "scalabilite",
    "resilience",
    "tolerance",
    "redondance",
    "migration",
    "integration",
    "deploiement",
    "production",
    "validation",
    "verification",
    "evaluation",
    "amelioration",
    "innovation",
    "technologique",
    "scientifique",
    "experimentateur",
    "interpretatif",
    "comparatif",
    "demonstration",
    "illustration",
    "argumentation",
    "problematique",
    "hypothese",
    "methodologie",
    "statistique",
    "probabilite",
    "modelisation",
    "simulation",
    "analyseur",
    "predictif",
    "correlation",
    "causalite",
    "observationnel",
    "phenomenologie",
    "neuroscience",
    "biologie",
    "genetique",
    "physiologie",
    "biochimie",
    "metabolisme",
    "photosynthese",
    "biodiversite",
    "ecosysteme",
    "environnemental",
    "climatique",
    "geologique",
    "tectonique",
    "sismologie",
    "astronomie",
    "astrophysique",
    "cosmologie",
    "gravitation",
    "relativite",
    "quantification",
    "electromagnetisme",
    "thermodynamique",
    "cristallisation",
    "polymerisation",
    "nanotechnologie",
    "cybersecurite",
    "cryptographie",
    "authentificateur",
    "certification",
    "normalisation",
    "standardisation",
    "industrialisation",
    "commercialisation",
    "internationalisation",
    "regionalisation",
    "urbanisation",
    "modernisation",
    "numerisation",
    "digitalisation",
    "interconnexion",
    "interdependance",
    "globalisation",
    "diversification",
    "specialisation",
    "professionnalisation",
    "responsabilisation",
    "conscientisation",
    "sensibilisation",
    "contextualisation",
    "conceptualisation",
    "operationalisation",
    "institutionnalisation",
    "legislation",
    "reglementation",
    "administratif",
    "bureaucratique",
    "juridictionnel",
    "constitutionnel",
    "parlementaire",
    "gouvernemental",
    "diplomatique",
    "geopolitique",
    "democratique",
    "participatif",
    "consultatif",
    "deliberation",
    "negociation",
    "arbitrage",
    "conciliation",
    "mediation",
    "resolution",
    "interpretation",
    "argumentatif",
    "persuasion",
    "rhetorique",
    "philosophique",
    "epistemologie",
    "metaphysique",
    "ontologie",
    "ethique",
    "dialectique",
    "hermeneutique",
    "existentialisme",
    "structuralisme",
    "postmodernisme",
    "interdisciplinarite",
    "transdisciplinarite",
    "multidimensionnel",
];
const actualArray = [];
const textareaContent = [];
let actualDifficulty = "";
let wpm = 0;
let totalcharacters = 0;
let correctcharacters = 0;
let timeLeft = 60;
let timerInterval = null;

const $start = document.querySelector("#start");
const $dialog1 = document.querySelector("#dialog1");
const $radios = document.getElementsByName("radios");
const $backDiv = document.querySelector("#backDiv");
const $textarea = document.querySelector("#textarea");
const $spanRemove = document.querySelector("#spanRemove");
const $wpm = document.querySelector("#wpm");
const $accu = document.querySelector("#accu");
const $timer = document.querySelector("#timer");

$start.addEventListener("click", () => {
    $spanRemove.remove();
    $dialog1.close();
    for (let radio of $radios) {
        if (radio.checked) {
            actualDifficulty = radio.value;
            createSentence(radio.value);
            updateCursor("", 0);
        }
    }
});

function createSentence(difficulty) {
    if (difficulty == "easy") {
        for (let i = 0; i < 80; i++) {
            const random = Math.floor(Math.random() * easyWords.length);
            actualArray.push(easyWords[random]);
            createSpan(i);
        }
    }
    if (difficulty == "medium") {
        for (let i = 0; i < 80; i++) {
            const random = Math.floor(Math.random() * mediumWords.length);
            actualArray.push(mediumWords[random]);
            createSpan(i);
        }
    }
    if (difficulty == "hard") {
        for (let i = 0; i < 80; i++) {
            const random = Math.floor(Math.random() * hardWords.length);
            actualArray.push(hardWords[random]);
            createSpan(i);
        }
    }
    /*$backDiv.setAttribute("data-placeholder", actualArray.join(" "));*/
}
function newWord() {
    if (actualDifficulty == "easy") {
        const random = Math.floor(Math.random() * easyWords.length);
        actualArray.push(easyWords[random]);
        const i = actualArray.length - 1;
        createSpan(i);
    }
    if (actualDifficulty == "medium") {
        const random = Math.floor(Math.random() * mediumWords.length);
        actualArray.push(mediumWords[random]);
        const i = actualArray.length - 1;
        createSpan(i);
    }
    if (actualDifficulty == "hard") {
        const random = Math.floor(Math.random() * hardWords.length);
        actualArray.push(hardWords[random]);
        const i = actualArray.length - 1;
        createSpan(i);
    }
}

function createSpan(i) {
    const newSpan = document.createElement("span");
    newSpan.classList.add("grey");
    newSpan.setAttribute("id", `span${i}`);
    $backDiv.appendChild(newSpan);
    for (let j = 0; j < actualArray[i].length; j++) {
        const newSpanInSpan = document.createElement("span");
        newSpanInSpan.classList.add("grey");
        newSpanInSpan.textContent = actualArray[i][j];
        newSpan.appendChild(newSpanInSpan);
    }
    const space = document.createElement("span");
    space.textContent = " ";
    newSpan.appendChild(space);
}
$textarea.addEventListener("keydown", (e) => {
    if (e.key == "Backspace" || e.key == "Delete") {
        e.preventDefault();
    }
});

let currentWordIndex = 0;

$textarea.addEventListener("input", (e) => {
    const words = $textarea.textContent.trim().split(" ");
    const lastWord = words[words.length - 1];

    if (e.data !== " ") {
        isEqual(lastWord, currentWordIndex);
    }
    updateCursor(lastWord, currentWordIndex);
    if (e.data == " ") {
        if (lastWord != "") {
            const actualSpan = document.querySelector(
                `#span${currentWordIndex}`,
            );
            if (actualSpan) {
                const letterSpans = actualSpan.querySelectorAll("span");
                for (
                    let j = lastWord.length;
                    j < actualArray[currentWordIndex].length;
                    j++
                ) {
                    letterSpans[j].classList.remove("grey", "green");
                    letterSpans[j].classList.add("red");
                    totalcharacters++; // ✅ lettres non tapées = erreurs
                }
                if (totalcharacters == 0) {
                    accuracy = 100;
                } else {
                    accuracy = Math.round(
                        (correctcharacters / totalcharacters) * 100,
                    );
                }
                $accu.textContent = accuracy + "%";
            }
            wpm++;
            $wpm.textContent = wpm;
            textareaContent.push(lastWord);
            currentWordIndex++;
            $textarea.textContent = "";
            setCursorToEnd($textarea);
            updateCursor("", currentWordIndex);
            newWord();
        }
    }
});

function isEqual(lastWord, wordIndex) {
    const actualSpan = document.querySelector(`#span${wordIndex}`);
    if (!actualSpan) return;
    const letterSpans = actualSpan.querySelectorAll("span");
    for (let j = 0; j < actualArray[wordIndex].length; j++) {
        letterSpans[j].classList.remove("red", "green", "grey");

        if (j < lastWord.length) {
            if (j == lastWord.length - 1) {
                totalcharacters++;
                if (lastWord[j] == actualArray[wordIndex][j]) {
                    correctcharacters++;
                }
            }
            if (lastWord[j] != actualArray[wordIndex][j]) {
                letterSpans[j].classList.add("red");
            } else {
                letterSpans[j].classList.add("green");
            }
        } else {
            letterSpans[j].classList.add("grey");
        }
    }
    if (totalcharacters == 0) {
        accuracy = 100;
    } else {
        accuracy = Math.round((correctcharacters / totalcharacters) * 100);
    }
    if (accuracy != 100) {
        $accu.classList.add("onlyred");
    }
    $accu.textContent = accuracy + "%";
}

function setCursorToEnd(e) {
    const range = document.createRange();
    const selection = window.getSelection();
    range.selectNodeContents(e);
    range.collapse(false); // false = place le curseur à la fin
    selection.removeAllRanges();
    selection.addRange(range);
}

function updateCursor(lastWord, wordIndex) {
    const oldCursor = document.querySelector(".cursor");
    if (oldCursor) {
        oldCursor.classList.remove("cursor");
    }

    const actualSpan = document.querySelector(`#span${wordIndex}`);
    if (actualSpan) {
        const letterSpans = actualSpan.querySelectorAll("span");
        const cursorIndex = lastWord.length;
        if (letterSpans[cursorIndex]) {
            letterSpans[cursorIndex].classList.add("cursor");
        }
    }
}

function startTimer() {
    timerInterval = setInterval(() => {
        timeLeft--;
        $timer.textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            endGame();
        }
    }, 1000);
}

function endGame() {
    $textarea.setAttribute("contenteditable", "false");
    const wrongcharacters = totalcharacters - correctcharacters;
    localStorage.setItem("wpmResults", wpm);
    localStorage.setItem("accResults", accuracy);
    localStorage.setItem("correctResults", correctcharacters);
    localStorage.setItem("wrongResults", wrongcharacters);
}
