import html from "html-literal";
import sweater from "../../Images/sweater.jpg";
import dresses from "../../Images/dresses.jpeg";
import pants from "../../Images/pants.jpg";
import TShirt from "../../Images/TShirt.jpg";

export default st => html`
<h2>Girl Collection</h2>
<!-- GIRL form which contains the sweaters date -->
  <form id="GirlSweaters" method="POST" action="">
      <div class="card">
        <img src="${sweater}" alt="sweater" style="width:50%" />
        <p>Sweater</p>
        <p>price: ${st.sweater[0].price}</p>
        <div>
          <label for="size">Size:</label>
          <select id="size" name="size">
          <option value="">Select a Size</option>
          <option value="${st.sweater[2].size}">${st.sweater[2].size}</option>
          <option value="${st.sweater[1].size}">${st.sweater[1].size}</option>
          <option value="${st.sweater[0].size}">${st.sweater[0].size}</option>
          <option value="${st.sweater[3].size}">${st.sweater[3].size}</option>
        </select>
        </div>
        <div>
          <label for="color">color:</label>
      <select id="color" name="color">
      <option value="">Select a Color</option>
      <option value="${st.sweater[0].color}">${st.sweater[0].color}</option>
          <option value="${st.sweater[5].color}">${st.sweater[5].color}</option>
          <option value="${st.sweater[9].color}">${st.sweater[9].color}</option>
        </select>

        <input type="hidden" name="type" id="type" value="${st.sweater[0].type}" />
      <input type="hidden" name="price" id="price" value="${st.sweater[0].price}" />
<input type="hidden" name="customer" id="customer" value="<Your Name>" />
    <input type="submit" name="submit" value="Add" />
      </div>
      </div>
</form>

<!-- GIRL form which contains the pants date -->
<form id="GirlPants" method="POST" action="">
      <div class="card">
        <img src="${pants}" alt="pants" style="width:100%" />
        <p>Pants</p>
        <p>price: ${st.pants[17].price}</p>
        <div>
          <label for="size">Size:</label>
          <select id="size" name="size">
          <option value="">Select a Size</option>
          <option value="${st.pants[13].size}">${st.pants[13].size}</option>
          <option value="${st.pants[14].size}">${st.pants[14].size}</option>
          <option value="${st.pants[15].size}">${st.pants[15].size}</option>
          <option value="${st.pants[16].size}">${st.pants[16].size}</option>
        </select>
        </div>
        <div>
          <label for="color">color:</label>
      <select id="color" name="color">
      <option value="">Select a Color</option>
      <option value="${st.pants[13].color}">${st.pants[13].color}</option>
          <option value="${st.pants[17].color}">${st.pants[17].color}</option>
          <option value="${st.pants[21].color}">${st.pants[21].color}</option>
        </select>

        <input type="hidden" name="type" id="type" value="${st.pants[20].type}" />
      <input type="hidden" name="price" id="price" value="${st.pants[20].price}" />
<input type="hidden" name="customer" id="customer" value="<Your Name>" />
    <input type="submit" name="submit" value="Add" />
      </div>
      </div>
        </form>


        <form id="GirlTshirt" method="POST" action="">
<div class="card">
        <img src="${TShirt}" alt="sweater" style="width:100%" />
        <p>Sweater</p>
        <p>price: ${st.tshirt[25].price}</p>
        <div>
          <label for="size">Size:</label>
          <select id="size" name="size">
          <option value="">Select a Size</option>
          <option value="${st.tshirt[25].size}">${st.tshirt[25].size}</option>
          <option value="${st.tshirt[26].size}">${st.tshirt[26].size}</option>
          <option value="${st.tshirt[27].size}">${st.tshirt[27].size}</option>
          <option value="${st.tshirt[28].size}">${st.tshirt[28].size}</option>
        </select>
        </div>
        <div>
          <label for="color">color:</label>
      <select id="color" name="color">
      <option value="">Select a Color</option>
      <option value="${st.tshirt[25].color}">${st.tshirt[25].color}</option>
          <option value="${st.tshirt[29].color}">${st.tshirt[29].color}</option>
          <option value="${st.tshirt[34].color}">${st.tshirt[34].color}</option>
          <option value="${st.tshirt[41].color}">${st.tshirt[41].color}</option>
</select>
<input type="hidden" name="type" id="type" value="${st.tshirt[25].type}" />
      <input type="hidden" name="price" id="price" value="${st.tshirt[25].price}" />
<input type="hidden" name="customer" id="customer" value="<Your Name>" />
    <input type="submit" name="submit" value="Add" />
      </div>
      </div>
      </form>

        <!-- GIRL form which contains the TShirt date type, color, size, price  -->

      <!-- <div class="card">
        <img src="${dresses}" alt="sweater" style="width:100%" />
        <p><button>Dresses</button></p>
      </div>

`;
