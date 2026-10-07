import React, { useState } from "react";

function Pousada() {
  const [resultado, setResultado] = useState("");

  function juca() {
    let dias = Number(prompt("Quantos dias?"));
    let diaria;

    if (dias <= 5) {
      diaria = 100;
    } else if (dias <= 10) {
      diaria = 90;
    } else {
      diaria = 80;
    }

    let total = dias * diaria;

    total = total * 0.9;
    total = total * 0.85;
    total = total + 150;

    setResultado("Total: R$ " + total.toFixed(2));
  }

  return (
    <div>
      <h2>Pousada</h2>
      <button onClick={juca}>Calcular</button>

      <p>{resultado}</p>
    </div>
  );
}

export default Pousada;
