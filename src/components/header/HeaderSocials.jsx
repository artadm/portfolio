import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { SiWeblate } from "react-icons/si";
import { BsGithub } from "react-icons/bs";

function HeaderSocials() {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/%D0%B0%D1%80%D1%82%D0%B5%D0%BC-%D1%81%D0%B8%D0%B1%D0%BE%D0%B3%D0%B0%D1%82%D1%83%D0%BB%D0%B8%D0%BD-a96b60236/" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/artadm" target="_blank">
        <BsGithub />
      </a>
      <a href="https://www.weblancer.net/users/artemsibogatulin/" target="_blank">
        <SiWeblate />
      </a>
    </div>
  );
}

export default HeaderSocials;
