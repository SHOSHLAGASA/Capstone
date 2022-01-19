import html from "html-literal";
import baby from "../../Images/baby.jpg";
import Sweaters from "../../Images/Sweaters.jpg";
import pants from "../../Images/pants.jpg";
import TShirt from "../../Images/TShirt.jpg";

export default st => html`
  <h2>Baby Collection</h2>

  <!-- Baby form which contains the pants date -->
  <div class="collections">
  <form id="BabyRomper" method="POST" action="">
      <div class="collection">
        <img src="${baby}" alt="Romper" style="width:87%" />
        <div class="add">
          <p>Romper</p>
          <p>price: ${st.Romper[68].price}</p>
        </div>
        <div>
          <select id="size" name="size">
            <option value="">Select a Size</option>
            <option value="${st.Romper[64].size}">${st.Romper[64].size}</option>
            <option value="${st.Romper[65].size}">${st.Romper[65].size}</option>
            <option value="${st.Romper[66].size}">${st.Romper[66].size}</option>
            <option value="${st.Romper[67].size}">${st.Romper[67].size}</option>
            <option value="${st.Romper[68].size}">${st.Romper[68].size}</option>
          </select>
        </div>
        <div class="box">
          <select id="color" name="color">
            <option value="">Select a Color</option>
            <option value="${st.Romper[64].color}"
              >${st.Romper[64].color}</option
            >
            <option value="${st.Romper[69].color}"
              >${st.Romper[69].color}</option
            >
            <option value="${st.Romper[74].color}"
              >${st.Romper[74].color}</option
            >
          </select>
          <input
            type="hidden"
            name="type"
            id="type"
            value="${st.pants[64].type}"
          />
          <input
            type="hidden"
            name="price"
            id="price"
            value="${st.pants[75].price}"
          />
          <input
            type="hidden"
            name="customer"
            id="customer"
            value="<Your Name>"
          />
          <div class="types">
            <input type="submit" name="submit" value="Add" />
          </div>
        </div>
      </div>
    </div>
  </form>
  <!-- Baby form which contains the sweaters date -->
  <form id="BabySweaters" method="POST" action="">
    <div class="collection">
      <img src="${Sweaters}" alt="sweaters" style="width:100%" />
      <div class="add">
        <p>Sweater</p>
        <p>price: ${st.sweater[0].price}</p>
      </div>
      <div>
        <select id="size" name="size">
            <option value="">Select a Size</option>
        <option value="${st.sweater[61].size}">${st.sweater[61].size}</option>
          <option value="${st.sweater[2].size}">${st.sweater[2].size}</option>
          <option value="${st.sweater[3].size}">${st.sweater[3].size}</option>
          <option value="${st.sweater[62].size}">${st.sweater[62].size}</option>
          <option value="${st.sweater[63].size}">${st.sweater[63].size}</option>
        </select>
      </div>
      <div>
        <select id="color" name="color">
          <option value="">Select a Color</option>
          <option value="${st.sweater[0].color}">${st.sweater[0].color}</option>
          <option value="${st.sweater[5].color}">${st.sweater[5].color}</option>
          <option value="${st.sweater[9].color}">${st.sweater[9].color}</option>
        </select>
      </div>
        <input
          type="hidden"
          name="type"
          id="type"
          value="${st.sweater[0].type}"
        />
        <input
          type="hidden"
          name="price"
          id="price"
          value="${st.sweater[0].price}"
        />
        <input
          type="hidden"
          name="customer"
          id="customer"
          value="<Your Name>"
        />
        <div class="types">
          <input type="submit" name="submit" value="Add" />
        </div>
      </div>

  </form>

  <!-- Baby form which contains the pants date -->
  <form id="BabyPants" method="POST" action="">
    <div class="collection">
      <img src="${pants}" alt="pants" style="width:100%" />
      <div class="add">
        <p>Pants</p>
        <p>price: ${st.pants[17].price}</p>
      </div>
      <div>
        <select id="size" name="size">
          <option value="">Select a Size</option>
          <option value="${st.pants[85].size}">${st.pants[85].size}</option>
          <option value="${st.pants[13].size}">${st.pants[13].size}</option>
          <option value="${st.pants[16].size}">${st.pants[16].size}</option>
          <option value="${st.pants[86].size}">${st.pants[86].size}</option>
          <option value="${st.pants[87].size}">${st.pants[87].size}</option>
        </select>
        <div>
          <select id="color" name="color">
            <option value="">Select a Color</option>
            <option value="${st.pants[13].color}">${st.pants[13].color}</option>
            <option value="${st.pants[17].color}">${st.pants[17].color}</option>
            <option value="${st.pants[21].color}">${st.pants[21].color}</option>
          </select>

          <input
            type="hidden"
            name="type"
            id="type"
            value="${st.pants[20].type}"
          />
          <input
            type="hidden"
            name="price"
            id="price"
            value="${st.pants[20].price}"
          />
          <input
            type="hidden"
            name="customer"
            id="customer"
            value="<Your Name>"
          />
          <div class="types">
<input type="submit" name="submit" value="Add" />
          </div>
        </div>
      </div>
    </div>
  </form>
  <form id="BabyTshirt" method="POST" action="">
    <div class="collection">
      <img src="${TShirt}" alt="TShirt" style="width:100%" />
      <div class="add">
        <p>TShirt</p>
        <p>price: ${st.tshirt[25].price}</p>
      </div>
      <div>
        <select id="size" name="size">
          <option value="">Select a Size</option>
          <option value="${st.tshirt[55].size}">${st.tshirt[55].size}</option>
          <option value="${st.tshirt[25].size}">${st.tshirt[25].size}</option>
          <option value="${st.tshirt[28].size}">${st.tshirt[28].size}</option>
          <option value="${st.tshirt[56].size}">${st.tshirt[56].size}</option>
          <option value="${st.tshirt[57].size}">${st.tshirt[57].size}</option>
        </select>
      </div>
      <div>
        <select id="color" name="color">
          <option value="">Select a Color</option>
          <option value="${st.tshirt[25].color}">${st.tshirt[25].color}</option>
          <option value="${st.tshirt[29].color}">${st.tshirt[29].color}</option>
          <option value="${st.tshirt[34].color}">${st.tshirt[34].color}</option>
          <option value="${st.tshirt[41].color}">${st.tshirt[41].color}</option>
        </select>
        <input
          type="hidden"
          name="type"
          id="type"
          value="${st.tshirt[55].type}"
        />
        <input
          type="hidden"
          name="price"
          id="price"
          value="${st.tshirt[25].price}"
        />
        <input
          type="hidden"
          name="customer"
          id="customer"
          value="<Your Name>"
        />
        <div class="types">
          <input type="submit" name="submit" value="Add" />
        </div>
        </div>
      </div>
    </div>
  </form>
`;
