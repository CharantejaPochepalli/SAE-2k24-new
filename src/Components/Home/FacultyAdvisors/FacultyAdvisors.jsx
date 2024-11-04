import React from "react";
import "./FacultyAdvisors.css";

const cards = [
  {
    name: "Prof. Nilotpal Banerjee",
    department: "Department of Mechanical Engineering",
    image: require("../images/niloptal1.jpeg"),
    aos: "fade-right",
  },
  {
    name: "Prof. Apurba Layek",
    department: "Department of Mechanical Engineering",
    image: require("../images/apurba1.jpeg"),
    aos: "fade-up",
  },
  {
    name: "Prof. Tapas Kumar Saha",
    department: "Department of Electrical Engineering",
    image: require("../images/tapas1.jpeg"),
    aos: "fade-left",
  },
];

const CardSection = () => {
  return (
    <>
      <br />
      <h2 className="section-heading">Our Faculty Advisors</h2>
      <hr className="section-underline" />
      <div className="faculty-card-section">
        {cards.map((card, index) => (
          <div className="faculty-card" key={index} data-aos={card.aos}>
            <img
              src={card.image}
              alt={card.name}
              className="faculty-card-image"
            />
            <div className="faculty-card-info">
              <h3>{card.name}</h3>
              <p>{card.department}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CardSection;
