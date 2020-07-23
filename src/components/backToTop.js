import React, {useState, useEffect} from "react"
// import scrollTo from 'gatsby-plugin-smoothscroll';
import "../utils/css/screen.css"
import {
    FaAngleUp
  } from 'react-icons/fa';

const Scroll = ({
     showBelow  
}) => {

        const [show, setShow] = useState(showBelow ? false : true)

        const handleScroll = () => {
            if (window.pageYOffset > showBelow) {
                if (!show) setShow(true)
            } else {
                if (show) setShow(false)
            }
        }

        const handleClick = () => {
            window[`scrollTo`]({ top: 0, behavior: `smooth`})
        }

        useEffect(() => {
            if (showBelow) {
                window.addEventListener(`scroll`, handleScroll)
                return () => window.removeEventListener(`scroll`, handleScroll)
            }
        })
    return (
        <div>
            {show &&
                <FaAngleUp onClick = {handleClick} className = 'backtotop'/>
            }
        </div>
    )
}
  
export default Scroll;