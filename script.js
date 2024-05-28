fetch("https://pizza.kando-dev.eu/Pizza").then((res)=> res.json())
.then((data) => {
    console.log(data);

   
    for(let i = 0; i < data.length; i++){

    document.getElementById('container').innerHTML += `  <div class = "col-md-3">
    <div class = "row">
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img src= ${data[i].kepURL} alt="Avatar">
          </div>
          <div class="flip-card-back">
            <h1>${data[i].name}</h1>
            <p>${data[i].isGlutenFree ? "Igen":"Nem"}</p>
            <Button onclick = "Reszletek(${data[i].id})     "><p>Részletek</p></Button>
          </div>
        </div>
       </div>
      </div>
    </div>`
    }
  })



  function Reszletek(id){
    console.log(id);
    fetch("https://pizza.kando-dev.eu/Pizza"+ id)
    .then((res)=> res.json())
    .then((data) => {
        console.log(data);
    
       

    
        document.getElementById('idekell').innerHTML += `  <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img src= ${data[i].kepURL} alt="Avatar" style="width:300px;height:300px;">
            </div>
            <div class="flip-card-back">
              <h1>${data[i].name}</h1>
              <p>${data[i].isGlutenFree ? "Igen":"Nem"}</p>
            </div>
          </div>
        </div>`
        })
      }
    
  
