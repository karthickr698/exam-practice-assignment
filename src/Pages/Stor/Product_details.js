import React from "react";
import "../../sass/Pages/Stor.scss"
import back from "../../assets/Images/back.png"
import emptyStar from "../../assets/Images/emptyStar.png"
import fillStar from "../../assets/Images/fillStar.png"
import halfStar from "../../assets/Images/halfStar.png"
import L1_small from "../../assets/Images/L1_small.png"
import L1 from "../../assets/Images/L1.png"
import filter from "../../assets/Images/filter.png"
import black_white from "../../assets/Images/black_white.png"
import blue_white from "../../assets/Images/blue_white.png"
import { useState } from "react/cjs/react.development";
import Cart from "./Cart";
import cart from "../../assets/Images/cart.png";
import { Link } from "react-router-dom";
import Header from "../Header/Header";

const Product_details = () => {

    const data = ["Front", "Middile", "Back"]

  return (
    <div>
        <div>
            <Header/>
        </div>
        <div className="product_details" >
            <div  className="product">
                <div className="title_main" >
                    <div>
                        <Link to="/stor" className="back" >
                            <img src={back} alt="..." />
                        </Link>
                        <div className="title" >
                            your design space
                        </div>
                    </div>
                    <div className="cart mobile_res" >
                        <Cart />
                    </div>
                </div>
                <div className="product_flex" >
                    <div className="view" >
                        <img src={L1} />
                    </div>
                    <div className="details" >
                        <div className="re_view" >
                            <div>
                                <img src={L1_small} />
                            </div>
                            <div>
                                <img src={L1_small} />
                            </div>
                            <div>
                                <img src={L1_small} />
                            </div>
                        </div>
                        <div>
                            <div className="product_name" >
                                KSL 01
                            </div>
                            <div className="sub_tect" >
                                by KICKSUP
                            </div>
                            <div className="star">
                                <div>
                                    <img src={fillStar} alt=".." />
                                    <img src={fillStar} alt=".." />
                                    <img src={fillStar} alt=".." />
                                    <img src={halfStar} alt=".." />
                                    <img src={emptyStar} alt=".." />
                                </div>
                                <div>
                                    80 ReView
                                </div>
                            </div>
                            <div className="product_cost" >Rs. 2000/-</div>
                            <div className="off" >
                                Get an exclusive 20% off shopping with HDFC bank
                            </div>
                            {data.map((item)=>(
                                <div className="select" >
                                    <div className="name" >
                                        {item}
                                    </div>
                                    <div className="color_select" >
                                        <div>
                                            <img src={black_white} />
                                        </div>
                                        <div className="blue" >
                                        </div>
                                        <div>
                                            <img src={blue_white} />
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <div className="select" >
                                <div className="name" >
                                    Sole
                                </div>
                                <div className="color_select" >
                                    <div className="black" >
                                    </div>
                                    <div className="blue" >
                                    </div>
                                    <div className="white" >
                                    </div>
                                </div>
                            </div>
                            <div className="select" >
                                <div className="name" >
                                    Size
                                </div>
                                <div className="color_select" >
                                    <div className="white" >
                                        7
                                    </div>
                                    <div className="white" >
                                        8
                                    </div>
                                    <div className="white" >
                                        9
                                    </div>
                                    <div className="white" >
                                        10
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="reView">
                    <div className="text" >
                        Rate Product
                    </div>
                    <div className="star">
                        <img src={fillStar} alt=".." />
                        <img src={fillStar} alt=".." />
                        <img src={fillStar} alt=".." />
                        <img src={halfStar} alt=".." />
                        <img src={emptyStar} alt=".." />
                    </div>
                </div>
                <div className="btn_group" >
                    <button className="share" >
                        Share design
                    </button>
                    <button className="add" >
                        Add to cart
                    </button>
                </div>
            </div>
            <div className="cart web" >
                <Cart />
            </div>
        </div>
    </div>
  );
};

export default Product_details;