//alert("HELLO")

var pics = [
    "imgs/fisherman.jpg",
    "imgs/astronaut.jpg",
    "imgs/hotel.jpg",
];

var btn = document.querySelector("button");
var img = document.querySelector("img");
var counter = 1;

btn.addEventListener("click", function(){
    if(counter===3){
        counter = 0;
    }
    img.src = pics[counter]
    counter = counter+1;
});