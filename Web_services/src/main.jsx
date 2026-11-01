import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router";
import { Route, Routes } from 'react-router';
import './index.css'
import App from './App.jsx'
import Example from './Example.jsx'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/" element={<Example />} />

    </Routes>
  </BrowserRouter>,
)
