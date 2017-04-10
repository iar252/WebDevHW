var arrPandas = [];

function setup(){
    createCanvas(1000,300);
      for (var i = 0; i < 4; i++) { //putting the objects into the array
     
     arrPandas[i] = new Panda;
  }

}

function draw(){
    background(252, 242, 153);
      for (var i = 0; i < arrPandas.length; i++) {
    arrPandas[i].update();
    arrPandas[i].check();
    arrPandas[i].display(); 
}
}