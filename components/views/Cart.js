import html from "html-literal";

export default st => html`
  <table id="sweaters">
    <tr>
      <th>type</th>
      <th>price</th>
      <th>size</th>
      <th>color</th>
    </tr>
    ${st.items
      .map(item => {
        return `<tr><td>${item.type}</td><td><tr><td>${item.price}</td><td>${item.size}</td><td>${item.color}</td></tr>`;
      })
      .join("")}
  </table>
`;
