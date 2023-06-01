import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navegacion, { FichasGrandes} from './fichas.js';
import { Card } from './fichas.js';
import NavBar from './header/NavBar';
import Footer from './footer'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<> 
<NavBar/>
<div class='ficha1'>
<FichasGrandes/>
</div>
<div class="ficha2">
<FichasGrandes/>
</div>
<div class="tarjeta1">
<Card/>
</div>
<div class="tarjeta2">
<Card/>
</div>
<div class="tarjeta3">
<Card/>
</div>
<div class="tarjeta4">
<Card/>
</div>
<div class="tarjeta5">
<Card/>
</div>
<div class="flechaizquierda">
<img src='/images/leftarrow.png'></img>
</div>
<div class="flechaderecha">
<img src="/images/arrowright.png"></img>
</div>
<Footer/>
</>
);



