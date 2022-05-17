import { Container } from "./styles";

export function TransactionsTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="deposit">R$ 12000,00</td>
            <td>Desenvolvimento</td>
            <td>10/06/2020</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw">- R$ 2700,00</td>
            <td>Casa</td>
            <td>10/05/2020</td>
          </tr>          
        </tbody>
      </table>
    </Container>
  );
}