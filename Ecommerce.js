const responsiveSlideBar = function() {
  var hamburger = document.getElementById('hamburger');
  var menuItems = document.getElementById('menu-items');

  var togleList = function() {

    if (menuItems.style.opacity === '0') {
      menuItems.style.opacity = '100';
      if (menuItems.style.left === '-100%') {
        menuItems.style.left = '-5%';

      }
    } else {
      menuItems.style.opacity = '0';
      menuItems.style.left = '-100%';
    }

  };

   menuItems.style.opacity = '0';
   menuItems.style.left = '-100%';
   

  if (hamburger) {
    hamburger.addEventListener('click', function () {
      togleList();
      hamburger.classList.toggle('active');
    });
  }

}

responsiveSlideBar();
