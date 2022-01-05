import html from "html-literal";
export default () => html`
  <form id="Account" method="POST" action="">
    <h2>My Account</h2>
    <div>
    <div>
      <label for="Email">Email:</label>
      <input
        type="text"
        name="Email"
        id="Email"
        placeholder="Enter Email"
        required
      />
    </div>
    <div>
      <label for="Password">Password:</label>
      <input
        type="Keep private"
        name="Password"
        id="Password"
        placeholder="Enter Password"
        required
      />
    </div>
    <input type="hidden" name="customer" id="customer" value="<Your Name>" />
    <input type="submit" name="submit" value="Sing in" />
  </form>
`;
