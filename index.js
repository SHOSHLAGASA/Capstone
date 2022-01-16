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

  // select the Girl Sweaters form on the DOM
  if (st.view === "Girl") {
    console.log("GirlView");
    document
      .querySelector("#GirlSweaters")
      .addEventListener("submit", event => {
        event.preventDefault();

        const inputList = event.target.elements;
        console.log("Input Element List", inputList);

        const requestData = {
          type: inputList.type.value,
          price: inputList.price.value,
          size: inputList.size.value,
          color: inputList.color.value
        };
        console.log("request Body", requestData);
        state.Cart.items.push(requestData);
        console.log("items", state.Cart.items);
        router.navigate("/Cart");
      });
  }

  // select the Girl Pants form on the DOM
  if (st.view === "Girl") {
    console.log("GirlView");
    document.querySelector("#GirlPants").addEventListener("submit", event => {
      event.preventDefault();

      const inputList = event.target.elements;
      console.log("Input Element List", inputList);

      const requestData = {
        type: inputList.type.value,
        price: inputList.price.value,
        size: inputList.size.value,
        color: inputList.color.value
      };
      console.log("request Body", requestData);
      state.Cart.items.push(requestData);
      console.log("items", state.Cart.items);
      router.navigate("/Cart");
    });
  }

  // select the Girl TShirt form on the DOM
  if (st.view === "Girl") {
    console.log("GirlView");
    document.querySelector("#GirlTshirts").addEventListener("submit", event => {
      event.preventDefault();

      const inputList = event.target.elements;
      console.log("Input Element List", inputList);

      const requestData = {
        type: inputList.type.value,
        price: inputList.price.value,
        size: inputList.size.value,
        color: inputList.color.value
      };
      console.log("request Body", requestData);
      state.Cart.items.push(requestData);
      console.log("items", state.Cart.items);
      router.navigate("/Cart");
    });
  }

  // select the BOY Sweaters form on the DOM
  if (st.view === "Boy") {
    console.log("BoyView");
    document.querySelector("#BoySweaters").addEventListener("submit", event => {
      event.preventDefault();

      const inputList = event.target.elements;
      console.log("Input Element List", inputList);

      const requestData = {
        type: inputList.type.value,
        price: inputList.price.value,
        size: inputList.size.value,
        color: inputList.color.value
      };
      console.log("request Body", requestData);
      state.Cart.items.push(requestData);
      console.log("items", state.Cart.items);
      router.navigate("/Cart");
    });
  }

  // select the BOY Pants form on the DOM
  if (st.view === "Boy") {
    console.log("BoyView");
    document.querySelector("#BoyPants").addEventListener("submit", event => {
      event.preventDefault();

      const inputList = event.target.elements;
      console.log("Input Element List", inputList);

      const requestData = {
        type: inputList.type.value,
        price: inputList.price.value,
        size: inputList.size.value,
        color: inputList.color.value
      };
      console.log("request Body", requestData);
      state.Cart.items.push(requestData);
      console.log("items", state.Cart.items);
      router.navigate("/Cart");
    });
  }

  // select the  TShirts BOY form on the DOM
  if (st.view === "Boy") {
    console.log("BoyView");
    document.querySelector("#BoyTshirts").addEventListener("submit", event => {
      event.preventDefault();

      const inputList = event.target.elements;
      console.log("Input Element List", inputList);

      const requestData = {
        type: inputList.type.value,
        price: inputList.price.value,
        size: inputList.size.value,
        color: inputList.color.value
      };
      console.log("request Body", requestData);
      state.Cart.items.push(requestData);
      console.log("items", state.Cart.items);
      router.navigate("/Cart");
    });
  }

  // select the Baby ROMPER form on the DOM
  if (st.view === "Baby") {
    console.log("BabyView");
    document.querySelector("#BabyRomper").addEventListener("submit", event => {
      event.preventDefault();

      const inputList = event.target.elements;
      console.log("Input Element List", inputList);

      const requestData = {
        type: inputList.type.value,
        price: inputList.price.value,
        size: inputList.size.value,
        color: inputList.color.value
      };
      console.log("request Body", requestData);
      state.Cart.items.push(requestData);
      console.log("items", state.Cart.items);
      router.navigate("/Cart");
    });
  }
  // select the Baby Sweaters form on the DOM
  if (st.view === "Baby") {
    console.log("BabyView");
    document
      .querySelector("#BabySweaters")
      .addEventListener("submit", event => {
        event.preventDefault();

        const inputList = event.target.elements;
        console.log("Input Element List", inputList);

        const requestData = {
          type: inputList.type.value,
          price: inputList.price.value,
          size: inputList.size.value,
          color: inputList.color.value
        };
        console.log("request Body", requestData);
        state.Cart.items.push(requestData);
        console.log("items", state.Cart.items);
        router.navigate("/Cart");
      });
  }

  // select the Baby Pants form on the DOM
  if (st.view === "Baby") {
    console.log("BabyView");
    document.querySelector("#BabyPants").addEventListener("submit", event => {
      event.preventDefault();

      const inputList = event.target.elements;
      console.log("Input Element List", inputList);

      const requestData = {
        type: inputList.type.value,
        price: inputList.price.value,
        size: inputList.size.value,
        color: inputList.color.value
      };
      console.log("request Body", requestData);
      state.Cart.items.push(requestData);
      console.log("items", state.Cart.items);
      router.navigate("/Cart");
    });
  }

  // select the Baby TShirt form on the DOM
  if (st.view === "Baby") {
    console.log("BabyView");
    document.querySelector("#BabyTshirts").addEventListener("submit", event => {
      event.preventDefault();

      const inputList = event.target.elements;
      console.log("Input Element List", inputList);

      const requestData = {
        type: inputList.type.value,
        price: inputList.price.value,
        size: inputList.size.value,
        color: inputList.color.value
      };
      console.log("request Body", requestData);
      state.Cart.items.push(requestData);
      console.log("items", state.Cart.items);
      router.navigate("/Cart");
    });
  }
  //creating a logical operator and stating when the page is on Home do this
  // select the slide to the image on home
  // eslint-disable-next-line no-inner-declarations
  if (st.view === "Home") {
    var slideIndex = 0;
  }

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
  showSlides();
}

router.hooks({
  before: (done, params) => {
    const page =
      params && params.hasOwnProperty("view")
        ? capitalize(params.view)
        : "Home";

    // open weather API
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
    }
    console.log(page);

    // date request to the sweaters from the baking
    if (page === "Girl") {
      axios
        .get(`${process.env.SHANA_PLACE_API_URL}`)
        .then(response => {
          state.Girl.sweater = {};
          console.log(state.Girl.sweater);
          state.Girl.sweater = response.data;
          console.log(response.data);
          done();
        })
        .catch(error => {
          console.log("It puked", error);
        });
    }

    // date request to the pants from the baking
    if (page === "Girl") {
      axios
        .get(`${process.env.SHANA_PLACE_API_URL}`)
        .then(response => {
          state.Girl.pants = {};
          console.log(state.Girl.pants);
          state.Girl.pants = response.data;
          console.log(response.data);
          done();
        })
        .catch(error => {
          console.log("It puked", error);
        });
    }

    // date request to the TShirt from the baking
    if (page === "Girl") {
      axios
        .get(`${process.env.SHANA_PLACE_API_URL}`)
        .then(response => {
          state.Girl.tshirt = {};
          console.log(state.Girl.tshirt);
          state.Girl.tshirt = response.data;
          console.log(response.data);
          done();
        })
        .catch(error => {
          console.log("It puked", error);
        });
    }

    // date request to the sweaters from the baking
    if (page === "Boy") {
      axios
        .get(`${process.env.SHANA_PLACE_API_URL}`)
        .then(response => {
          state.Boy.sweater = {};
          console.log(state.Boy.sweater);
          state.Boy.sweater = response.data;
          console.log(response.data);
          done();
        })
        .catch(error => {
          console.log("It puked", error);
        });
    }

    // date request to the pants from the baking
    if (page === "Boy") {
      axios
        .get(`${process.env.SHANA_PLACE_API_URL}`)
        .then(response => {
          state.Boy.pants = {};
          console.log(state.Boy.pants);
          state.Boy.pants = response.data;
          console.log(response.data);
          done();
        })
        .catch(error => {
          console.log("It puked", error);
        });
    }

    // date request to the TShirt from the baking
    if (page === "Boy") {
      axios
        .get(`${process.env.SHANA_PLACE_API_URL}`)
        .then(response => {
          state.Boy.tshirt = {};
          console.log(state.Boy.tshirt);
          state.Boy.tshirt = response.data;
          console.log(response.data);
          done();
        })
        .catch(error => {
          console.log("It puked", error);
        });
    }

    // date request to the Romper from the baking
    if (page === "Baby") {
      axios
        .get(`${process.env.SHANA_PLACE_API_URL}`)
        .then(response => {
          state.Baby.Romper = {};
          console.log(state.Baby.Romper);
          state.Baby.Romper = response.data;
          console.log(response.data);
          done();
        })
        .catch(error => {
          console.log("It puked", error);
        });
    }

    // date request to the sweaters from the baking
    if (page === "Baby") {
      axios
        .get(`${process.env.SHANA_PLACE_API_URL}`)
        .then(response => {
          state.Baby.sweater = {};
          console.log(state.Baby.sweater);
          state.Baby.sweater = response.data;
          console.log(response.data);
          done();
        })
        .catch(error => {
          console.log("It puked", error);
        });
    }
    // date request to the pants from the baking
    if (page === "Baby") {
      axios
        .get(`${process.env.SHANA_PLACE_API_URL}`)
        .then(response => {
          state.Baby.pants = {};
          console.log(state.Baby.pants);
          state.Baby.pants = response.data;
          console.log(response.data);
          done();
        })
        .catch(error => {
          console.log("It puked", error);
        });
    }

    // date request to the TShirt from the baking
    if (page === "Baby") {
      axios
        .get(`${process.env.SHANA_PLACE_API_URL}`)
        .then(response => {
          state.Baby.tshirt = {};
          console.log(state.Baby.tshirt);
          state.Baby.tshirt = response.data;
          console.log(response.data);
          done();
        })
        .catch(error => {
          console.log("It puked", error);
        });
    }
    done();
  }
});

router
  .on({
    "/": () => render(state.Home),
    ":view": params => render(state[capitalize(params.view)])
  })
  .resolve();
