import React, { useState } from "react";

function Total() {
  const [resultado, setResultado] = useState();

  function calcular() {
    let n = Number(prompt("Quantas maçãs voce deseja?"));
    let menosDe12 = n * 0.3;
    let maisDe12 = n * 0.25;
    if (n < 6) {
      setResultado("O valor da sua compra é: " + menosDe12);
    } else {
      setResultado("O valor da sua compra è: " + maisDe12);
    }
  }

  return (
    <div className="Maçãs">
      <h2>Maçãs</h2>
      <button onClick={calcular}>Calcular preço</button>
      <p>{resultado}</p>
    </div>
  );
}

export default Total;
