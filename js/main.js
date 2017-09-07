
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


// Video Player Mouse Over
$('#play').mouseover(function(){
  $('#video-player').addClass('fade');
});
$('#play').mouseout(function(){
  $('#video-player').removeClass('fade');
});

// video-player Play/Pause
$('#play').click(function(){
  if($('#video-player').get(0).paused){
    $('#video-player').get(0).play()
    $('#video-player').removeClass('fade');
    $('#togglePlay').removeClass('fa fa-play-circle');
    $('#togglePlay').addClass('fa fa-pause-circle');
    $('#play').css('opacity', '0');
  } else {
    $('#video-player').get(0).pause()
    $('#video-player').addClass('fade');
    $('#togglePlay').removeClass('fa fa-pause-circle');
    $('#togglePlay').addClass('fa fa-play-circle');
    $('#play').css('opacity', '0.7');
  }
});

// Finished Playing
$('#video-player').on('ended', function(){
  $('#togglePlay').removeClass("fa fa-pause-circle");
  $('#togglePlay').addClass("fa fa-play-circle");
  $('#play').css('opacity', '0.7');
});

// Video Progress Bar
$('#video-player').on('timeupdate', function(){
  console.log($('#video-player').get(0).currentTime);
});


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
