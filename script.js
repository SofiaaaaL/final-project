var navbarElem;

document.addEventListener('DOMContentLoaded', function(event) {

/* Get navbar */
  navbarElem = document.querySelector(".navbar");

// /* Background toggle on scroll */
//   window.onscroll = () => {
//     if (window.scrollY > window.innerHeight) {
//         navbarElem.style.backgroundColor = "#000";
//         navbarElem.style.mixBlendMode = "normal";
//     } else {
//         navbarElem.style.backgroundColor = "transparent";
//         navbarElem.style.mixBlendMode = "difference";
//     }
//   };

  /// Init RELLAX for Parallax
  var rellax = new Rellax('.rellax');

  /// Init GLIDE for carousel slideshow
  new Glide('.glide').mount()

  /// Init LOZAD for lazy loading
  const observer = lozad('.lozad', {
    loaded: function(el) {
      el.classList.add('lozad-fully-loaded');
    }
  });
  observer.observe();

});

/* It seems that the AOS library needs to run init immediately, instead of in DOMContentLoaded */

// Init AOS
AOS.init();
