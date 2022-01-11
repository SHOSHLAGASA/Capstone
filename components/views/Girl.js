import html from "html-literal";
import sweater from "../../Images/sweater.jpg";
import dresses from "../../Images/dresses.jpeg";
import pants from "../../Images/pants.jpg";
import TShirt from "../../Images/TShirt.jpg";

export default st => html`
  <form id="sweaters" method="POST" action="">
    <h2>Girl Collection</h2>
      <div class="card">
        <img src="${sweater}" alt="sweater" style="width:100%" />
        <p>Sweater</p>
        <p>price: ${st.sweater[0].price}</p>
        <div>
          <label for="size">Size:</label>
      <select id="size" name="size">
      <option value="">Select a Size</option>
          <option>${st.sweater[2].size}</option>
          <option>${st.sweater[1].size}</option>
          <option>${st.sweater[0].size}</option>
          <option>${st.sweater[3].size}</option>
        </select>
        </div>
        <div>
          <label for="color">color:</label>
      <select id="color" name="color">
      <option value="">Select a Color</option>
          <option>${st.sweater[0].color}</option>
          <option>${st.sweater[5].color}</option>
          <option>${st.sweater[9].color}</option>
        </select>
      </div>

      <!-- <div class="card">
        <img src="${dresses}" alt="sweater" style="width:100%" />
        <p><button>Dresses</button></p>
      </div>

      <div class="card">
        <img src="${pants}" alt="sweater" style="width:100%" />
        <p><button>Pants</button></p>
      </div>

      <div class="card">
        <img src="${TShirt}" alt="sweater" style="width:100%" />
        <p><button>TShirt</button></p>
      </div> -->
      <input type="hidden" name="customer" id="customer" value="<Your Name>" />
    <input type="submit" name="submit" value="Add" />
  </form>
`;
