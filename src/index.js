import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import ThemeContext from './ThemeContext'

ReactDOM.render(
  <ThemeContext>
  <App/>
  </ThemeContext>

 ,
  document.getElementById('root')
);


