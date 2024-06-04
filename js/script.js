fetch("https://pizza.kando-dev.eu/Pizza")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);

    // Töröljük a container tartalmát, hogy ne fűzzünk hozzá minden egyes új adatlekérésnél
    document.getElementById('container').innerHTML = '';

    // Az adatok megjelenítése 4 oszlopban
    for (let i = 0; i < data.length; i++) {
      document.getElementById('container').innerHTML += `
        <div class="col-md-3">
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img src="${data[i].kepURL}" alt="Avatar">
              </div>
              <div class="flip-card-back">
                <h1>${data[i].name}</h1>
                <p>Glutén mentes: ${data[i].isGlutenFree ? "Igen" : "Nem"}</p>
                <button onclick="Reszletek(${data[i].id})"><p>Részletek</p></button>
                <button onclick="Delete(${data[i].id})"><p>Törlés</p></button>
              </div>
            </div>
          </div>
        </div>
      `;
    }
  })
  .catch((error) => {
    console.error('Hiba történt:', error);
  });






  function Reszletek(id) {
    console.log(id);

    
    fetch("https://pizza.kando-dev.eu/Pizza/" + id)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      document.getElementById('idekell').innerHTML += `
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img src="${data.kepURL}" alt="Avatar" style="width:300px;height:300px;">
            </div>
            <div class="flip-card-back">
              <h1>${data.name}</h1>
              <p>${data.isGlutenFree ? "Igen" : "Nem"}</p>
            </div>
          </div>
        </div>
      `;
    })
    .catch((error) => {
      console.error('Hiba történt:', error);
    });
  }




  function Delete(id){
    fetch("https://pizza.kando-dev.eu/Pizza/"+id, {
        method: "DELETE",
        headers: {"Content-Type": "application/json"
    }
    })
    .then(function(){
        location.reload();
    })
}