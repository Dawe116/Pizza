document.getElementById("send").onclick = function(){

    let adatok = {
        name: document.getElementById("name").value,
        kepURL: document.getElementById("kepURL").value,
        isGlutenFree: document.getElementById("isGlutenFree").checked ? 1 : 0,
    }
    console.log(adatok);

    fetch("https://pizza.kando-dev.eu/Pizza",{
        method: "POST",
        body: JSON.stringify(adatok),
        headers: {
            "Content-Type": "application/json"
        }
    })  
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Hiba történt:', error)); 
}