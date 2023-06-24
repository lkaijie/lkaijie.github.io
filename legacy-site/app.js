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

const startimg = document.querySelector('#animated-image1');
startimg.addEventListener('animationend', function() {
  startimg.style.display = 'none';

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

// umbralla rain
const umbrella = document.querySelector('.umbrella');
const rain = document.querySelector('.rain');

// Set the radius in pixels
const radius = 30;
// var frequency = 100;

// setInterval(() => {
//   const drop = document.createElement('div');
//   drop.classList.add('drop');

//   // Set the random x and y positions
//   const xPos = Math.random() * (radius * 2) - radius;
//   const yPos = -30;

//   // Set the drop's position relative to the umbrella
//   drop.style.top = umbrella.offsetTop + yPos + 'px';
//   drop.style.left = umbrella.offsetLeft + xPos + 'px';

//   // Append the raindrop to the rain container
//   rain.appendChild(drop);

//   // Remove the raindrop after 3 seconds
//   setTimeout(() => {
//     drop.remove();
//   }, 300);
// }, frequency);

// const element = document.querySelector('.umbrella');
// // const radius = 50;

// document.addEventListener('mousemove', function(event) {
//   const cursorX = event.clientX;
//   const cursorY = event.clientY;
//   const elementRect = element.getBoundingClientRect();
//   const elementX = elementRect.x + elementRect.width / 2;
//   const elementY = elementRect.y + elementRect.height / 2;
//   const distance = Math.sqrt(Math.pow(elementX - cursorX, 2) + Math.pow(elementY - cursorY, 2));

//   if (distance < radius) {
//     // element.classList.add('beam');
//     console.log('HERERERER');
//     frequency = 30;
//   } else {
//     // element.classList.remove('beam');
//     frequency = 100;
//   }
// });
class Rain {
  constructor(umbrellaSelector, rainSelector) {
    this.umbrella = document.querySelector(umbrellaSelector);
    this.rain = document.querySelector(rainSelector);
    this.radius = 30;
    this.intervalId = null;
    this.frequency = 100;
  }

  startRain() {
    if (this.intervalId) {
      return;
    }

    this.intervalId = setInterval(() => {
      const drop = document.createElement('div');
      drop.classList.add('drop');

      // Set the random x and y positions
      const xPos = Math.random() * (this.radius * 2) - this.radius;
      const yPos = -30;

      // Set the drop's position relative to the umbrella
      drop.style.top = this.umbrella.offsetTop + yPos + 'px';
      drop.style.left = this.umbrella.offsetLeft + xPos + 'px';

      // Append the raindrop to the rain container
      this.rain.appendChild(drop);

      // Remove the raindrop after 3 seconds
      setTimeout(() => {
        drop.remove();
      }, 300);
      // console.log('rain');
    }, this.frequency);
  }

  stopRain() {
    if (!this.intervalId) {
      return;
    }

    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  updateFrequency(newFrequency) {
    this.frequency = newFrequency;
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.startRain();
    }
  }
  updateFrequency(newFrequency) {
    this.frequency = newFrequency;
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = setInterval(() => {
        const drop = document.createElement('div');
        drop.classList.add('drop');
  
        // Set the random x and y positions
        const xPos = Math.random() * (this.radius * 2) - this.radius;
        const yPos = -30;
  
        // Set the drop's position relative to the umbrella
        drop.style.top = this.umbrella.offsetTop + yPos + 'px';
        drop.style.left = this.umbrella.offsetLeft + xPos + 'px';
  
        // Append the raindrop to the rain container
        this.rain.appendChild(drop);
  
        // Remove the raindrop after 3 seconds
        setTimeout(() => {
          drop.remove();
        }, 300);
        // console.log('rain');
      }, this.frequency);
    }
  }


}



const myRain = new Rain('.umbrella', '.rain');
myRain.startRain();

const element = document.getElementById('umbrella-emoji');
// let frequency = 100;




var heavyRain = false;
const rainRadius = 50;
// document.addEventListener('mousemove', function(event) {
//   const cursorX = event.clientX;
//   const cursorY = event.clientY;
//   const elementRect = element.getBoundingClientRect();
//   const elementX = elementRect.x + elementRect.width / 2;
//   const elementY = elementRect.y + elementRect.height / 2;
//   const distance = Math.sqrt(Math.pow(elementX - cursorX, 2) + Math.pow(elementY - cursorY, 2));
//   const maxDistance = radius; // maximum distance at which rain is at its heaviest
//   const minDistance = 10; // minimum distance at which rain is active
//   const intensityFactor = 1 - Math.min(distance / maxDistance, 1); // calculate intensity factor

//   if (distance < rainRadius && distance >= minDistance) {
//     myRain.updateFrequency(30 + intensityFactor * 70); // set frequency based on intensity factor
//     heavyRain = true;
//   } else {
//     if (heavyRain) {
//       heavyRain = false;
//       myRain.updateFrequency(100);
//     }
//   }
// });
document.addEventListener('mousemove', function(event) {
  const cursorX = event.clientX;
  const cursorY = event.clientY;
  const elementRect = element.getBoundingClientRect();
  const elementX = elementRect.x + elementRect.width / 2;
  const elementY = elementRect.y + elementRect.height / 2;
  const distance = Math.sqrt(Math.pow(elementX - cursorX, 2) + Math.pow(elementY - cursorY, 2));


  if (distance < rainRadius) {
    if (!heavyRain) {
      myRain.updateFrequency(30);
      heavyRain = true;
    }
  } else {
    if (heavyRain) {
      heavyRain = false;
      myRain.updateFrequency(100);
    }
  }
});
