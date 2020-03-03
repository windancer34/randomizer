let initialresponse;
let dogfacts = [];

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
function keyPressed(){
  requestcats();
}
function requestcats(){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function(){
    if (this.readyState ==4 && this.status ==200){
      initialresponse=JSON.parse(this.responseText);
      dogfacts.push(initialresponse.message);
      console.log(initialresponse.message);
      //catsset=true;
    }
  };
  xhttp.open("GET", "https://dog.ceo/api/breeds/image/random", true);
  xhttp.send();
  
}
