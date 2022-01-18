import html from "html-literal";

export default st => html`
  <table id="item">
    <tr>
      <th>type</th>
      <th>price</th>
      <th>size</th>
      <th>color</th>
    </tr>
    ${st.items
      .map(item => {
        return `<tr><td>${item.type}</td><td>${item.price}</td><td>${item.size}</td><td>${item.color}</td></tr>`;
      })
      .join("")}
  </table>

  <button class="button">Checkout</button>
`;
