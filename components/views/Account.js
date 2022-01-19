import html from "html-literal";
export default () => html`
  <form id="Account" method="" action="">
    <fieldset>
      <div class="Box">
        <div class="col-25">
          <label for="First name">First name</label>
        </div>
        <div class="col-27">
          <input
            type="text"
            name="First name"
            id="First name "
            placeholder="Enter First Name"
            required
          />
        </div>
      </div>
      <div class="Box">
        <div class="col-25">
          <label for="Last name">Last name</label>
        </div>
        <div class="col-27">
          <input
            type="text"
            name="Last name"
            id="Last name"
            placeholder="Enter Last name"
            required
          />
        </div>
      </div>
      <div class="Box">
        <div class="col-25">
          <label for="Email">Email</label>
        </div>
        <div class="col-27">
          <input
            type="text"
            name="Email"
            id="Email"
            placeholder="Enter Email"
            required
          />
        </div>
      </div>
      <div class="Box">
        <div class="col-25">
          <label for="Password">Password</label>
        </div>
        <div class="col-27">
          <input
            type="text"
            name="customer"
            id="password"
            placeholder="Enter password"
            required
          />
          <input type="submit" name="submit" value="Send in" />
        </div>
      </div>
    </fieldset>
  </form>
`;
