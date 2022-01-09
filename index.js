import { Nav, Main, Footer } from "./components";
import * as state from "./store";
import axios from "axios";

import Navigo from "navigo";
import { capitalize } from "lodash";

import dotenv from "dotenv";
dotenv.config();

const router = new Navigo(window.location.origin);

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

  //creating a logical operator and stating when the page is on Home do this
  // select the slide to the image on home
  // eslint-disable-next-line no-inner-declarations
  var slideIndex = 0;

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

  if (st.view === "Home") {
    showSlides();
  }
}

// creping weather API

router.hooks({
  before: (done, params) => {
    const page =
      params && params.hasOwnProperty("page")
        ? capitalize(params.page)
        : "Home";

    if (page === "Home") {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?appid=${process.env.OPEN_WEATHER_MAP_API_KEY}&q=st.%20louis`
        )
        .then(response => {
          state.Home.weather = {};
          state.Home.weather.city = response.data.name;
          state.Home.weather.temp = response.data.main.temp;
          state.Home.weather.feelsLike = response.data.main.feels_like;
          state.Home.weather.description = response.data.weather[0].main;
          done();
        })
        .catch(err => console.log(err));
      //   axios
      //     .get(`http://localhost:4040/boy/sweaters`)
      //     .then(res => {
      //       state.Boy.Sweaters = {};
      //       state.Boy.Sweaters.color = res.data.color;
      //       state.Boy.Sweaters.price = res.data.price;
      //       done();
      //     })
      //     .catch(err => console.log("error getting sweaters", err));

      //   axios.get(`http://localhost:4040/boy/pants`).then(res => {
      //     state.Boy.Pants = {};
      //     state.Boy.Pants.price = res.data.price;
      //     state.Boy.Pants.color = res.data.color;
      //   });
    }
    if (page === "Girl") {
      axios
        .get("http://localhost:4040/")
        .then(response => {
          state.console.log(response);
          state.Girl.sweater = response.data;
          console.log(response.data);
          done();
        })
        .catch(error => {
          console.log("It puked", error);
        });
    }
  }
});
router
  .on({
    "/": () => render(state.Home),
    ":view": params => render(state[capitalize(params.view)])
  })
  .resolve();
