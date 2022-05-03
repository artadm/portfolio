import React from "react";
import './Nav.css'
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { BsFillJournalBookmarkFill } from 'react-icons/bs'
import { RiServiceLine } from 'react-icons/ri'
import { MdOutlineContacts } from 'react-icons/md'
import { useState } from "react";
import NavLink from "./NavLink";



const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')

  const links = [
    { link: '#', text: <AiOutlineHome /> },
    { link: '#about', text: <AiOutlineUser /> },
    { link: '#experience', text: <BsFillJournalBookmarkFill /> },
    { link: '#services', text: <RiServiceLine /> },
    { link: '#contacts', text: <MdOutlineContacts /> }
  ]

  return (<nav>
    {links.map((el) =>
      <NavLink key={el.link} text={el.text} props={{ href: el.link, setActiveNav, activeNav }} />
    )}
  </nav>);
};

export default Nav;
