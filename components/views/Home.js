import html from "html-literal";

const kelvinToFahrenheit = kelvinTemp =>
  Math.round((kelvinTemp - 273.15) * (9 / 5) + 32);

import home from "../../Images/home.jpg";
import home2 from "../../Images/home2.jpg";
import Dress from "../../Images/Dress.jpg";
import pants from "../../Images/pants.jpg";

export default st => html`
  <!-- weather on home page -->
  <h3>
    Temperature in ${st.weather.city} is
    ${kelvinToFahrenheit(st.weather.temp)}F. it feels like
    ${kelvinToFahrenheit(st.weather.feelsLike)}F.
  </h3>
  <!-- image slide on home page -->
  <div class="slideshow-container">
    <div class="mySlides fade">
      <img src="${home}" style="width:60%" />
    </div>

    <div class="mySlides fade">
      <img src="${home2}" style="width:60%" />
    </div>
  </div>
  <br />
  <div style="text-align:center">
    <span class="dot"></span>
    <span class="dot"></span>
    <span class="dot"></span>
  </div>
  <!-- adding about -->
  <div class="bottomPage">
    <div class="aboutPage">
      <h3 class="About">About</h3>
      <div class="AboutText">
        <p>shana is the perfect wab to find the</p>
        <p>look for your kids on affordable prices</p>
        <p>selection of colors and style</p>
      </div>
    </div>
  </div>
  <div class="addImg"></div>
  <img src="${pants}" alt="pants" style="width:20%" />
  <img src="${Dress}" alt="Dress" style="width:20%" />
  </div>
`;
