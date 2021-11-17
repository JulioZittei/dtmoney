import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';
import { createServer } from 'miragejs';

createServer({
  routes() {
    this.namespace = 'api';
    this.get('/transactions', () => {
      return {
        id: 1,
        title: 'Desenvolvimento',
        amount: 1000,
        type: 'income',
        category: 'Trabalho',
        createdAt: new Date(),
      };
    });
  },
});

export function App() {
  return (
    <>
      <Header />
      <Dashboard />
      <GlobalStyle />
    </>
  );
}

export default App;
