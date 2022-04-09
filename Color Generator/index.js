const colorGenerator = () => {
  const rRandom = Math.floor(Math.random() * 255);
  const gRandom = Math.floor(Math.random() * 255);
  const bRandom = Math.floor(Math.random() * 255);
  
  const color = `rgb(${rRandom} ,${gRandom} ,${bRandom})`;
  document.body.style.background = color;
  document.body.innerHTML = `<h2>${color}</h2>`;
};

setInterval(colorGenerator, 2000);
