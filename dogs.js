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
    if (this.readyTState ==4&& this.status ==200){
      initialresponse=JSON.parse(this.responseTest);
      for (i=0; i<initialresponse.data.length; i++){
        catfacts.push(initialresponse.data[i].fact);
        console.log(initialresponse.data[i].fact);
      }
      catsset=true;
    }
  };
  xhttp.open("GET", "https://catfact.ninja/facts?limit=8", true);
  xhttp.setRequestHeader("Content-type", "application/json");
  xhttp.send();
  
}
