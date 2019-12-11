import React from "react";

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      number: "",
      address: "",
      deliever: ""
    };
  }

  handleSubmit = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleChange = event => {
    event.preventDefault();
    alert("order placed successfully");
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleChange}>
          <div>
            <label className="label">
              First Name
              <input
                name="name"
                type="text"
                value={this.state.name}
                onChange={this.handleSubmit}
              ></input>
            </label>
          </div>
          <div>
            <label>
              email
              <input
                name="email"
                type="email"
                value={this.state.email}
                onChange={this.handleSubmit}
              ></input>
            </label>
          </div>
          <div>
            <label>
              phone
              <input
                name="number"
                type="number"
                value={this.state.number}
                onChange={this.handleSubmit}
              ></input>
            </label>
          </div>
          <div>
            <label>
              address
              <input
                name="address"
                type="text"
                value={this.state.address}
                onChange={this.handleSubmit}
              ></input>
            </label>
          </div>
          <div>
            <label>
              Where to deliever
              <select
                name="deliever"
                value={this.state.deliever}
                onChange={this.handleSubmit}
              >
                <option value="home">home</option>
                <option value="offfice">office</option>
              </select>
            </label>
          </div>
          <input type="submit" value="submit" className="submit" />
        </form>
      </div>
    );
  }
}

export default Cart;
