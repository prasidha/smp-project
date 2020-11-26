import React from 'react'
import ReactDOM from 'react-dom';
import './index.css'
import App from './App'
import ThemeContext from './ThemeContext';

ReactDOM.render(
    <ThemeContext >
        <React.StrictMode>
           <App/>
        </React.StrictMode>
    </ThemeContext>
    ,
    document.getElementById('root')
          ); 
  



