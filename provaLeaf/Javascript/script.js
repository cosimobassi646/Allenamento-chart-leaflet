const ctx = document.getElementById('myChart');
var map;
let pulsante = document.getElementById("pulsante");
let p2 = document.getElementById("p2");

const modelli = ["Xiaomi Note 11S", "Samsung Galaxy A14", "Lenovo Tab M10 Plus", "Logitech M90", "Logitech K120", "HP 250 G9"];
const prezzi = [148, 129.90, 199, 6.49, 12.99, 148];
//contenuto e bottoni


//funzione per visualizzare i mediaworld
function mostraNegozi(){
    for(let i=0;i<negozi.length;i++){
      let citta = negozi[i].city
      let lat = negozi[i].latitude;
      let lng = negozi[i].longitude;
      let indirizzo = negozi[i].address;
      var mark = L.marker([lat, lng]).addTo(map);
      mark.bindPopup("citta: " + citta  + " indirizzo: " + indirizzo)
    }
}



  map= L.map('map').setView([43.09307526295415,10.538316408291521], 5);
  
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);

//grafici

let g = document.getElementById('grafico');

function creaGrafico(){
// Rimuovi le parentesi quadre intorno a modelli e prezzi
new Chart(g, {
  type: 'bar',
  data: {
      labels: modelli,
      datasets: [{
          label: 'Prezzo in euro',
          data: prezzi,
          borderWidth: 1
      }]
  },
  options: {
      scales: {
          y: {
              beginAtZero: true
          }
      }
  }
});

}
  
//eventi

pulsante.onclick = mostraNegozi;
p2.onclick = creaGrafico;