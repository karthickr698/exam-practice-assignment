import React from "react";
import "../../sass/Pages/Stor.scss"
import search from "../../assets/Images/search.png"
import emptyStar from "../../assets/Images/emptyStar.png"
import fillStar from "../../assets/Images/fillStar.png"
import halfStar from "../../assets/Images/halfStar.png"
import L1_small from "../../assets/Images/L1_small.png"
import kew01_img from "../../assets/Images/kew01_img.png"
import { Link } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import Cart from "./Cart";
import Filter from "./Filter";

const Product = () => {

    const [searchState, setSearchState] = useState(false)

    const data = [
        {
            Product_img:L1_small,
            name:"KSL",
            cost:"2000",
        },
        {
            Product_img:kew01_img,
            name:"KSL",
            cost:"2000",
        },
        {
            Product_img:L1_small,
            name:"KSL",
            cost:"2000",
        },
        {
            Product_img:L1_small,
            name:"KSL",
            cost:"2000",
        },
        {
            Product_img:kew01_img,
            name:"KSL",
            cost:"2000",
        },
        {
            Product_img:L1_small,
            name:"KSL",
            cost:"2000",
        },
    ]

  return (
    <div>
        <div className="product_main" >
            <div className="title" >
                SHOES
            </div>
            {searchState ? 
                <div className="search" >
                    <input type="text" placeholder="search" />
                </div> : null
            }
            <div className="search_img" >
                {!searchState ? 
                    <div className="search_icon" onClick={()=>(setSearchState(true))} >
                        <img src={search} />
                    </div> :
                    <div onClick={()=>(setSearchState(false))} >
                        <img src={search} />
                    </div>
                }
                <div className="sort">
                    <button>Sort by</button>
                </div>
                <div className="cart mobile_res" >
                    <Cart />
                </div>
                <div className="filter mobile_res" >
                    <Filter />
                </div>
            </div>
        </div>
        <div className="card_main" >
            {data.map((item)=>(
                <Link to="/product_details" className="card" >
                    <div className="product_img" >
                        <img src={item.Product_img} alt="..." />
                    </div>
                    <div className="product_name" >
                        {item.name}
                    </div>
                    <div className="product_cost" >
                        <div>
                            Rs. {item.cost}
                        </div>
                        <div className="star" >
                            <img src={fillStar} alt=".." />
                            <img src={fillStar} alt=".." />
                            <img src={fillStar} alt=".." />
                            <img src={halfStar} alt=".." />
                            <img src={emptyStar} alt=".." />
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    </div>
  );
};

export default Product;