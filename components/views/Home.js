import html from "html-literal";
import home from "../../Images/home.jpg";
import home2 from "../../Images/home2.jpg";
 const kelvinToFahrenheit = kelvinTemp =>
  Math.round((kelvinTemp - 273.15) * (9 / 5) + 32);

export default () => html`
  <h3>
    Temperature in ${st.weather.city} is
    ${kelvinToFahrenheit(st.weather.temp)}F. It feels like
    ${kelvinToFahrenheit(st.weather.feelsLike)}F.
  </h3>
  <div class="slideshow-container">
    <div class="mySlides fade">
      <img src="${home}" style="width:90%" />
      <div class="text">Caption Text</div>
    </div>

    <div class="mySlides fade">
      <img src="${home2}" style="width:90%" />
      <div class="text">Caption Two</div>
    </div>
  </div>
  <br />
  <div style="text-align:center">
    <span class="dot"></span>
    <span class="dot"></span>
    <span class="dot"></span>
  </div>
`;
