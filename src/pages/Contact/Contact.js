import React from "react";

class Contact extends React.Component {
  state = {

  }

  render() {
    return (
      <div class='container nav-avoid bottom-space'>
        <div class='row'>
          <div class='col-md-12'>
            <h1>Contact</h1>
            <hr />
          </div>
        </div>

        <form>
          <div class="form-group">
            <label for="name-input">Name</label>
            <input type="text" class="form-control" id="name-input" placeholder="Your name" />
          </div>

          <div class="form-group">
            <label for="email-input">Email address</label>
            <input type="email" class="form-control" id="email-input" placeholder="name@example.com" />
          </div>

          <div class="form-group">
            <label for="text-input">Email</label>
            <textarea class="form-control" id="text-input" rows="5"></textarea>
          </div>
        </form>

        <button type="button" class="btn btn-primary">Submit</button>

      </div>

    )
  }
}

export default Contact;