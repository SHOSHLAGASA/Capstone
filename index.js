import { Header, Nav, Main, Footer } from "./components";
import * as state from "./store";
import axios from "axios";
import Navigo from "navigo";
import { capitalize } from "lodash";

const router = new Navigo(window.location.origin);

router
  .on({
    "/": () => render(state.Home),
    ":page": params => render(state[capitalize(params.page)])
  })
  .resolve();

function render(st) {
  document.getElementById("root").innerHTML = `
      ${Nav(state.Links)}
      ${Main(st)}
      ${Footer()}
    `;
  router.updatePageLinks();
  addEventListener(st);
}

function addEventListener(st) {
  //select the hamburger class on the DOM
  const hamburger = document.querySelector(".hamburger");
  //Select the navMenu on the DOM(page)
  const navMenu = document.querySelector(".nav-menu");
  //Listen for a click on the hamburger icon and execute the function
  hamburger.addEventListener("click", mobileMenu);

  function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  }
}

// select the slide on the home DOM
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 4000); // Change image every 4 seconds
}
// router
// router.hooks({
//   before: (done, params) => {
//     const page =
//       params && params.hasOwnProperty("page")
//         ? capitalize(params.page)
//         : "Home";
//     if (page === "Home") {
//       axios
//         .get(response => {
//           state.Home.weather = {};
//           state.Home.weather.city = response.data.name;
//           state.Home.weather.temp = response.data.main.temp;
//           state.Home.weather.feelsLike = response.data.main.feels_like;
//           state.Home.weather.description = response.data.weather[0].main;
//           done();
// //         })
//         .catch(err => console.log(err));
//     }
//   }
// });
