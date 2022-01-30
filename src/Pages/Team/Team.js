import React from "react";
import Header from "../Header/Header";
import "../../sass/Pages/Teams.scss";
import zidane from "../../assets/Images/zidane.jpg"
import facebook from "../../assets/Images/facebook.png"
import Medium from "../../assets/Images/Medium.png"
import LinkedIn from "../../assets/Images/LinkedIn.png"

const Dashboard = () => {
  return (
    <div>
      <div>
        <Header/>
      </div>
      <div className="teams_main" >
        <div>
          Without bonding and coordination, every project is a failure. Look at who makes KICKUPS great. ;)
        </div>
        <div className="card_main" >
          <div className="card" >
            <div className="card_img" >
              <img src={zidane} alt="..." />
            </div>
            <div className="title" >
              Zidane
            </div>
            <div className="sub_title" >
              Leadership & management
            </div>
            <div className="logos" >
              <img src={LinkedIn} alt="..." />
              <img src={Medium} alt="..." />
              <img src={facebook} alt="..." />
            </div>
          </div>
          <div className="card" >
            <div className="card_img" >
              <img src={zidane} alt="..." />
            </div>
            <div className="title" >
              Zidane
            </div>
            <div className="sub_title" >
              Leadership & management
            </div>
            <div className="logos" >
              <img src={LinkedIn} alt="..." />
              <img src={Medium} alt="..." />
              <img src={facebook} alt="..." />
            </div>
          </div>
          <div className="card" >
            <div className="card_img" >
              <img src={zidane} alt="..." />
            </div>
            <div className="title" >
              Zidane
            </div>
            <div className="sub_title" >
              Leadership & management
            </div>
            <div className="logos" >
              <img src={LinkedIn} alt="..." />
              <img src={Medium} alt="..." />
              <img src={facebook} alt="..." />
            </div>
          </div>
          <div className="card" >
            <div className="card_img" >
              <img src={zidane} alt="..." />
            </div>
            <div className="title" >
              Zidane
            </div>
            <div className="sub_title" >
              Leadership & management
            </div>
            <div className="logos" >
              <img src={LinkedIn} alt="..." />
              <img src={Medium} alt="..." />
              <img src={facebook} alt="..." />
            </div>
          </div>
          <div className="card" >
            <div className="card_img" >
              <img src={zidane} alt="..." />
            </div>
            <div className="title" >
              Zidane
            </div>
            <div className="sub_title" >
              Leadership & management
            </div>
            <div className="logos" >
              <img src={LinkedIn} alt="..." />
              <img src={Medium} alt="..." />
              <img src={facebook} alt="..." />
            </div>
          </div>
        </div>
        <h3>
          and you! ;)
        </h3>
      </div>
    </div>
  );
};

export default Dashboard;