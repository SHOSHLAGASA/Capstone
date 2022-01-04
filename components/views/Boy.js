import html from "html-literal";
import sweater from "../../Images/sweater.jpg";
import pants from "../../Images/pants.jpg";
import TShirt from "../../Images/TShirt.jpg";
// const options = ["green", "blue", "red"];
export default st => html`
  <h2>Boy Collection</h2>
  <!-- <section id="sweater">
    <div class="card">
      <img src="${sweater}" alt="sweater" style="width:100%" />
      <p><button>Sweater</button></p>
      <p>Price:$${st.Sweaters.price}</p>
      <label>Color:</label>
      <select>
        <option value="${st.Sweaters.color}">${st.Sweaters.color}</option>
      </select>
    </div> -->

    <!-- <div class="card">
      <img src="${pants}" alt="sweater" style="width:100%" />
      <p><button>Pants</button></p>
      <p>Price:$${st.Pants.price}</p>
      <label>Color:</label>
      <select>
        ${options.map(color => `<option value="${color}">${color}</option>`)}
      </select>
    </div> -->

    <div class="card">
      <img src="${TShirt}" alt="sweater" style="width:100%" />
      <p><button>TShirt</button></p>
    </div>
  </section>
`;
