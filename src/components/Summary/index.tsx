import { Container } from './styles';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import { useTransactions } from '../../hooks/useTransactions';

export function Summary() {
  const { transactions } = useTransactions();

  const summary = transactions.reduce(
    (prevValue, currentTransaction) => {
      if (currentTransaction.type === 'income') {
        prevValue.incomes += currentTransaction.amount;
        prevValue.total += currentTransaction.amount;
      } else {
        prevValue.outcomes -= currentTransaction.amount;
        prevValue.total -= currentTransaction.amount;
      }

      return prevValue;
    },
    {
      incomes: 0,
      outcomes: 0,
      total: 0,
    },
  );

  return (
    <Container>
      <div>
        <header>
          <h2>Receitas</h2>
          <img src={incomeImg} alt="Receitas" />
        </header>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(summary.incomes)}
        </strong>
      </div>
      <div>
        <header>
          <h2>Despesas</h2>
          <img src={outcomeImg} alt="Despesas" />
        </header>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(summary.outcomes)}
        </strong>
      </div>
      <div className="highlight-background">
        <header>
          <h2>Total</h2>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(summary.total)}
        </strong>
      </div>
    </Container>
  );
}
