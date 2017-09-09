
// Loads particles from particles.json
particlesJS.load('particles-js', 'particles.json', function(){
  console.log('Loading Particles...');
});



// Change title via typed js
var typed = new Typed('#interests', {
  strings: [" ", "Software Developer^1000", "Geolog^100ist^200", "K^200ayaker", "Software Dev^100eloper^1000.^900"],
  typeSpeed: 90,
  backSpeed: 40,
  backDelay: 500,
  onComplete: (self) => {
    $('.typed-cursor').css('opacity', '0');
  }
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
    $('#video-title').css('opacity', '0')
  } else {
    $('#video-player').get(0).pause()
    $('#video-player').addClass('fade');
    $('#togglePlay').removeClass('fa fa-pause-circle');
    $('#togglePlay').addClass('fa fa-play-circle');
    $('#play').css('opacity', '0.7');
    $('#video-title').css('opacity', '1')
  }
});

$('#play').mouseover(function(){
  $('#video-title').css('color', '#e37222');
});
$('#play').mouseout(function(){
  $('#video-title').css('color', '#323232');
});

// Finished Playing
$('#video-player').on('ended', function(){
  $('#togglePlay').removeClass("fa fa-pause-circle");
  $('#togglePlay').addClass("fa fa-play-circle");
  $('#play').css('opacity', '0.7');
  $('#video-title').css('opacity', '1');
  $('.progress-bar').css('width', '0');
});

// Video Progress Bar
$('#video-player').on('timeupdate', function(){
  var percentComplete = $('#video-player').get(0).currentTime / $('#video-player').get(0).duration * 82;
  $('.progress-bar').css('width', percentComplete+'%');
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
