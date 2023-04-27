let reaction;
let memory;
let verbal;
let visual; 
fetch("./data.json")
  .then(response => response.json())
  .then(data => {
    let reaction= data[0];
    let memory=data[1];
    let verbal=data[2];
    let visual=data[3];
  })
  .catch(error => {
    alert('Error al cargar el archivo JSON');
  });
  document.getElementById("reaction").innerHTML = "hola"
