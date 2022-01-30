import React, {useState} from "react";
import cart from "../../assets/Images/cart.png";
import location from "../../assets/Images/location.png";
import date from "../../assets/Images/date.png";
import "../../sass/Pages/Stor.scss"
import back from "../../assets/Images/back.png"

const Cart = () => {

    const data = [ {name:"location", img:location},{name:"select date", img:date} ]

    const [onCart, setOnCart] = useState(false);

  return (
    <div>
        <div className="desktop" >
            <div className="filter_head" >
                <div className="title" >
                    CART
                </div>
                <div >
                    <img src={cart} alt="..." />
                </div>
            </div>
            <div className="cart_space" >
                what's shopping you, designer?
            </div>
            <div className="local" >
                {data.map((item)=>(
                    <div className="local_flex" >
                        <div>
                            <img src={item.img} />
                        </div>
                        <div>
                            {item.name}
                        </div>
                    </div>
                ))}
            </div>
            <div className="order_btn" >
                <button>
                order now
                </button>
            </div>
        </div>
        <div onClick={() => setOnCart(true)} className="filter_head mobile_Cart" >
            <img src={cart} alt="..." />
        </div>
        {onCart ?
        <div className="open" >
            <div className="mobile" >
                <div className="filter_head" >
                    <div className="cart-div" >
                        <div>
                            <img onClick={() => setOnCart(false)} src={back} alt="..." />
                        </div>
                        <div className="title" >
                            CART
                        </div>
                    </div>
                    <div>
                        <img src={cart} alt="..." />
                    </div>
                </div>
                <div className="cart_space" >
                    what's shopping you, designer?
                </div>
                <div className="local" >
                    {data.map((item)=>(
                        <div className="local_flex" >
                            <div>
                                <img src={item.img} />
                            </div>
                            <div>
                                {item.name}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="order_btn" >
                    <button>
                    order now
                    </button>
                </div>
            </div>
        </div>
        : null}
    </div>
  );
};

export default Cart;