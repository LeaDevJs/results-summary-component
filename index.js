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
    document.getElementById("category1").innerHTML = reaction.category;
    document.getElementById("score1").innerHTML = reaction.score;
    const icon1 =document.getElementById("icon1");
    icon1.src= reaction.icon;

    document.getElementById("category2").innerHTML = memory.category;
    document.getElementById("score2").innerHTML = memory.score;
    const icon2 =document.getElementById("icon2");
    icon2.src= memory.icon;

    document.getElementById("category3").innerHTML = verbal.category;
    document.getElementById("score3").innerHTML = verbal.score;
    const icon3 =document.getElementById("icon3");
    icon3.src= verbal.icon;

    document.getElementById("category4").innerHTML = visual.category;
    document.getElementById("score4").innerHTML = visual.score;
    const icon4 =document.getElementById("icon4");
    icon4.src= visual.icon;
  })
  .catch(error => {
    alert('Error al cargar el archivo JSON');
  });
  
