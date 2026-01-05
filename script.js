/* ===== CUSTOM NAME HERE ===== */
const name = "My Love ❤️";

/* Typing Effect */
const text = `Happy Birthday ${name}`;
let i = 0;

function typeEffect(){
  if(i < text.length){
    document.getElementById("typingText").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeEffect, 120);
  }
}
typeEffect();

/* Scroll Next */
function scrollNext(){
  document.getElementById("message").scrollIntoView({behavior:"smooth"});
}

/* Background Music */
const music = document.getElementById("bgMusic");
const btn = document.getElementById("musicBtn");
btn.onclick = () =>{
  if(music.paused){
    music.play();
    btn.innerText="🔊";
  } else{
    music.pause();
    btn.innerText="🎵";
  }
}

/* Floating Hearts */
function createHeart(){
  const heart = document.createElement("div");
  heart.className="heart";
  heart.innerHTML="❤️";
  heart.style.left=Math.random()*100+"vw";
  heart.style.animationDuration=3+Math.random()*3+"s";
  document.body.appendChild(heart);
  setTimeout(()=>heart.remove(),6000);
}

/* Flower Particles */
function createFlower(){
  const flower = document.createElement("div");
  flower.className="flower";
  flower.innerHTML="&#127800";
  flower.style.left=Math.random()*100+"vw";
  flower.style.animationDuration=4+Math.random()*4+"s";
  document.body.appendChild(flower);
  setTimeout(()=>flower.remove(),8000);
}

setInterval(createHeart,400);
setInterval(createFlower,600);
