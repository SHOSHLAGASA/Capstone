import html from "html-literal";
import sweater from "../../Images/sweater.jpg";
import dresses from "../../Images/dresses.jpeg";
import pants from "../../Images/pants.jpg";
import TShirt from "../../Images/TShirt.jpg";

export default st => html`
  ${st}
  <h2>Girl Collection</h2>
  <section id="sweater">
    <div class="card">
      <img src="${sweater}" alt="sweater" style="width:100%" />
      <p><button>Sweater</button></p>
    </div>

    <div class="card">
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
    </div>
  </section>
`;
