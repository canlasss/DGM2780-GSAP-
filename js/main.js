"use strict";

var tl = new TimelineLite, 
    mySplitText = new SplitText("#quote", {type:"words,chars"}), 
    chars = mySplitText.chars; 

TweenLite.set("#quote", {perspective:400});

tl.staggerFrom(chars, 0.8, {opacity:0, scale:0, y:80, rotationX:180, transformOrigin:"0% 50% -50",  ease:Back.easeOut}, 0.01, "+=0");



document.getElementById("animate").onclick = function() {
  tl.restart();
}

const $el = document.querySelector('.fade-in');
const duration = 2;
const from = { opacity: 0, ease: Linear.ease };
const to = { opacity: 1 };

function fadeIn() {
   TweenLite.fromTo($el, duration, from, to);
}

$el.addEventListener('click', fadeIn);



