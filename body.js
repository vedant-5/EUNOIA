var cards = document.querySelectorAll(".card");
var cardsbody = document.querySelector("a");
var tiles = document.querySelectorAll(".container img");
var details = document.querySelector("#fordetails");

for (var i = 0; i < 12; i++) {
  tiles[i].addEventListener("mouseover", function () {
    //this.style.opacity = 0.7;
    //this.style.border = "5px solid black";
  });
  tiles[i].addEventListener("mouseout", function () {
    this.style.opacity = 1;
    //this.style.border = "5px solid gold";
  });
}

for (var i = 0; i < trial.length; i++) {
  trial[i].addEventListener("mouseover", function () {
    this.style.opacity = 0.7;
    //this.style.border = "5px solid black";
    //this.style.background = "gold";
  });
  //trial[i].addEventListener("mouseout",function(){
  //this.style.opacity=1;
  //this.style.border="5px solid gold"

  //})
}

details.addEventListener("mouseover", function () {
  this.style.color = "white";
  this.style.fontWeight = "bold";
});
details.addEventListener("mouseout", function () {
  this.style.color = "black";
});