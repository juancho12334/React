import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navegacion, { FichasGrandes } from './components.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>
<Navegacion />, 
<FichasGrandes/>
</>
);



