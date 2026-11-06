import { useState } from 'react'
import { useRef } from 'react'
import TopBar from '../components/navegationbar'
import Review_Card from '../components/reviews'
import ContactMe from '../components/contact'
import './App.css'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import Opt_Cards from '../components/options_card'
import FAQ_acc from "../components/FAQ_accordeon"
import Footer from "../components/footer"
import web_services from './assets/webcta2.png'


function App() {

const questionsList =[{eventkey:"0", header:"Question 1", body:"blah blah"}, {eventkey:"1", header:"Question 2", body:"bleh bleh"}, {eventkey:"2", header:"Question 3", body:"bleh bleh bleh"}];

  return (
    <>
 
    <TopBar business_name="Nombre del negocio" link1="Home" link2="Reviews" link3="Contact" link4="[Example]" link5="Services"/>
<section id="CTA">
  <div className='CTA-container'>
<img src="#" alt="services_img" width="300px" id="placeholder_img"/>
<div className='CTA-CTA' >
  <p>Evidencia social #1</p>
<h1 className='text'>Que resultado esperan ver tus clientes</h1>
    <Button type="button" variant="success"> Botón de Acción
      </Button>   
</div>
</div>
</section>
<section id="problem">
  <div className='problem'>
    <div className='pro-text'>
      <p>Evidencia social #2</p>
   <h2 className='text'>Cual es el problema mas recurrente de tus clientes </h2>
   </div>
   <img src="#" alt="Problem_img" width="300px" id="placeholder_img" className="pro-image"/>
    </div>
   </section>
   <section id="services">
    <div className='options'>

      <h3 className="pro-title">Solucion ofrecida.</h3>
    <div className='pro-options-righ'>
      <Opt_Cards title="nombre de la opción" sub="Cliente ideal"  text="Describe porque es la mejor opción para cierto cliente y que ofrece"/>
      </div>
    <div className='pro-options-left'>
      <Opt_Cards title="nombre de la opción" sub="Cliente ideal"  text="Describe porque es la mejor opción para cierto cliente y que ofrece"/>
    </div>
    <div className="pro-btn">
     <Button  type="button" variant="success"> Botón de Acción
      </Button>  
      </div> 
</div>
</section>
<section id="reviews">
  <div className='review-section'>
  <Review_Card title="Title" text="What went well." rating= {4}/>
  <Review_Card title="Title" text="What went well." rating= {5}/>
  <Review_Card title="Title" text="What went well." rating= {3}/>
  </div>
</section>
<section id= "FAQ">
  <div className='Frequent_Q'>
    <h3 className='text'>Preguntas frequentes</h3>
    <FAQ_acc  questions={questionsList}/>
     <Button type="button" variant="success"> Botón de Acción
      </Button> 
  </div>
</section>
<section id="contact">
  <div className='contact-cont'>
    <h3 className='text'>Contactanos</h3>
<div className='contact-me'>
<ContactMe/>
</div>
<div className='contact-text'>
  <h4>Queremos escucharte</h4>
<p>Tienes mas preguntas, necesitas un presupuesto, quieres conocernos? </p>
<p>Por favor rellena el formulario y nos contactaremos contigo.</p>
</div>
</div>
</section>
<Footer/>
    </>
  )
}

export default App
