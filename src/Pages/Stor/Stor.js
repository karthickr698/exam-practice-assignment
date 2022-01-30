import React from "react";
import Header from "../Header/Header";
import "../../sass/Pages/Stor.scss"
import Filter from "./Filter";
import Product from "./Product";
import Cart from "./Cart";

const Stor = () => {

  return (
    <div>
      <div>
        <Header/>
      </div>
      <div className="stor_main" >
        <div className="stor" >
          <div className="filter web" >
            <Filter/>
          </div>
          <div className="product" >
            <Product/>
          </div>
          <div className="cart web" >
            <Cart/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stor;