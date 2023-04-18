let digimons = [];

function traerDigimon() {
  fetch("https://digimon-api.vercel.app/api/digimon")
    .then((response) => response.json())
    .then((data) => {
      digimons.push(data);
      for (let i = 0; i < data.length; i++) {
        const element = data[i];
        let content = document.getElementById("contenido");
        content.innerHTML += `<div class="card text-bg-dark border-dark my-2" style="width: 12rem;" onclick="modal(${i})" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <img src=${element.img} class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title text-center">${element.name}</h5>
                    <p class="card-text text-center">${element.level}</p>
                </div>
            </div>`;
      }
    });
}

function modal(id) {
  document.getElementById(
    "exampleModalLabel"
  ).innerHTML = `${digimons[0][id].name}`;
  document.getElementById("img").src = `${digimons[0][id].img}`;
  document.getElementById("level").innerHTML = `${digimons[0][id].level}`;
}
