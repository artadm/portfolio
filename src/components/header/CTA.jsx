import React from "react";

import resume from '../../assets/Sibogatulin Artem resume.pdf'

const CTA = () => {
  return (
    <div className="cta">
      <a className="btn" href={resume} target="_blank">
        Resume
      </a>
      <a href="#contacts" className="btn btn_primary">
        {" "}
        Let's talk
      </a>
    </div>
  );
};

export default CTA;
