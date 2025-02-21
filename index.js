window.onload=()=>{
    document.getElementById("y20").innerText = new Date().getFullYear();
}

function handleclick(){
    
var randomnumber=Math.floor(Math.random()*6)+1;

var randomnumber1=Math.floor(Math.random()*6)+1;

var randomimagesource="./images/dice"+randomnumber+".png";

var randomimagesource1="./images/dice"+randomnumber1+".png";

document.querySelectorAll("img")[0].setAttribute("src",randomimagesource);

document.querySelectorAll("img")[1].setAttribute("src",randomimagesource1);

if(randomnumber!=randomnumber1){
    if(randomnumber>randomnumber1){
        document.querySelector("h1").innerHTML="🎉 player1 wins!";
    }
    else{
        document.querySelector("h1").innerHTML="🎉 player2 wins!";
    }
}
else{
    document.querySelector("h1").innerHTML="🤝 It's a Draw!";
}
}