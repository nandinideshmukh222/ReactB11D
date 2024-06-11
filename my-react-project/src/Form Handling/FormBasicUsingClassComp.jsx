import React from "react";

class FormBasicUsingClassComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Uname: "",
      Email: "",
      Password: "",
    };
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    console.log({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    console.log("Inside submit button");
    alert(
      `Username:${this.state.Uname}  Email:${this.state.Email}  Password:${this.state.Password}`
    );
    e.preventDefault();
  };

  render() {
    return (
      <div class="Form">
                <h1>Form Handling</h1>
  
        <form
          onSubmit={(e) => {
            this.handleSubmit(e);
          }}
        >
          <div>
            <div>
                 UserName :   <input
                type="text"
                name="Uname"
                value={this.state.Uname}
                onChange={(e) => {
                  this.setState({ [e.target.name]: e.target.value });
                }}
              />
            </div>
            <br />
            <div>
                 Email      :       <input
                type="text"
                name="Email"
                value={this.state.Email}
                onChange={(e) => {
                  this.setState({ [e.target.name]: e.target.value });
                }}
              />
            </div>
            <br />
            <div>
             Password : <input
                type="password"
                name="Password"
                value={this.state.Password}
                onChange={(e) => {
                  this.setState({ [e.target.name]: e.target.value });
                }}
              />

            </div>
            <br />

        
            <button id="SubBut" type='submit' >Submit</button>

          </div>
        </form>
      </div>
    );
  }
}
export default FormBasicUsingClassComp;
