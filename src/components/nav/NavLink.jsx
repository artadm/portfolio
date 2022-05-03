import React from 'react'

const NavLink = ({ props, text }) => {
    return (
        <a href={props.href} onClick={() => props.setActiveNav(props.href)} className={props.href === props.activeNav ? 'active' : ''} >
            {text}
        </a>
    )
}

export default NavLink