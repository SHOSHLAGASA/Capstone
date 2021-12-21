import html from "html-literal";
import Sweater from "../../Images/baby-sweater.jpg";
export default () => html`
  <h2>Baby Collection</h2>
  <p>Sweaters</p>
  <div class="cards">
    <div class="card">
      <img src=${Sweater} alt="Sweaters" style="width:100%" />
      <h1>Baby Sweater</h1>
      <p class="price">$19.99</p>
      <p>Some text about the sweater..</p>
      <p><button>Add to Cart</button></p>
    </div>
    <div class="card">
      <img src=${Sweater} alt="Rompers" style="width:100%" />
      <h1>Baby Sweater</h1>
      <p class="price">$19.99</p>
      <p>Some text about the sweater..</p>
      <p><button>Add to Cart</button></p>
    </div>
    <div class="card">
      <img src=${Sweater} alt="Rompers" style="width:100%" />
      <h1>Baby Sweater</h1>
      <p class="price">$19.99</p>
      <p>Some text about the sweater..</p>
      <p><button>Add to Cart</button></p>
    </div>
  </div>
  <span></span>
  <div class="cards">
    <div class="card">
      <img src=${Sweater} alt="Sweaters" style="width:100%" />
      <h1>Baby Sweater</h1>
      <p class="price">$19.99</p>
      <p>Some text about the sweater..</p>
      <p><button>Add to Cart</button></p>
    </div>

    <div class="card">
      <img src=${Sweater} alt="Rompers" style="width:100%" />
      <h1>Baby Sweater</h1>
      <p class="price">$19.99</p>
      <p>Some text about the sweater..</p>
      <p><button>Add to Cart</button></p>
    </div>
    <div class="card">
      <img src=${Sweater} alt="Rompers" style="width:100%" />
      <h1>Baby Sweater</h1>
      <p class="price">$19.99</p>
      <p>Some text about the sweater..</p>
      <p><button>Add to Cart</button></p>
    </div>
  </div>
`;
