import { fireEvent, render } from "@testing-library/react";
import Adiciona from "./componentes/Adiciona/index";
import App from "./App";

describe(Adiciona, () => {
  test("CT01- o valor do contador na inicialização deve ser igual a 0", () => {
    //dado que o contador foi inicializado
    const { getByTestId  } = render(<Adiciona />); //permite encontrar elementos dentro do DOM
    //quando consulto o valor do contador
    const valorContador = Number(getByTestId("contador").textContent);
    //entao contador = 0
    expect(valorContador).toEqual(0);
  });

  test("CT02- o valor do contador deve incrementar de 1 no click do botao", () => {
    const { getByTestId, getByRole } = render(<Adiciona />);
    const btnIncrementa = getByRole("button", { name: "Incremento" });
    fireEvent.click(btnIncrementa);
    const valorContador = Number(getByTestId("contador").textContent);
    expect(valorContador).toEqual(1);
  });
    test("CT03 - na inicialização deve apresentar o titulo da pagina", () => {
    const { getByText } = render(<App />);
    expect(getByText("Fatec ZL")).toBeTruthy();
  });

});
