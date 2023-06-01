import React, { useEffect, useState } from 'react'; 
import { Link } from 'react-scroll'; 
import styles from './NavBar.module.css'; 
import {AiOutlineMenu} from "react-icons/ai"; 
import {AiOutlineClose} from "react-icons/ai"; 
 
 
const NavBar = () => { 
    const[navBarOpen, setNavBarOpen] = useState(false); 
    const [windowDimesion, setWindowDimension] = useState({ 
        width: window.innerWidth, 
        height: window.innerHeight 
    }); 
 
    const detecDimension = () => { 
        setWindowDimension({ 
            width: window.innerWidth, 
            height: window.innerHeight 
        }) 
    } 
 
 
    useEffect(() =>{ 
 
        window.addEventListener('resize', detecDimension) 
        windowDimesion.width > 800 && setNavBarOpen(false) 
        return () => { 
            window.removeEventListener('resize', detecDimension) 
        } 
 
    },[windowDimesion]) 
    const links=[ 
        { 
            id: 1,  
            Link: "Home", 
        }, 
        { 
            id: 2,  
            Link: "Services", 
        }, 
        { 
            id: 3, 
            Link: "HomeWeWork", 
        }, 
        { 
            id: 4, 
            Link: "Benefits", 
        }, 
         
    ]; 
  return ( 
    <div className={!navBarOpen === true ? styles.navBar : styles.navOpen}> 
        {!navBarOpen && <p className={styles.logo}>Fashion</p>} 
        {!navBarOpen && windowDimesion.width < 800 ? ( 
                <AiOutlineMenu onClick={() => setNavBarOpen(!navBarOpen)} size={25}/> 
                ) : ( 
            windowDimesion.width < 800 && ( 
              <AiOutlineClose onClick={() => setNavBarOpen(!navBarOpen)} color="#f1f1f1" size={25}/>) 
                )  
        } 
         
        { navBarOpen || 
              ( windowDimesion.width > 800 &&( 
                <ul className= {styles.linksContainer}> 
            {links.map((x) =>( 
                <div> 
                    <Link 
                    onClick={() => setNavBarOpen(false)} 
                    to={x.link} 
                    smooth 
                    duration={500} 
                    className={styles.navLink} 
                    >{x.Link === "HomeWeWork" ? "How we work" : x.Link}</Link> 
                    <div className={styles.border}></div> 
                </div> 
            ))} 
        </ul> 
            )) 
 
        } 
    </div> 
  ) 
} 
 
export default NavBar