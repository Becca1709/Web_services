import { useState } from 'react'
import TopBar from '../components/navegationbar'
import Review_Card from '../components/reviews'
import ContactMe from '../components/contact'
import './App.css'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import Opt_Cards from '../components/options_card'
import FAQ_acc from "../components/FAQ_accordeon"
import Footer from "../components/footer"


function Example() {

  return (
    <>
 
    <TopBar business_name="Rebecca Designs" link1="Home" link2="Reviews" link3="Contact"/>
<section id="CTA">
  <div className='CTA-container'>
<img src="#" alt="services_img" width="300px" id="placeholder_img"/>
<div className='CTA-CTA' >
  <p>Más de 50 profesionales independientes ya han dejado de perseguir clientes para empezar a recibirlos en automático.</p>
<h1 className='text'>No estás solo en esto: construyamos juntos la vitrina digital que tu talento merece.</h1>
    <Button type="button" variant="success"> Agenda tu sesión estratégica gratuita
      </Button>   
</div>
</div>
</section>
<section id="problem">
  <div className='problem'>
    <div className='pro-text'>
      <p>El 90% de nuestros clientes recupera más de 15 horas semanales de gestión operativa desde el primer mes.</p>
   <h2 className='text'>Cargar con todo tú solo te está alejando de lo que de verdad disfrutas hacer. </h2>
    
    </div>
    <img src="#" alt="Problem_img" width="300px" id="placeholder_img" className="pro-image"/>
  
    <div className='pro-options'>
        <p>Recupera tu tiempo y tu enfoque: elige la opción ideal para delegar tu web hoy mismo</p>
      <Opt_Cards title="nombre de la opción" sub="Cliente ideal"  text="Describe porque es la mejor opción para cierto cliente y que ofrece"/>
      <Opt_Cards title="nombre de la opción" sub="Cliente ideal"  text="Describe porque es la mejor opción para cierto cliente y que ofrece"/>
    </div>
    <div className="pro-btn">
     <Button  type="button" variant="success"> Agenda tu sesión estratégica gratuita
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
    <FAQ_acc />
     <Button type="button" variant="success"> Agenda tu sesión estratégica gratuita
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

export default Example
