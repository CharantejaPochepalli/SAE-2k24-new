
import React from "react";
import "./HomCard.css";

const HomCard = () => {
  return (
    <div className="homcard-container">
      <div className="homcard loading">
        {/* <img
          src="https://i.ibb.co/CWSfpSC/Whats-App-Image-2024-10-29-at-19-05-17-c93d3569.jpg"
          className="homimage"
          alt="Aarohan"
        /> */}
        <img  className="homimage" src="https://i.ibb.co/khC7fps/Screenshot-2024-11-05-174204.png" alt="Aarohan" />
      </div>
      <div className="homcard loading">
        {/* <img src="./SDV.jpg" className="homimage" alt="SDV" /> */}
        <img className="homimage" src="https://i.ibb.co/nPzkd2P/SDVIMG15.jpg" alt="SDV" />
      </div>
      <div className="homcard loading">
        <img src="https://i.ibb.co/ZVrCF4f/Screenshot-2024-11-07-105306.png" className="homimage" alt="TEDx" />
        {/* <img className="homimage" src="https://i.ibb.co/vqZW5dC/Screenshot-2024-11-05-171341.png" alt="TEDX" /> */}
      </div>
    </div>
  );
};

export default HomCard;
