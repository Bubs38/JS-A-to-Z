// Créer un événement au scroll

// Réduire la navbar quand on descend vers le vite, la remettre à sa taille initiale si on remonte tout en haut

// Faire apparaitre l'image de la partie improvise

// Faire apparaitre la popup quand on est en bas du site

// Bonus : quand on clicke sur la popup elle disparait pour toujours

const nav = document.querySelector("nav");
const image = document.getElementById("imgImprovise");
let playOnce = true;

window.addEventListener("scroll", () => {
  // Navebar effect
  if (window.scrollY > 50) {
    nav.style.height = "40px";
  } else {
    nav.style.height = "90px";
  }

  // Image
  let scrollValue = (window.scrollY + window.innerHeight) / document.body.offsetHeight;

  if (scrollValue > 0.45) {
    image.style.opacity = 1;
    image.style.transform = "none";
  }

  // Popup
  if (scrollValue > 0.85 && playOnce) {
    popup.style.opacity = 1;
    popup.style.transform = "none";
    playOnce = false;
  }
});

closeBtn.addEventListener("click", () => {
  popup.style.opacity = 0;
  popup.style.transform = "translateX(500px)";
});