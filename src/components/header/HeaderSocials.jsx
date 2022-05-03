import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { SiWeblate } from "react-icons/si";
import { BsGithub } from "react-icons/bs";

function HeaderSocials() {
  return (
    <div className="header__socials">
      <a href="htttps://linkedin.com" target="_blank">
        <BsLinkedin />
      </a>
      <a href="htttps://github.com" target="_blank">
        <BsGithub />
      </a>
      <a href="htttps://weblancer.com" target="_blank">
        <SiWeblate />
      </a>
    </div>
  );
}

export default HeaderSocials;
