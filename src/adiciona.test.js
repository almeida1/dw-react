import {render, fireEvent, screen} from '@testing-library/react'
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
  test("CT02- deve utilizar o estilo classe button", () => {
    render(<Adiciona />);
    const btnIncrementa = screen.getByRole("button", { name: "Incremento" });
    expect(btnIncrementa).toHaveClass("button");
  });
  test("CT03- deve conter o botao incremento", () => {    
    render(<Adiciona />);
    //qualifico o botao a ser pesquisado ou posso usar getAllByRole
    //uso de regex ignora maiuscula
    const btnIncrementa = screen.getByRole("button", { name: /incremento/i }); 
    expect(btnIncrementa).toBeInTheDocument();
  });

  test("CT04- o valor do contador deve incrementar de 1 no click do botao", () => {
    render(<Adiciona />);
    const btnIncrementa = screen.getByRole("button", { name: "Incremento" });
    fireEvent.click(btnIncrementa);
    const valorContador = Number(screen.getByTestId("contador").textContent);
    expect(valorContador).toEqual(1);
  });
  test("CT05 - o valor do contador deve decrementar de 1 no click do botao", () => {
    render(<Adiciona />);
    const btnDecrementa = screen.getByText("Decremento");
    fireEvent.click(btnDecrementa);
    const valorContador = Number(screen.getByTestId("contador").textContent);
    expect(valorContador).toEqual(-1);
  });
  test("CT06 - na inicialização deve apresentar o titulo da pagina", () => {
    render(<App />);
    const label = screen.getByText("Fatec ZL");
    expect(label).toBeTruthy();
  });

});
