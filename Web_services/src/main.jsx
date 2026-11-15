import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import Example from './Example.jsx'
import Success_sub from '../components/sucess.jsx';


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Example" element={<Example />} />
      <Route path="/Success" element={<Success_sub />} />
    </Routes>
  </BrowserRouter>,
)
