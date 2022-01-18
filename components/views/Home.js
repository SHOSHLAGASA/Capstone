import html from "html-literal";

const kelvinToFahrenheit = kelvinTemp =>
  Math.round((kelvinTemp - 273.15) * (9 / 5) + 32);

import home from "../../Images/home.jpg";
import home2 from "../../Images/home2.jpg";
import kid from "../../Images/kid.jpg";
import boy from "../../Images/boy.jpg";
import photo from "../../Images/photo.jpg";
import kidss from "../../Images/kidss.jpg";
import photos from "../../Images/photos.jpg";

export default st => html`
  <!-- API weather on home page -->
  <h3>
    Temperature in ${st.weather.city} is
    ${kelvinToFahrenheit(st.weather.temp)}F. it feels like
    ${kelvinToFahrenheit(st.weather.feelsLike)}F.
  </h3>

  <!-- image slide on home page  -->
  <div class="slideshow-container">
      <div class="mySlides fade">
        <img class="image" src="${home}" style="width:50%" />
      </div>
      <!-- image number 2 on home page -->
<div class="mySlides fade">
        <img class="image" src="${home2}" style="width:50%" />
      </div>
    </div>
  </div>
  <br />

  <div style="text-align:center">
    <span class="dot"></span>
    <span class="dot"></span>
  </div>
  <!-- adding about to the home page -->
  <div class="bottomPage">
    <div class="aboutPage">
      <h3 class="About">About</h3>
      <div class="AboutText">
        <p>shana is the perfect wab to find the</p>
        <p>look for your kids on affordable prices</p>
        <p>selection of colors and style</p>
      </div>
    </div>
    <!-- adding image to the home page bottom  -->
    <div class="addImg">
      <img src="${kid}" alt="pants" style="width:15%" />
      <img src="${boy}" alt="pants" style="width:15%" />
      <img src="${photo}" alt="pants" style="width:17%" />
      <img src="${kidss}" alt="pants" style="width:15%" />
      <img src="${photos}" alt="pants" style="width:18%" />
    </div>
  </div>
`;
