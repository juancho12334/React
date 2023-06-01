import React from 'react' 
import styles from './footer.module.css'; 
import {AiOutlineCopyright} from "react-icons/ai" 
import {AiFillHome} from "react-icons/ai" 
 
 
  const footer = () => { 
  return ( 
    <footer className={styles.pie}> 
      <div className={styles.parrafo-footer}> 
      <span className={styles.parrafo}>FASHION|<AiOutlineCopyright/>2023 By Julian Corredor-Camila Assia-Juan Morales-Carlos Ortega</span> 
      </div> 
      <div className={styles.imagenes-footer}>  
      <img src="./images/Logo.png" className={styles.pielogo}></img> 
      </div> 
    </footer> 
  ) 
} 
 
export default footer;