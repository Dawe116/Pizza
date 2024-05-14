fetch("https://pizza.kando-dev.eu/Pizza").then((res)=> res.json())
.then((datas) => {
    console.log(datas);
    let contentHTML = document.getElementById('idekell');
    for(const data of datas){
        

            contentHTML.innerHTML +=   
            `<div class="card" style="width: 18rem;">
              <img src="${data.kepURL}" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">${data.name}</h5>
                <p class="card-text">1800 FT</p>
                <p class="card-text">Glutén free: ${data.isGlutenFree}</p>
                <a href="#" class="btn btn-primary">Kosárba</a>
              </div>
            </div>`
    }
})