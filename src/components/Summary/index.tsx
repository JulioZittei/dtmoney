import { Container } from './styles';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';

export function Summary() {
  return (
    <Container>
      <div>
        <header>
          <h2>Receitas</h2>
          <img src={incomeImg} alt="Receitas" />
        </header>
        <strong>R$ 1000,00</strong>
      </div>
      <div>
        <header>
          <h2>Despesas</h2>
          <img src={outcomeImg} alt="Despesas" />
        </header>
        <strong>R$ 500,00</strong>
      </div>
      <div className="highlight-background">
        <header>
          <h2>Total</h2>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>R$ 500,00</strong>
      </div>
    </Container>
  );
}
