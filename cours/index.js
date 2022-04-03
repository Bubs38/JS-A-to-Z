// SELECTEURS
// document.querySelector("h4").style.background="Yellow";
// const baliseHTML = document.querySelector("h4")

// CLICK EVENT
const questionContainer = document.querySelector(".click-event");
const btn1 = document.querySelector("#btn-1");
const btn2 = document.getElementById("btn-2");
const response = document.querySelector("p");

questionContainer.addEventListener("click", () => {
  questionContainer.classList.toggle("question-clicked");
});

btn1.addEventListener("click", () => {
  response.classList.add("show-response");
  response.style.background = "green";
});

btn2.addEventListener("click", () => {
  response.classList.add("show-response");
  response.style.background = "red";
});
//-----------------------------------------------------------
// // MOUSE EVENT
const mouseMove = document.querySelector(".mouse-move");

window.addEventListener("mousemove", (e) => {
  mouseMove.style.left = e.pageX + "px";
  mouseMove.style.top = e.pageY + "px";
});

window.addEventListener("mousedown", () => {
  mouseMove.style.transform = "scale(2) translate(-25%, -25%)";
});

window.addEventListener("mouseup", () => {
  mouseMove.style.transform = "scale(1) translate(-50%, -50%)";
  mouseMove.style.border = "2px solid teal";
});

questionContainer.addEventListener("mouseenter", () => {
  questionContainer.style.background = "rgba(0,0,0,0.6)";
});
questionContainer.addEventListener("mouseout", () => {
  questionContainer.style.background = "pink";
});
response.addEventListener("mouseover", () => {
  response.style.transform = "rotate(2deg)";
});
//--------------------------------------------------------------
// KEYPRESS EVENT

const keypressContainer = document.querySelector(".keypress");
const key = document.getElementById("key");

const ring = () => {
  const audio = new Audio();
  audio.src = "./Enter.mp3";
  audio.play();
};

document.addEventListener("keypress", (e) => {
  key.textContent = e.key;

  if (e.key === "j") {
    keypressContainer.style.background = "pink";
  } else {
    keypressContainer.style.background = "teal";
  }
  ring();
});

//------------------------------------------------------------
// SCROLL EVENT

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 120) {
    nav.style.top = 0;
  } else {
    nav.style.top = "-50px";
  }
});

// --------------------------------------------------------------
// FORM EVENT
const inputName = document.querySelector('input[type="text"]');
const select = document.querySelector("select");
const form = document.querySelector("form");

let pseudo = "";
let language = "";

inputName.addEventListener("input", (e) => {
  pseudo = e.target.value;
});

select.addEventListener("input", (e) => {
  language = e.target.value;
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (cgv.checked) {
    document.querySelector("form > div").innerHTML = `
      <h3>Pseudo : ${pseudo}</h3>
      <h4>Langage Préféré : ${language}</h4>
    `;
  } else {
    alert("Veuillez accepter les CGV");
  }
});

//---------------------------------------------------------
// LOAD EVENT
window.addEventListener("load", () => {
  console.log("document chargé !");
});

//----------------------------------------------------------
// FOREACH
const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
  box.addEventListener("click", (e) => {
    e.target.style.transform = "scale(0.7)";
  });
});

//---------------------------------------------------------
//ADDEVENTLISTENER VS ONCLICK
// document.body.onclick = () => {
//   console.log("Click !");
// };

//Bubbling => fin (de base l'eventlistener est en bubbling)
document.body.addEventListener("click", () => { 
  console.log("Click 1");
},);

//Usecapture => en premier 
document.body.addEventListener("click", () => {
    console.log("Click 2");
  },true);

//---------------------------------------------------
// STOP PROPAGATION
// questionContainer.addEventListener('click', (e) => {
//   alert("test");
//   e.stopPropagation();
// });

//REMOVEENEVENTLISTENER

//-----------------------------------------------------------
// BOM
// window.open("http://google.com", "cours js", "height=600, width=800");

// // window.close();


// EVENEMENT ADOSSES A WINDOW

// alert("test");

//confirm
btn2.addEventListener('click', () => {
  confirm("Voulez-vous vraiment vous tromper ?");
});

// PROMPT
btn1.addEventListener('click', () => {
  let answer = prompt('Entrer votre nom !');
  
  questionContainer.innerHTML += "<h3>Bravo " + answer + "</h3>";
});

// TIMER ET COMPTE 0 REBOURS
setTimeout(() => {
  questionContainer.style.borderRadius = "300px";
}, 2000);
let interval = setInterval(() => {
  document.body.innerHTML += 
    "<div class='box'><h2>Nouvelle Boîte !</h2></div>"
}, 1000);

document.body.addEventListener('click', (e) => {
  // e.target.remove();
  clearInterval(interval);
});

// //Location
// console.log(location.href);
// console.log(location.host);
// console.log(location.pathname);
// console.log(location.search);
// location.replace("http://lequipe.fr");

// window.onload = () => {
//   location.href = "http://twitter.fr"
// }

// NAVIGATOR
// console.log(navigator.userAgent);

// https://developer.mozilla.org/fr/docs/Web/API/Geolocation/getCurrentPosition

//HISTORY
// console.log(history);
// window.history.back();
// history.go(-2)

//------------------------------------------------------------------
// SET PROPERTY
window.addEventListener('mousemove', (e) => {
  nav.style.setProperty('--x', e.layerX + "px");
  nav.style.setProperty('--y', e.layerY + "px");
})