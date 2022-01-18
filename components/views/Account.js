import html from "html-literal";
export default () => html`
  <h2>My Account</h2>

  <form id="Account" method="" action="">
    <fieldset>
      <label for="First name">First name:</label>
      <input
        type="text"
        name="First name"
        id="First name "
        placeholder="Enter First Name"
        required
      />
      <label for="Last name">Last name:</label>
      <input
        type="text"
        name="Last name"
        id="Last name"
        placeholder="Enter Last name"
        required
      />
      <label for="Email">Email:</label>
      <input
        type="text"
        name="Email"
        id="Email"
        placeholder="Enter Email"
        required
      />
      <label for="Password">Password:</label>
      <input type="password" name="customer" id="password" value="<password>" />
      <input type="submit" name="submit" value="Send in" />
    </fieldset>
  </form>
`;
