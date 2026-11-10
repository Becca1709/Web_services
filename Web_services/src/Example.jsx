import { useState } from 'react'
import TopBar from '../components/navegationbar'
import Review_Card from '../components/reviews'
import {ContactMe} from '../components/contact'
import './App.css'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import Opt_Cards from '../components/options_card'
import FAQ_acc from "../components/FAQ_accordeon"
import Footer from "../components/footer"
import webcta from "../src/assets/webcta2.png"
import problem from "../src/assets/problem.png"
import { reviewsData, questionsList, plansData } from './datasets/landingData'

function Example() {



  return (
    <>
 
    <TopBar business_name="Rebecca Designs" link1="Home" link2="Reviews" link3="Contact" link5="Services"/>
<section id="CTA">
  <div className='CTA-container'>
<img src={webcta} alt="services_img"/>
<div className='CTA-CTA' >
  <p>Olvídate de buscar clientes y haz que ellos te encuentren a ti.</p>
<h1 className='text'>Construyamos juntos la vitrina digital que tu talento merece.</h1>
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
   <img src={problem} alt="Problem_img" className="pro-image"/>
    </div>
   </section>
   <section id="services">
      <h3 className="pro-title"> Recupera tu tiempo y tu enfoque: elige la opción ideal para delegar tu web hoy mismo </h3>
 <div className='options-ex'>
        {plansData.map((plan) => (
        <Opt_Cards
          key={plan.id} 
          title={plan.title} 
          sub={plan.sub} 
          price={plan.price}
          text={plan.text}
          className="plan-options"
        />
      ))}
</div>
  <div className="ex-btn">
     <Button  type="button" variant="success"> Agenda tu sesión estratégica gratuita
      </Button>  
      </div> 
</section>
<section id="reviews">
  <div className='review-section'>
    {reviewsData.map((review) => (
        <Review_Card 
          key={review.id} 
          title={review.title} 
          text={review.text} 
          rating={review.rating}
        />
      ))}
  </div>
</section>
<section id= "FAQ">
  <div className='Frequent_Q'>
    <h3 className='text'>Preguntas frequentes</h3>
    <FAQ_acc  questions={questionsList}/>
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
