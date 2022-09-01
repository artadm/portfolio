import React from 'react'
import './Stars.scss'
import me from '../../assets/b2.jpg'

const Stars = () => {
    return (
        <div className="stars__container">
            <div className="night">
                <div className="shooting_star"><img src={me} alt="" /></div>
                <div className="shooting_star"><img src={me} alt="" /></div>
                <div className="shooting_star"><img src={me} alt="" /></div>
                <div className="shooting_star"><img src={me} alt="" /></div>
                <div className="shooting_star"><img src={me} alt="" /></div>
                <div className="shooting_star"><img src={me} alt="" /></div>
                <div className="shooting_star"><img src={me} alt="" /></div>
                <div className="shooting_star"><img src={me} alt="" /></div>
                <div className="shooting_star"><img src={me} alt="" /></div>
                <div className="shooting_star"><img src={me} alt="" /></div>
            </div>
        </div>
    )
}

export default Stars