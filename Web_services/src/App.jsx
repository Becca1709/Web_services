import { useState } from 'react'
import TopBar from '../components/navegationbar'
import Review_Card from '../components/reviews'
import ContactMe from '../components/contact'
import './App.css'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import Opt_Cards from '../components/options_card'
import web_services from './assets/webcta2.png'


function App() {

  return (
    <>
 
    <TopBar business_name="Nombre del negocio" link1="Home" link2="Reviews" link3="Contact"/>
<section id="CTA">
  <div className='CTA-container'>
<img src="#" alt="services_img" width="300px" id="placeholder_img"/>
<div className='CTA-CTA'>
  <p>Evidencia social #1</p>
<h1>Que resultado esperan ver tus clientes</h1>
    <Button type="button" variant="success"> Botón de Acción
      </Button>   
</div>
</div>
</section>
<section id="problem">
  <div className='problem'>
    <div className='pro-text'name="pro-text">
   <h2>Cual es el problema mas recurrente de tus clientes </h2>
    <p>Solucion ofrecida.</p>
    </div>
    <img src="#" alt="Problem_img" width="300px" name="pro-placeholder"id="placeholder_img"/>
    <div className='options'name="options">
      <Opt_Cards title="nombre de la opción" sub="Cliente ideal"  text="Describe porque es la mejor opción para cierto cliente y que ofrece"/>
      <Opt_Cards title="nombre de la opción" sub="Cliente ideal"  text="Describe porque es la mejor opción para cierto cliente y que ofrece"/>
    </div>
     <Button type="button" name="pro-button"variant="success"> Botón de Acción
      </Button>   
  </div>
</section>
<section id="reviews">
  <div className='review-section'>
    <p>add stars to the cards</p>
  <Review_Card title="Title" text="What went well."/>
   <Review_Card title="Title" text="What went well."/>
    <Review_Card title="Title" text="What went well."/>
  </div>
</section>
<section id= "FAQ">
  <div className='Frequent_Q'>
    <h3>Preguntas frequentes</h3>
    <p>Add acorden</p>
     <Button type="button" variant="success"> Botón de Acción
      </Button> 
  </div>
</section>
<section id="contact">
<div className='contact-me'>
<ContactMe/>
</div>
<div className='contact-text'><h4>Quieres ponerte en contacto?</h4>
<p>escribeme aqui</p>
</div>
</section>
<footer>
  <p>This is the footer section</p>
</footer>
    </>
  )
}

export default App
