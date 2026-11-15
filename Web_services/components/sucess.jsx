import React from "react";
import { Link } from "react-router-dom";

function Success_sub() {
  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>Gracias!</h1>
      <p>Su mensaje ha sido enviado exitosamente. Prontamente nos pondremos en contacto.</p>
      <Link to="/">Volver a la página principal</Link>
    </div>
  );
}

export default Success_sub;