import React, { useEffect, useState } from "react";
import "../../sass/Pages/Stor.scss";
import search from "../../assets/Images/search.png";
import emptyStar from "../../assets/Images/emptyStar.png";
import fillStar from "../../assets/Images/fillStar.png";
import halfStar from "../../assets/Images/halfStar.png";
import L1_small from "../../assets/Images/L1_small.png";
import { Link } from "react-router-dom";

import Cart from "./Cart";
import Filter from "./Filter";
import { BASE_URL } from "../../utils/env";
import axios from "axios";

const Product = () => {
  const [searchState, setSearchState] = useState(false);

  const [datas, setDatas] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${BASE_URL}products`)
      .then((res) => {
        setLoading(false);
        setDatas([...res.data]);
      })
      .catch((err) => {
        setLoading(false);
        setError("Some Error Occured");
        //console.log(err);
      });
  }, []);

  return (
    <div>
      <div className="product_main">
        <div className="title">SHOES</div>
        {searchState ? (
          <div className="search">
            <input type="text" placeholder="search" />
          </div>
        ) : null}
        <div className="search_img">
          {!searchState ? (
            <div className="search_icon" onClick={() => setSearchState(true)}>
              <img src={search} alt="logo" />
            </div>
          ) : (
            <div onClick={() => setSearchState(false)}>
              <img src={search} alt="logo" />
            </div>
          )}
          <div className="sort">
            <button>Sort by</button>
          </div>
          <div className="cart mobile_res">
            <Cart />
          </div>
          <div className="filter mobile_res">
            <Filter />
          </div>
        </div>
      </div>
      <div className="card_main">
        {loading ? (
          <div>Loading</div>
        ) : error ? (
          <div style={{ color: "red" }}>{error}</div>
        ) : datas && datas.length === 0 ? (
          <div>No Data Available</div>
        ) : (
          <>
            {datas &&
              datas.map((item) => (
                <Link to="/product_details" className="card">
                  <div className="product_img">
                    <img src={L1_small} alt="..." />
                  </div>
                  <div className="product_name">{item.name}</div>
                  <div className="product_cost">
                    <div>Rs. {item.price}</div>
                    <div className="star">
                      <img src={fillStar} alt="logo" />
                      <img src={fillStar} alt="logo" />
                      <img src={fillStar} alt="logo" />
                      <img src={halfStar} alt="logo" />
                      <img src={emptyStar} alt="logo" />
                    </div>
                  </div>
                </Link>
              ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Product;
