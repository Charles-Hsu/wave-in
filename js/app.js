var main = function() {
  $('.nav li').click(function() {
    $('.nav li').removeClass('active'); // inactive all li  
    $(this).toggleClass('active');
  });

  $(document).keypress(function(event) {
    console.log(event.which);
    if (event.which === 'n') { // doesn't work
      console.log('press n');
    };
    if (event.which === 110) { // Yes, 'n' is pressed
      console.log('n is pressed');
    }
  });

};

$(document).ready(main);