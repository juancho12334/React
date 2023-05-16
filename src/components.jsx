import React from 'react';
function Navegacion(){
      return (
        <nav>
            <div>
        <ul>
        <li>
            <a href="#">usuario</a>
        </li>
        <li>
            <a href="#">configuracion</a>
        </li>

        <li>
            <a href="#">compras</a>
        </li>

        <li>
            <a href="#">salir</a>
        </li>


        </ul>

            </div>
       </nav>
      );
    }

export function FichasGrandes() {
  return (
    <div>
    <section>
      <img src="/images/FG.png" alt="aimage" />
      <img src="/images/Star.png" alt="aimage" />
      <img src="/images/Corazon.png" alt="aimage" />
      <span>Sueter Básico Negro</span>
      <span>( 200+ Reviews )</span>
      <span>
                Sueter básico ideal para combinar con todas tus prendas
              </span>
              
    
    </section>
    </div>
        );
}

export default Navegacion;
