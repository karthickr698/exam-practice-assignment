import React from "react";
import Header from "../Header/Header";
import "../../sass/Pages/Teams.scss";
import zidane from "../../assets/Images/zidane.jpg";
import Dribble from "../../assets/Images/dribbble.png";
import facebook from "../../assets/Images/facebook.png";
import Medium from "../../assets/Images/Medium.png";
import LinkedIn from "../../assets/Images/LinkedIn.png";

const Dashboard = () => {
  const teamData = [
    {
      name: "Zidane",
      role: "Leadership & management",
      linkedin: true,
      medium: true,
      facebook: true,
      ball: false,
    },
    {
      name: "Toni Kroos",
      role: "Product developer",
      linkedin: true,
      medium: true,
      facebook: false,
      ball: false,
    },
    {
      name: "Iker Casillas",
      role: "Marketing strategy",
      linkedin: false,
      medium: true,
      facebook: false,
      ball: false,
    },
    {
      name: "James",
      role: "Product designer",
      linkedin: false,
      medium: true,
      facebook: false,
      ball: true,
    },
    {
      name: "Cristiano",
      role: "Financial operations",
      linkedin: true,
      medium: false,
      facebook: true,
      ball: false,
    },
  ];
  return (
    <div>
      <Header />

      <div className="teams_main">
        <div>
          Without bonding and coordination, every project is a failure. Look at
          who makes KICKUPS great. ;)
        </div>
        <div className="card_main">
          {teamData &&
            teamData.map((ele) => (
              <div className="card">
                <div className="card_img">
                  <img src={zidane} alt="..." />
                </div>
                <div className="title">{ele.name}</div>
                <div className="sub_title">{ele.role}</div>
                <div className="logos">
                  {ele.linkedin && <img src={LinkedIn} alt="..." />}
                  {ele.medium && <img src={Medium} alt="..." />}
                  {ele.facebook && <img src={facebook} alt="..." />}
                  {ele.ball && <img src={Dribble} alt="..." />}
                </div>
              </div>
            ))}
        </div>
        <h3>and you! ;)</h3>
      </div>
    </div>
  );
};

export default Dashboard;
