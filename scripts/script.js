window.addEventListener('scroll', function() {
    var fadeInElements = document.getElementsByClassName('fadeInElement');

    for (var i = 0; i < fadeInElements.length; i++) {
      var element = fadeInElements[i];
      var positionFromTop = fadeInElements[i].getBoundingClientRect().top;
      if (positionFromTop - window.innerHeight <= -500) {
        element.classList.remove('fadeInElement');
        element.classList.add('fadeInElementVisible');
      } else {
        element.style.opacity = 1;
      }
    }
  });
  
