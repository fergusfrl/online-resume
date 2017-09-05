
// Loads particles from particles.json
particlesJS.load('particles-js', 'particles.json', function(){
  console.log('Loading...');
});


// Change title on click
var title = document.getElementById('interests');
var secretTitle = document.getElementById('secret-interests');
var index = 1;
var titles = ["Software Developer", "Geologist", "Kayaker"];
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


// Scroll animations
window.sr = ScrollReveal();
sr.reveal('#photo-container', {
  duration: 1500,
  origin: 'left'
});
sr.reveal('.info', {
  duration: 1500,
  origin: 'right',
  delay: 500
});
sr.reveal('#testimonial', {
  duration: 1500,
  origin: 'bottom'
});
sr.reveal('#video', {
  duration: 2000,
  origin: 'bottom',
  viewFactor: 0.8
});


// Smooth Scrolling from nav bar
$(function(){
  $('a[href*="#"]:not([href="#"])').click(function(){
    if(location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname){
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if(target.length){
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

// Open header when mouse in near top of screen
$(document).mousemove(function(e){
  var vertical = e.screenY;

  if($(window).scrollTop() != 0){
    if(vertical <= 140){
      $('#secret-header').slideDown("slow");
      /*$('#secret-header').animate({

      }, "slow");*/
    } else {
      $('#secret-header').slideUp("slow");
      /*$('#secret-header').animate({

      }, "slow");*/
    }
  } else {
    $('#secret-header').css('display', 'none');
  }
});
