import React from 'react'
import ReactDOM from 'react-dom/client'

/* Bootstrap */
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
/* main css */
import './main.css'
import { CalendarApp } from './CalendarApp';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CalendarApp/>
  </React.StrictMode>,
)
