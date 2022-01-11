import html from "html-literal";
export default () => html`
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
        password="Keep private"
        name="Password"
        id="Password"
        placeholder="Enter Password"
        required
      />
    </div>
    <input type="password" name="customer" id="customer" value="<Your Name>" />
    <input type="submit" name="submit" value="Send in" />
  </form>
`;
