import html from "html-literal";
import sweater from "../../Images/sweater.jpg";

export default () => html`
   <h2>Girl Collection</h2>
  <section id="sweater">
  <div class="card">
    <img src="${sweater}" alt="sweater" style="width:100%" />
    <p><button>Sweater</button></p>
  </section>
  </div>
`;
