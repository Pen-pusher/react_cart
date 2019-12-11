import React from "react";
import { FaCartArrowDown } from "react-icons/fa";

function Header(props) {
  return (
    <div className="header">
      <h1 className="header" onClick={() => props.page("products")}>
        cart
      </h1>

      <h3 className="header" onClick={() => props.page("cart")}>
        <span className="span">
          {props.cart.length}{" "}
          <span className="span">
            <FaCartArrowDown />
          </span>
        </span>
      </h3>
    </div>
  );
}

export default Header;
