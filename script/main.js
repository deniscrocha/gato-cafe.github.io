const gatos = [
  {
    name: "Bolitinha 99",
    foto: "https://raw.githubusercontent.com/deniscrocha/gato-cafe.github.io/main/docs/assets/bolita.jpg",
  },
  {
    name: "Jurema",
    foto: "https://raw.githubusercontent.com/deniscrocha/gato-cafe.github.io/main/docs/assets/jurema.jpg",
  },
  {
    name: "Lulu",
    foto: "https://raw.githubusercontent.com/deniscrocha/gato-cafe.github.io/main/docs/assets/lulu.jpg",
  },
  {
    name: "Luis Alfonso Nenê",
    foto: "https://raw.githubusercontent.com/deniscrocha/gato-cafe.github.io/main/docs/assets/luis.jpg",
  },
  {
    name: "Lumi(nosa)",
    foto: "https://raw.githubusercontent.com/deniscrocha/gato-cafe.github.io/main/docs/assets/lumi.jpg",
  },
  {
    name: "Vardelino Barbacena",
    foto: "https://raw.githubusercontent.com/deniscrocha/gato-cafe.github.io/main/docs/assets/vardy.jpg",
  },
];

let lastCat = 0;

function trocarGatos(side) {
  if (side === "right") {
    lastCat++;
  } else if (lastCat === 0) {
  } else if (side === "left") {
    lastCat--;
  }
  if(lastCat === gatos.length){lastCat--}
  let catName = document.getElementById("cat-name");
  let catFoto = document.getElementById("cat-foto");
  while (catFoto.firstChild) {
    catFoto.removeChild(catFoto.firstChild);
  }
  catName.innerHTML = gatos[lastCat].name;
  let foto = document.createElement("img");
  foto.src = gatos[lastCat].foto;
  catFoto.appendChild(foto);
}
