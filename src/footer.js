//En este apartado se importan los archivos necesarios para el footer(pie de pagina), ademas de importar iconos de react para usarlos en dicho footer.
import React from 'react' 
import styles from './footer.module.css'; 
import {AiOutlineCopyright} from "react-icons/ai" 
import {AiFillHome} from "react-icons/ai" 
 
 //se crea el componente del footer a usar en la pagina web
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

//se exporta el footer para ser invocado y usado en el index.js
export default footer;