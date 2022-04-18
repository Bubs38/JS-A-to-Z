// ---------------------------------
// XMLHttpRequest (ancienne méthode)
// ---------------------------------

// function regListener() {
//   console.log(this.responseText);
// }

// let req = new XMLHttpRequest();
// req.onload = regListener;
// // req.open('get', 'data.txt', true);
// // req.open("get", "data.json", true);
// req.open('get', 'https://api.blablagues.net/?rub=blagues', true);
// req.send();

// ---------------------------------
// FETCH
// ---------------------------------

// fetch("mon-url", "object d'options").then((response) => {
//   // console.log(response);
// }).catch((err) => console.log(err));

fetch("data.txt");
// .then((res) => res.text())
// .then((data) => console.log(data));

fetch("data.json");
// .then((res) => res.json())
// .then((data) => console.log(data));

const myHeaders = new Headers();

const init = {
  method: "get",
  headers: myHeaders,
  mode: "cors",
};

fetch("data.json", init).then((res) => console.log(res));

// ---------------------------------------
// CRUD => Create (Post), read (get), update (put), Delete (delete)

const init2 = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    pseudo: "Bubs",
    message: "Yo les gens !",
  }),
  mode: "cors",
  credentials: "same-origin",
};

document.querySelector('form').addEventListener('submit', () => {
  fetch("http://localhost:3000/posts", init2).then(() =>
    console.log("data envoyée")
  );
})

// --------------------------------------
// Asynchrone
// --------------------------------------

