import html from "html-literal";

export default st => `
  <table id="sweaters">
  <tr><th>price</th><th>size</th><th>color</th></tr>
  ${st.Cart.sweaters
    .map(sweater => {
      return `<tr><td>${sweater.price}</td><td>${sweater.size}</td><td>${sweater.color}</td></tr>`;
    })
    .join("")}
  </table>
`;
