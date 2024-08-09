const images=["Images/dice1.svg","Images/dice2.svg","Images/dice3.svg",
    "Images/dice4.svg","Images/dice5.svg","Images/dice6.svg"]
const img1=document.getElementById("dice1")
const img2=document.getElementById("dice2")
var h1=document.getElementById("text")

function changeImage(){
    var randomNumber1=Math.floor(Math.random()*images.length)
    var randomNumber2=Math.floor(Math.random()*images.length)

   img1.setAttribute("src",images[randomNumber1])
   img2.setAttribute("src",images[randomNumber2])
   if(randomNumber1>randomNumber2){
     h1.innerHTML="🚩 Player 1 Wins";
   }
     else if(randomNumber2>randomNumber1)
     h1.innerHTML=" Player 2 Wins🚩"
    else
    h1.textContent="Match draw!"
}
