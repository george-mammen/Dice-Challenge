//Getting Number between 1 and 6
var randomNumber1=Math.floor(Math.random()*6)+1;
var randomDiceImg1="dice"+randomNumber1+".png";

var img1=document.querySelectorAll("img")[0];
img1.setAttribute("src", randomDiceImg1);

//2nd Image
var randomNumber2=Math.floor(Math.random()*6)+1;
var randomDiceImg2="dice"+randomNumber2+".png";

var img2=document.querySelectorAll("img")[1];
img2.setAttribute("src", randomDiceImg2);

if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML="🚩 Player 1 wins!";
  }
else if (randomNumber2 > randomNumber1){
  document.querySelector("h1").innerHTML="Player 2 wins!🚩";
  }
else{
  document.querySelector("h1").innerHTML="Draw!";
}
