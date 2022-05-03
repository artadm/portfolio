import React from "react";
import CV from "../../assets/cv.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} className="btn" download>
        download Cv
      </a>
      <a href="#contact" className="btn btn_primary">
        {" "}
        Let's talk
      </a>
    </div>
  );
};

export default CTA;
