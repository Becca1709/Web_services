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
import webcta from "../src/assets/webcta2.png"
import problem from "../src/assets/problem.png"

function Example() {

const questionsList =[{eventkey:"0", header:"1. ¿Tengo que saber de tecnología o diseño para mantener mi página web?", 
  body:"Para nada. Creamos tu sitio en una plataforma visual e intuitiva donde cambiar un texto, subir una foto o actualizar tus precios es tan fácil como editar un documento de Word. Además, al finalizar el proyecto, te entregamos video-tutoriales cortos y personalizados para que seas 100% independiente."},
   {eventkey:"1", header:"2. ¿Cuánto tiempo tomará tener mi sitio web completamente listo?", 
    body:"El Plan Impulso se activa de inmediato con tu primera sesión y suele completarse en 2 semanas. El Plan Llave en Mano, al requerir una fase profunda de estrategia, diseño y redacción, toma entre 4 y 6 semanas desde que nos entregas la información inicial."}, 
    {eventkey:"2", header:"3. Ya tengo una web, pero no me trae clientes. ¿Este servicio me sirve?", 
      body:"Sí, totalmente. La mayoría de las webs fallan porque son 'folletos digitales' que solo hablan de lo bueno que es el profesional, pero no conectan con los problemas del cliente. Nuestro enfoque no es estético; es estratégico. Rediseñamos tu estructura para que cada sección guíe al usuario directo al botón de contacto."}];

  return (
    <>
 
    <TopBar business_name="Rebecca Designs" link1="Home" link2="Reviews" link3="Contact" link5="Services"/>
<section id="CTA">
  <div className='CTA-container'>
<img src={webcta} alt="services_img"/>
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
   <img src={problem} alt="Problem_img" className="pro-image"/>
    </div>
   </section>
   <section id="services">
    <div className='options'>
      <h3 className="pro-title"> Recupera tu tiempo y tu enfoque: elige la opción ideal para delegar tu web hoy mismo </h3>
    <div className='pro-options-righ'>
      <Opt_Cards title=" Plan Llave en Mano (Diseño & Estrategia integral)" sub="Para el contratista que quiere delegar el 100% del
trabajo y recibir una web que facture desde el primer día." price="$1,200 USD (O 3 cuotas de $450 USD)"  text="¿Qué incluye?:
Estructura y diseño web 100% personalizado. Redacción persuasiva (Copywriting) de todas las secciones. Optimización SEO local para aparecer en Google. Integración de agenda automática y pasarela de pagos."/>
      </div>
    <div className='pro-options-left'>
      <Opt_Cards title="Plan Impulso (Consultoría y Plantilla)" sub="Para el profesional que quiere hacerlo bien, pero
tiene un presupuesto ajustado y busca guía experta." price="$450 USD (Pago único)" text="¿Qué incluye?:1 Sesión de estrategia de 90 minutos. Plantilla web optimizada para conversión (lista para rellenar). Revisión final de textos y diseño antes de lanzar. Soporte técnico por correo durante 30 días."/>
    </div>
    <div className="pro-btn">
     <Button  type="button" variant="success"> Agenda tu sesión estratégica gratuita
      </Button>  
      </div> 
</div>
</section>
<section id="reviews">
  <div className='review-section'>
  <Review_Card title="Rápido y claro" text="El equipo entendio rapidamente el problema, en una semana mi pagina web estaba funcionando." rating= {4}/>
  <Review_Card title="Buen Servicio" text="Se nota que hay preocupacion por dar un buen servicio. Los recomendare." rating= {5}/>
  <Review_Card title="Ok" text="Bueno, bonito y barato, aun que quizas no tan rápido como me gustaría." rating= {3}/>
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
