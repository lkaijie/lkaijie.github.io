// nav bar appear on scroll up
let prevScrollpos = window.pageYOffset;
  window.addEventListener('scroll', function() {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      // Show the navigation bar
      document.getElementById('nav-main').style.top = '0';
    } else {
      // Hide the navigation bar
      document.getElementById('nav-main').style.top = '-50px';
    }
    prevScrollpos = currentScrollPos;
  });




// one time aniomation
window.addEventListener('load', function() {
  var element = document.getElementById('animated-image');
  if (!element.classList.contains('fade-in')) {
    element.classList.add('fade-in');
  }
});





  
// darkmode
  // Function to toggle dark mode on and off
  function toggleDarkMode() {
    if (document.body.classList.contains("light-mode")) {
      disableDarkMode();
    } else {
      enableDarkMode();
    }
}

  // Function to enable dark mode
function enableDarkMode() {
    document.body.classList.add("light-mode");
    localStorage.setItem("darkMode", "enabled");
}

  // Function to disable dark mode
function disableDarkMode() {
    document.body.classList.remove("light-mode");
    localStorage.setItem("darkMode", "disabled");
}

// animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});



const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((e1) => observer.observe(e1));


// show navbar on scroll up
// let prevScrollpos = window.pageYOffset;
// window.addEventListener('scroll', function() {
//   let currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     // Show the navigation bar
//     document.getElementById('nav-main').style.top = '0';
//   } else {
//     // Hide the navigation-main
//     document.getElementById('nav-main').style.top = '-50px';
//   }
//   prevScrollpos = currentScrollPos;
// });
