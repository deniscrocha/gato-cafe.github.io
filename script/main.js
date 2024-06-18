const gatos = [
  {
    name: "Bolitinha 99",
    foto: "../public/bolita.jpg",
  },
  {
    name: "Jurema",
    foto: "../public/jurema.jpg",
  },
  {
    name: "Lulu",
    foto: "../public/lulu.jpg",
  },
  {
    name: "Luis Alfonso Nenê",
    foto: "../public/luis.jpg",
  },
  {
    name: "Lumi(nosa)",
    foto: "../public/lumi.jpg",
  },
  {
    name: "Vardelino Barbacena",
    foto: "../public/vardy.jpg",
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
