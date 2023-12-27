import { greeting } from "./LocalDB.js";

document.addEventListener('DOMContentLoaded', function() {
  var greetingMobileElement = document.getElementById('greeting_mobile');
  var greetingDesktopElement = document.getElementById("greeting_desktop");
  var speed = 50; // Typing speed in milliseconds

  var iconElements = document.querySelectorAll('.icon-technology');
      // Function to handle icon click
      function iconClickHandler(event) {
        var clickedIcon = event.target.closest('.icon-technology');

        $("#" + clickedIcon.id).transition('jiggle');
        $('.ui.modal').modal('show')
;

      }
      
  iconElements.forEach(function(icon, index) {
    icon.id = 'icon-' + (index + 1);
    icon.addEventListener("click", iconClickHandler)
  });


  $('.card .image').dimmer({
    on: 'hover'
  });

  function type() {
    for (var i = 0; i < greeting.length; i++) {
      (function(index) {
        setTimeout(function() {
          greetingDesktopElement.innerHTML += greeting.charAt(index);
          greetingMobileElement.innerHTML += greeting.charAt(index);
        }, index * speed);
      })(i);
    }
  }

  function jiggleIcon(iconIndex) {
    $('#icon-' + iconIndex).transition('jiggle');
    // Remove the 'jiggle' class after the animation completes
    setTimeout(function() {
    }, 300);
  }



  $(document).ready(function() {
    setInterval(function() {
      var randomIndex = Math.floor(Math.random() * iconElements.length);
      jiggleIcon(randomIndex);
    }, 2000); 
  });

  type();
});

