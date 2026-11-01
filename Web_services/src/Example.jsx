import { useState } from 'react'
import TopBar from '../components/navegationbar'
import Review_Card from '../components/reviews'
import ContactMe from '../components/contact'
import './App.css'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import web_services from './assets/webcta2.png'


function Example() {

  return (
    <>
 
    <TopBar/>
<section id="CTA">
  <div className='CTA-container'>
<img src={web_services} alt="webservices" />
<div className='CTA-CTA'>
<h1>Tu te preocupas de tus numeros. Yo de tu página web.</h1>
    <Button type="button" variant="success"> Consulta precios aqui!
      </Button>   
</div>
</div>
</section>
<section id="problem">
  <div className='problem'>
  <h2>Trabajar solo puede ser cansador. </h2>
    <p>Tratando de ser el fundador, contador, diseñador, HR y desarrollador web todo al mismo tiempo?</p>
  <p>Aqui estoy para ayudarte! No estas solo</p>
  </div>
</section>
<section id="reviews">
  <div className='review-section'>
  <Review_Card title="Best services ever" text="It was so easy to work with Becca and my business is doing so much better!"/>
    <Review_Card title="Best services ever" text="It was so easy to work with Becca and my business is doing so much better!"/>
      <Review_Card title="Best services ever" text="It was so easy to work with Becca and my business is doing so much better!"/>
  </div>
</section>
<section id= "FAQ">
  <div>
    <h3>Preguntas frequentes</h3>
    <p>Add acorden</p>

  </div>
</section>
<section id="contact">
<div className='contact-me'>
<ContactMe/>
</div>
<div className=''><h4>Quieres ponerte en contacto?</h4>
<p>escribeme aqui</p>
</div>
</section>
<footer>
  <p>This is the footer section</p>
</footer>
    </>
  )
}

export default Example
