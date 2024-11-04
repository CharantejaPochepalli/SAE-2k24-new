
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
        <img src="https://i.ibb.co/jk56zZY/aarohan.jpg" alt="Aarohan" />
      </div>
      <div className="homcard loading">
        {/* <img src="./SDV.jpg" className="homimage" alt="SDV" /> */}
        <img src="https://i.ibb.co/9YjnQqh/sdv.jpg" alt="SDV" />
      </div>
      <div className="homcard loading">
        {/* <img src="./Tedx1.png" className="homimage" alt="TEDx" /> */}
        <img src="https://i.ibb.co/qj4LYfT/Screenshot-2024-11-04-152155.png" alt="TEDX" />
      </div>
    </div>
  );
};

export default HomCard;
