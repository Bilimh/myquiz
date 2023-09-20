export const Questions = [
  {
      question: "Quelle est la signification de l'acronyme PIB ?",
      answers: [
          "Produit Intérieur Brut",
          "Produit National Brut",
          "Pays Industriel Basique",
          "Profit Inflation Boursier"
      ],
      correct: "Produit Intérieur Brut"
  },
  {
      question: "Quelle est la principale différence entre le PIB et le PNB ?",
      answers: [
          "Le PIB ne prend en compte que les revenus des résidents, tandis que le PNB inclut les revenus des résidents et des non-résidents.",
          "Le PIB ne tient compte que des biens produits dans le pays, tandis que le PNB inclut les services.",
          "Le PIB mesure la richesse individuelle, tandis que le PNB mesure la richesse collective.",
          "Le PIB est une mesure annuelle, tandis que le PNB est une mesure trimestrielle."
      ],
      correct: "Le PIB ne prend en compte que les revenus des résidents, tandis que le PNB inclut les revenus des résidents et des non-résidents."
  },
  {
      question: "Quel terme désigne la somme totale de la valeur des biens et services produits dans un pays au cours d'une année ?",
      answers: [
          "PIB nominal",
          "PIB réel",
          "PIB par habitant",
          "PIB potentiel"
      ],
      correct: "PIB nominal"
  },
  {
      question: "Si le PIB d'un pays augmente de 5% en une année, cela signifie que :",
      answers: [
          "L'économie du pays a connu une croissance de 5% au cours de cette année.",
          "Le niveau général des prix a augmenté de 5% au cours de cette année.",
          "Le PNB a également augmenté de 5% au cours de cette année.",
          "Le taux de chômage a augmenté de 5% au cours de cette année."
      ],
      correct: "L'économie du pays a connu une croissance de 5% au cours de cette année."
  },
  {
      question: "Quel est le calcul du PNB d'un pays ?",
      answers: [
          "PIB + Revenus nets en provenance de l'étranger - Revenus nets vers l'étranger",
          "PIB + Investissements étrangers - Exportations",
          "PIB - Consommation intérieure",
          "PIB + Dépenses gouvernementales"
      ],
      correct: "PIB + Revenus nets en provenance de l'étranger - Revenus nets vers l'étranger"
  },
  {
      question: "Le PIB par habitant est calculé en divisant le PIB total par :",
      answers: [
          "La population totale du pays",
          "Le nombre de travailleurs du pays",
          "Le nombre de chômeurs du pays",
          "Le nombre d'enfants du pays"
      ],
      correct: "La population totale du pays"
  },
  {
      question: "Quelle est la formule du PIB réel ?",
      answers: [
          "PIB réel = (PIB nominal / Indice des prix) x 100",
          "PIB réel = PIB nominal + Inflation",
          "PIB réel = PIB nominal - Chômage",
          "PIB réel = (PIB nominal x Taux de croissance) / 100"
      ],
      correct: "PIB réel = (PIB nominal / Indice des prix) x 100"
  },
  {
      question: "Quel pays est généralement considéré comme ayant le PIB le plus élevé au monde ?",
      answers: [
          "États-Unis",
          "Chine",
          "Inde",
          "Japon"
      ],
      correct: "États-Unis"
  },
  {
      question: "Quelle est la signification de l'acronyme PNB ?",
      answers: [
          "Produit National Brut",
          "Produit Intérieur Brut",
          "Pays Non-Basique",
          "Profit Net Brut"
      ],
      correct: "Produit National Brut"
  },
  {
      question: "Le PNB d'un pays peut être négatif. Qu'est-ce que cela signifie généralement ?",
      answers: [
          "Le pays a plus de dettes que de richesses produites.",
          "Le pays a connu une forte récession économique.",
          "Le pays a un taux de chômage élevé.",
          "Le pays exporte plus qu'il n'importe."
      ],
      correct: "Le pays a plus de dettes que de richesses produites."
  }
]






export const Question = [
    {
      question: "Quelle est la syntaxe correcte pour déclarer une variable en JavaScript ?",
      answers: [
        "var myVar",
        "variable myVar",
        "v myVar",
        "let myVar"
      ],
      correct: "var myVar"
    },
    {
      question: "Quelle méthode est utilisée pour afficher une boîte de dialogue avec un message en JavaScript ?",
      answers: [
        "alert()",
        "messageBox()",
        "print()",
        "prompt()"
      ],
      correct: "alert()"
    },
    {
      question: "Quelle est la différence entre `let` et `var` en termes de portée (scope) des variables ?",
      answers: [
        "Elles ont la même portée.",
        "`let` a une portée globale, tandis que `var` a une portée locale.",
        "`var` a une portée globale, tandis que `let` a une portée locale.",
        "`let` a une portée de bloc, tandis que `var` a une portée de fonction."
      ],
      correct: "`let` a une portée de bloc, tandis que `var` a une portée de fonction."
    },
    {
      question: "Comment déclare-t-on une fonction anonyme en JavaScript ?",
      answers: [
        "function maFonction() {}",
        "function() {}",
        "anonymous function() {}",
        "() => {}"
      ],
      correct: "() => {}"
    },
    {
      question: "Quelle méthode est utilisée pour ajouter un élément à la fin d'un tableau en JavaScript ?",
      answers: [
        "push()",
        "append()",
        "addToEnd()",
        "add()"
      ],
      correct: "push()"
    },
    {
      question: "Quel opérateur est utilisé pour vérifier si deux valeurs et leurs types sont égaux en JavaScript ?",
      answers: [
        "==",
        "===",
        "=",
        "!="
      ],
      correct: "==="
    },
    {
      question: "Quelle est la différence entre une promesse (Promise) et un callback en JavaScript ?",
      answers: [
        "Les promesses sont asynchrones, tandis que les callbacks sont synchrones.",
        "Les callbacks sont asynchrones, tandis que les promesses sont synchrones.",
        "Les promesses sont plus anciennes que les callbacks.",
        "Les callbacks sont obsolètes en JavaScript."
      ],
      correct: "Les promesses sont asynchrones, tandis que les callbacks sont synchrones."
    },
    {
      question: "Comment utilisez-vous `async` et `await` pour gérer les opérations asynchrones en JavaScript ?",
      answers: [
        "En utilisant `await` dans une fonction asynchrone pour attendre la résolution d'une promesse.",
        "En utilisant `async` dans une fonction pour rendre toutes ses opérations synchrones.",
        "`async` et `await` ne sont pas des fonctionnalités de JavaScript.",
        "En utilisant `await` dans une fonction synchrone pour attendre la résolution d'une promesse."
      ],
      correct: "En utilisant `await` dans une fonction asynchrone pour attendre la résolution d'une promesse."
    },
    {
      question: "Qu'est-ce que la portée (scope) lexique en JavaScript ?",
      answers: [
        "La portée d'une variable est déterminée par son emplacement dans le code source, au moment de la déclaration.",
        "La portée d'une variable est globale, accessible depuis n'importe où dans le code.",
        "La portée d'une variable est dynamique et peut changer en fonction du contexte.",
        "La portée d'une variable est limitée à la fonction où elle est déclarée."
      ],
      correct: "La portée d'une variable est déterminée par son emplacement dans le code source, au moment de la déclaration."
    },
    {
        question: "Quelle méthode JavaScript est utilisée pour supprimer un élément d'un tableau ?",
        answers: [
          "delete()",
          "remove()",
          "splice()",
          "detach()"
        ],
        correct: "splice()"
      },
      {
        question: "Quelle est la différence entre `null` et `undefined` en JavaScript ?",
        answers: [
          "`null` représente l'absence de valeur, tandis que `undefined` est une valeur non définie.",
          "`null` est une valeur non définie, tandis que `undefined` représente l'absence de valeur.",
          "`null` et `undefined` sont interchangeables en JavaScript.",
          "Il n'y a aucune différence entre `null` et `undefined` en JavaScript."
        ],
        correct: "`null` représente l'absence de valeur, tandis que `undefined` est une valeur non définie."
      },
      {
        question: "Quelle méthode JavaScript est utilisée pour ajouter un élément au début d'un tableau ?",
        answers: [
          "push()",
          "unshift()",
          "prepend()",
          "addFirst()"
        ],
        correct: "unshift()"
      },
      {
        question: "Quelle est la manière correcte de vérifier si une variable a une valeur numérique en JavaScript ?",
        answers: [
          "isNumber(variable)",
          "typeof variable === 'number'",
          "variable.isNumeric()",
          "isNaN(variable)"
        ],
        correct: "typeof variable === 'number'"
      },
      {
        question: "Quelle fonction JavaScript est utilisée pour arrondir un nombre à l'entier le plus proche ?",
        answers: [
          "Math.floor()",
          "Math.round()",
          "Math.ceil()",
          "Math.trunc()"
        ],
        correct: "Math.round()"
      },
      {
        question: "Quelle méthode JavaScript est utilisée pour obtenir la longueur d'une chaîne de caractères ?",
        answers: [
          "length()",
          "size()",
          "count()",
          "length"
        ],
        correct: "length"
      },
      {
        question: "Quelle est la méthode JavaScript utilisée pour ajouter une classe CSS à un élément HTML ?",
        answers: [
          "addClass()",
          "appendClass()",
          "setClass()",
          "classList.add()"
        ],
        correct: "classList.add()"
      },
      {
        question: "Comment peut-on écrire un commentaire sur une seule ligne en JavaScript ?",
        answers: [
          "// Ceci est un commentaire",
          "/* Ceci est un commentaire */",
          "# Ceci est un commentaire",
          "'' Ceci est un commentaire"
        ],
        correct: "// Ceci est un commentaire"
      },
      {
        question: "Quelle méthode JavaScript est utilisée pour inverser l'ordre des éléments d'un tableau ?",
        answers: [
          "reverse()",
          "invert()",
          "flip()",
          "rotate()"
        ],
        correct: "reverse()"
      },
      {
        question: "Quelle est la manière correcte de déclarer une fonction fléchée en JavaScript ?",
        answers: [
          "function maFonction() => {}",
          "() => function maFonction() {}",
          "const maFonction = function() => {}",
          "const maFonction = () => {}"
        ],
        correct: "const maFonction = () => {}"
      }

  ];
  
