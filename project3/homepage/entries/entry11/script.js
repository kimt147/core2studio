$(document).ready(function() {
    function disperseImages() {
      var numberOfImages = 15;
  
      var imageUrls = [
        'imgs/sad.png',
        'imgs/happy.png',
        'imgs/angry.png',
        'imgs/soso.png',
      ];
  
      for (var i = 0; i < numberOfImages; i++) {
        // Choose a random image URL from the array
        var randomImageUrl = imageUrls[Math.floor(Math.random() * imageUrls.length)];
  
        // Create an image element
        var img = $('<img class="dispersed-image" src="' + randomImageUrl + '" alt="dispersed-image">');
  
        // Set initial position (center of the button)
        var initialPosition = $('#dispersionButton').position();
        img.css({
          top: initialPosition.top + 'px',
          left: initialPosition.left + 'px'
        });
  
        $('#dispersedContainer').append(img);
  
        var targetPosition = {
          top: Math.random() * $(window).height(),
          left: Math.random() * $(window).width()
        };
  
        img.animate(targetPosition, 1000, function() {
          // Animation complete
        });
      }
    }
  
    $('#dispersionButton').click(function() {
      disperseImages();
    });
  });
  