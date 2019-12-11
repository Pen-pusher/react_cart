import React from "react";
import { render } from "react-dom";

import Product from "./components/products.js";
import Header from "./components/header.js";

import Cart from "./components/cart.js";
import { FaCartArrowDown, FaCartPlus } from "react-icons/fa";

import data from "./data.json";
import "./style/main.scss";

class App extends React.Component {
  // console.log(data);
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
      activePage: "products"
    };
  }
  handleSubmit = product => {
    const newCart = this.state.cart.concat(product);
    console.log(newCart);
    this.setState({
      cart: newCart
    });
  };

  handlePage = comp => {
    this.setState({
      activePage: comp
    });
  };

  switchPage = () => {
    switch (this.state.activePage) {
      case "products":
        return (
          <ul className="ul">
            {data.products.map(product => (
              <Product
                title=<div className="title">{product.title}</div>
                price={product.price}
                id={product.id}
                cart={this.handleSubmit}
              />
            ))}
          </ul>
        );
        break;
      case "cart":
        return (
          <div>
            <h3 className="white">cart</h3>
            <ul>
              {this.state.cart.map(item => (
                <li>
                  <span>{item.title}</span>
                  <span>{item.price}</span>
                </li>
              ))}
            </ul>
            <hr></hr>
            <h3 className="white ">
              Total:
              {this.state.cart.reduce((acc, items) => acc + items.price, 0)}
            </h3>
            <div className="chkout">
              <button
                className="chekout"
                onClick={() => this.handlePage("checkout")}
              >
                <span className="btn-chkout">
                  <FaCartPlus />
                </span>
                checkout
              </button>
            </div>
          </div>
        );
        break;
      case "checkout":
        return <Cart />;
        break;
      default:
        return <p>page not found</p>;
    }
  };

  render() {
    return (
      <div className="wrapper">
        <Header cart={this.state.cart} page={this.handlePage} />
        {this.switchPage()}
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
