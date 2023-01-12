import React from 'react'
import ReactDOM from 'react-dom/client'

/* Bootstrap */
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
/* main css */
import './styles.css'
import { CalendarApp } from './CalendarApp';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  
    <BrowserRouter>
    <CalendarApp/>
    </BrowserRouter>
)
