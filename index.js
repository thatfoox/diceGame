
//random numbers for changingp pics
var randomNumber1 = Math.floor(Math.random()*6+1);
var randomNumber2 = Math.floor(Math.random()*6+1);

// image elements
var image1 = document.querySelector(".img1");
var randomImage1="images/dice"+randomNumber1+".png";
image1.src=randomImage1;

var image2 = document.querySelector(".img2");
var randomImage2="images/dice"+randomNumber2+".png";
image2.src=randomImage2;

//text for winners
if (randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="🏆Player 1 wins!";
}else if(randomNumber1===randomNumber2){
    document.querySelector("h1").innerHTML="📍Draw!";

}else{
    document.querySelector("h1").innerHTML="Player 2 wins!🏆"

}