
// Loads particles from particles.json
particlesJS.load('particles-js', 'particles.json', function(){
  console.log('Loading Particles...');
});



// Change title on click
var title = document.getElementById('interests');
var secretTitle = document.getElementById('secret-interests');
var index = 1;
var titles = ["Software Developer", "Geologist", "Kayaker", "Pokemon Master", "Shirt Enthusiast", "Ameature Nugget Eater", "Aspiring Stubble Grower"];
title.addEventListener('click', function(){
  if(index >= titles.length){
    index = 0;
  }
  title.innerHTML = titles[index];
  secretTitle.innerHTML = titles[index];
  index++;
});
secretTitle.addEventListener('click', function(){
  if(index >= titles.length){
    index = 0;
  }
  title.innerHTML = titles[index];
  secretTitle.innerHTML = titles[index];
  index++;
});



// Plays video when visible or when play is clicked
var videoChecker = document.getElementById('video-checker')
var video = document.getElementById('video-player');
var wrapper = document.getElementById('video');
var playVid = document.getElementsByClassName('play-video')
var scrollFlag = true;
// Adds event listener to scrolling
window.onscroll = function(){
  if(checkVisible(videoChecker)){
    if(scrollFlag){
      openModal();
      video.play();
      scrollFlag = false;
    }
  } else {
    video.pause();
    closeModal();
  }
};
// Listen for outside click
window.addEventListener('click', function(){
  video.pause();
  closeModal();
});
for(var i = 0; i < playVid.length; i++){
  console.log(playVid[i]);
  playVid[i].addEventListener('click', function(){
    openModal();
    video.play();
  });
}
// Checks elms visability on screen
function checkVisible(elm) {
  var rect = elm.getBoundingClientRect();
  var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
  return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}
function openModal(){
  wrapper.style.display = 'block';
}
function closeModal(){
  wrapper.style.display = 'none';
}
function outsideClick(e){
  if(e.target != video){
    wrapper.style.display = 'none';
  }
}



// Scroll animations
window.sr = ScrollReveal();
sr.reveal('#testimonial', {
  duration: 1500,
  origin: 'bottom'
});



// Smooth Scrolling from nav bar
$(function(){
  $('a[href*="#"]:not([href="#"])').click(function(){
    if(location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname){
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if(target.length){
        $('html, body').animate({
          scrollTop: target.offset().top-70
        }, 1000);
        return false;
      }
    }
  });
});



// Open header on scroll over
$(document).ready(function(){
  $('#secret-header').mouseover(function(){
    $(this).addClass("visible");
  });
  $('#secret-header').mouseout(function(){
    $(this).removeClass("visible");
  });
});



// Flip card
$('.card').flip({
  axis: 'y',
  trigger: 'click'
});
