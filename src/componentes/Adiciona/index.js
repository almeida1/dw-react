import { useState } from "react";

export default function Adiciona() {
  const valorInicial = 0;

  const [contador, setContador] = useState(valorInicial);
  const increment = () => {
    setContador((prev) => prev + 1);
  };
  const decrement = () => {
    setContador((prev) => prev - 1);
  };
  const restart = () => {
    setContador(0);
  };
  return (
    <div>
      <h1>
        {/* define um rotulo para identificar a variavel que deve ser validada */}
        Contador: <div><h5 data-testid="contador">{contador}</h5></div>
      </h1>
      <div>
        <button name="incremento" onClick={increment}>
              Incremento
        </button>
        <button onClick={decrement}> Decremento </button>
        <button onClick={restart}> Reset </button>
      </div>
    </div>
  );
}
