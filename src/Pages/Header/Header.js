import React, {useState} from "react";
import "../../sass/Pages/Header.scss"
import blacklogo from "../../assets/Images/black_logo.png"
import user from "../../assets/Images/Behance.png"
import menu from "../../assets/Images/menu.png"
import { Link } from "react-router-dom";

const Header = (props) => {

  const [mobileView, setMobileView] = useState(false)

    const data = [
    {
      id: 1,
      text: "home",
      link: "/",
    },
    {
      id: 2,
      text: "the journey",
      link: "/journey",
    },
    {
      id: 1,
      text: "team",
      link: "/team",
    },
    {
      id: 2,
      text: "stor",
      link: "/stor",
    },
    {
      id: 2,
      text: "contact",
      link: "/contact",
    },
  ];

  console.log("props", props);

  return (
    <div>
      <header className="main_header" >
          <div>
            <img src={blacklogo} alt="..." />
          </div>
          <div className="tab" >
            {data.map((item) => (
              <div>
                <Link
                to={item.link}
                className="active"
                >
                  {item.text}
                </Link>
              </div>
            ))}
          </div>
          <div className="loginmain" >
            <img src={user} alt="..." />
            <button>login</button>
          </div>
            <div onClick={() => {
              setMobileView(true);
              }} className="mobile" >
              <img src={menu} />
            </div>
      </header>
      <div className={mobileView ? "menu_active" : "non_active"} >
            {data.map((item) => (
                <Link onClick={() => {
                    setMobileView(false);
                  }} 
                  to={item.link}
                >
                <div className="mobile_tab" >
                  <div>
                    {item.text}
                  </div>
                </div>
              </Link>
            ))}
            <div className="mobile_tab" onClick={()=>setMobileView(false)} >
              <div>
                Close
              </div>
            </div>
      </div>
    </div>
  );
};

export default Header;