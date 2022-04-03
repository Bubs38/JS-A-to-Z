// Créer un événément au scroll

// Cacher la navbar si l'utilisateur comment à descendre et la sortir quand il remonte

// Stocker la valeur du précédent niveau de scroll pour savoir si l'on est monté ou descendu

// Connaitre niveau de scroll (window.scrollY)

let lastScroll = 0;
const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > lastScroll) {
    nav.style.top = "-60px";
  } else {
    nav.style.top = 0;
  }
  lastScroll = window.scrollY;
});
