// toggle icon navbar

window.addEventListener("DOMContentLoaded", () => {
  const paragraph = document.getElementById("mainC");

  if (window.matchMedia("(max-width: 480px)").matches) {
    paragraph.innerHTML =
      "I am a B.E. Information Technology student at St. Francis Institute of Technology, affiliated with Mumbai University. <br> As the Tech Head @CSI_SFIT, I lead technical initiatives and organize events. <br>  I actively engage in staying updated with the latest advancements in the field, collaborating with peers, and participating in hackathons and coding competitions to drive innovation.";
  }
});

let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// scroll sections active links

// let navLinks = document.querySelectorAll("nav a");

// window.onscroll = () => {
//   sections.forEach((sec) => {
//     let top = window.scrollY;
//     let offset = sec.offsetTop - 150;
//     let height = sec.offsetHeight;
//     let id = sec.getAttribute("id");

//     if (top >= offset && top < offset + height) {
//       navLinks.forEach((links) => {
//         links.classList.remove("active");
//         document
//           .querySelector("nav a[href*='" + id + "']")
//           .classList.add("active");
//       });
//     }
//   });

//   //   sticky navbar
//   let header = document.querySelector(".header1");
//   header.classList.toggle("sticky", window.scrollY > 100);

//   // removing toggle icon and navbar once clicked on navbar link
//   menuIcon.classList.remove("bx-x");
//   navbar.classList.remove("active");
// };
let sections = document.querySelectorAll("section");

let navLinksm = document.querySelectorAll(".nav__item a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinksm.forEach((links) => {
        links.classList.remove("active-link");
        document
          .querySelector(".nav__item a[href*='" + id + "']")
          .classList.add("active-link");
      });
    }
  });
};

// Scroll Reveal

ScrollReveal({
  //   reset: true,
  distance: "80px",
  duration: 1000,
  delay: 100,
});

ScrollReveal().reveal(".home-content, .heading, .about-content", {
  origin: "top",
});
ScrollReveal().reveal(
  ".home-img, .services-container, .portfolio-box, .contact form, .about-img, .sk, .lds",
  { origin: "bottom" }
);

if (window.innerWidth > 768) {
  ScrollReveal().reveal(".home-content h1, .edu,.cb", { origin: "left" });
  ScrollReveal().reveal(".home-content p, .cert, .table-style td", {
    origin: "right",
  });
} else {
  ScrollReveal().reveal(
    ".home-content h1, .edu, .home-content p, .cert, .table-style td",
    { origin: "right", distance: "10px", delay: 100 }
  );
  ScrollReveal().reveal(".cb", {
    origin: "left",
    distance: "10px",
    delay: 200,
  });
}

// typed js
const typed = new Typed(".multiple-text", {
  strings: ["Web Developer", "Programmer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

// show more

function toggleContent() {
  var content = document.getElementById("content");
  var button = document.getElementById("toggleButton");

  if (content.style.display === "none") {
    content.style.display = "block";
    button.innerHTML = "Show less";
  } else {
    content.style.display = "none";
    button.innerHTML = "Show more";
  }
}

// code to send Email

function sendEmail(event) {
  // Prevent the form from submitting
  event.preventDefault();

  // Get the form data
  const fullName = document.getElementById("fullName").value;
  const emailAddress = document.getElementById("emailAddress").value;
  const mobileNumber = document.getElementById("mobileNumber").value;
  const emailSubject = document.getElementById("emailSubject").value;
  const message = document.getElementById("message").value;

  // Initialize EmailJS with your user ID
  emailjs.init("ReUUl2MpsoYHTEbHK");

  // Create a template parameters object
  const templateParams = {
    fullName: fullName,
    emailAddress: emailAddress,
    mobileNumber: mobileNumber,
    emailSubject: emailSubject,
    message: message,
  };

  // Send the email
  emailjs.send("service_l7uaftt", "template_7l91xvr", templateParams).then(
    function (response) {
      console.log("Email sent successfully!", response.status, response.text);
      // Reset the form
      document.getElementById("contactForm").reset();
    },
    function (error) {
      console.log("Error sending email:", error);
    }
  );
}
