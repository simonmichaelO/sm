// Function to toggle the navigation menu
function myMenuFunction() {
  let menuBth = document.getElementById("myNavMenu");

  if (menuBth.classList.contains("responsive")) {
      menuBth.classList.remove("responsive");
  } else {
      menuBth.classList.add("responsive");
  }
}

// Close navigation menu when a link is clicked on mobile
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
      if (window.innerWidth <= 900) {
          document.getElementById("myNavMenu").classList.remove("responsive");
      }
  });
});

// Function to update active link based on scroll position
function updateActiveLink() {
  const sections = document.querySelectorAll('section');
  const scrollPosition = window.scrollY + window.innerHeight / 2;

  let currentSectionId = '';

  sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          currentSectionId = section.getAttribute('id');
      }
  });

  navLinks.forEach(link => {
      if (link.getAttribute('href').substring(1) === currentSectionId) {
          link.classList.add('active-link');
      } else {
          link.classList.remove('active-link');
      }
  });
}

// Listen for scroll events
window.addEventListener('scroll', updateActiveLink);

// Initial call to set the active link on page load
updateActiveLink();

// Dark mode toggle
const body = document.querySelector("body"),
  toggleSwitch = document.getElementById("toggle-switch");

toggleSwitch.addEventListener("click", () => {
  body.classList.toggle("dark");
});

// typing effect 

let typingEffect = new Typed(".typedText", {
    strings: ["Designer.", "Coder.", "Developer.", "Forex Trader."],

    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 2000,

})


// scroll Animation

const sr = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 2000,
    reset: true,
});

sr.reveal(".featured-name", { delay: 100});
sr.reveal(".text-info", { delay: 200});
sr.reveal(".text-btn", { delay: 200});
sr.reveal(".social-icons", { delay: 200});
sr.reveal(".featured-image", { delay: 320});


sr.reveal(".project-box", { interval: 200});

sr.reveal(".top-header", {});



const srLeft = ScrollReveal({
    origin: "left",
    distance: "80px",
    duration: 2000,
    rest: true,
})

srLeft.reveal(".about-info", {delay: 100});
srLeft.reveal(".contact-info", {delay: 100});

const srRight = ScrollReveal({
    origin: "left",
    distance: "80px",
    duration: 2000,
    rest: true,
})
srRight.reveal(".skill", {delay: 100});
srRight.reveal(".skill-box", {delay: 100});


// active links
const sections = document.querySelectorAll(".section[id]");

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}

window.addEventListener("scroll", scrollActive);


// contact form 

const scriptURL = 'https://script.google.com/macros/s/AKfycbxJOaUO4zBEbCLgD3u9E06v9FiszSUvEvrYLwqGMZwHHlLGXTqfctT24D08IhrkrH4/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
