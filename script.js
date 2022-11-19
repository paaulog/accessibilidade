let bus;

async function getLines() {
  await fetch("./data/bus.json")
    .then((response) => response.json())
    .then((data) => {
        bus = data.l;
        loop();
    })
}

getLines();

function loop() {
    const ul = document.getElementById('list');
    bus.forEach((bus) => {
        const div = document.createElement("div");
      div.innerHTML = `Letreiro: ${bus.c} <br> Destino: ${bus.lt0} <br> Origem: ${bus.lt1}`
      ul.appendChild(div);
    })
}

function search() {
  const input = document.getElementById("pesquisa");
  const filter = input.value.toUpperCase();
  const div = document.querySelectorAll("#list div");
  for (let i = 0; i < div.length; i++) {
    let a = div[i];
    let txtValue = a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      div[i].style.display = "";
    } else {
      div[i].style.display = "none";
    }
  }
}


const button = document.getElementById("button");
button.addEventListener("click", search);
