import {render, fireEvent, waitFor, screen} from '@testing-library/react'
import Adiciona from "./componentes/Adiciona/index";
import '@testing-library/jest-dom'
import App from "./App";

describe(Adiciona, () => {
  test("CT01- o valor do contador na inicialização deve ser igual a 0", () => {
    //dado que o contador foi inicializado
    render(<Adiciona />); //permite encontrar elementos dentro do DOM
    //quando consulto o valor do contador
    const valorContador = Number(screen.getByTestId("contador").textContent);
    //entao contador = 0
    expect(valorContador).toEqual(0);
  });

  test("CT02- o valor do contador deve incrementar de 1 no click do botao", () => {
    render(<Adiciona />);
    const btnIncrementa = screen.getByRole("button", { name: "Incremento" });
    fireEvent.click(btnIncrementa);
    const valorContador = Number(screen.getByTestId("contador").textContent);
    expect(valorContador).toEqual(1);
  });
    test("CT03 - na inicialização deve apresentar o titulo da pagina", () => {
    render(<App />);
    const label = screen.getByText("Fatec ZL");
    expect(label).toBeTruthy();
  });

});
