// -------------------------------------------
// Rappel des types de données
// -------------------------------------------
let string = "Chaine";
let number = 25;
let boolean = true;
let maVariable; //Undefined

// Afficher le type dans la console.
// console.log(typeof maVariable);

//Tableau
let array = ["Bordeaux", "Toulouse", "Nantes"];
// // afficher le second paramètre
// console.log(array[1]);
// // Afficher la 4 lettre du premier paramètre
// console.log(array[0][3]);

let array2 = ["Burdeaux", 24, true, [1, 2], { nom: "Denis" }];
// console.log(array2[4].nom);

let objet = {
  pseudo: "Denis",
  age: 33,
  technos: ["Javascript", "React", "NodeJs"],
  admin: false,
};

// Ajouter un élément dans un objet
objet.adresse = "22 rue du code";
// console.log(objet);

// console.log(objet.technos[0][1]);

let data = [
  {
    pseudo: "Denis",
    age: 33,
    technos: ["Javascript", "React", "NodeJs"],
    admin: false,
  },
  {
    pseudo: "Samia",
    age: 24,
    technos: ["CSS", "React", "NodeJs"],
    admin: false,
  },
  {
    pseudo: "Nikolas",
    age: 42,
    technos: ["PHP", "React", "NodeJs"],
    admin: true,
  },
];

// console.log(data[2].pseudo[2]);

// --------------------------------------------------
// Strucutres de contrôle
// --------------------------------------------------
// if / Else
if (data[0].age > data[1].age) {
  // console.log(data[0].pseudo + " est plus agé que " + data[1].pseudo);
} else {
  // valeur si faux
}

// While
let w = 0;

while (w < 10) {
  w++;
  // console.log("la valeur de w est de : " + w);
}

// Do while
let d = 0;

do {
  d++;
  // console.log(d);
} while (d < 5);

// Les boucles for
for (const user of data) {
  // document.body.innerHTML += `<li>${user.pseudo} - ${user.age} ans</li>`
}

// d'abord déclarer la valeur de i / jusqu'où on boucle / on incrémente i si la condition 2 n'est pas remplie
for (i = 0; i < data.length; i++) {
  // console.log(i);
  // console.log(data[i].technos[0]);
  // document.body.innerHTML += `<h2>${data[i].pseudo}</h2>`;
}

// Switch
document.body.addEventListener("click", (e) => {
  console.log(e.target.id);

  switch (e.target.id) {
    case "javascript":
      document.body.style.background = "yellow";
      break;
    case "php":
      document.body.style.background = "violet";
      break;
    case "python":
      document.body.style.background = "blue";
      break;
    default:
      null;
  }
});