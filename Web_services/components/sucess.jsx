import React from "react";
import { Link } from "react-router-dom";

function Success_sub() {
  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>Thank You!</h1>
      <p>Your message has been sent successfully. We will get back to you soon.</p>
      <Link to="/">Go back home</Link>
    </div>
  );
}

export default Success_sub;