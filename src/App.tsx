import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';
import { createServer } from 'miragejs';
import Modal from 'react-modal';
import { useState } from 'react';

createServer({
  routes() {
    this.namespace = 'api';
    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: 'Desenvolvimento',
          amount: 1000,
          type: 'income',
          category: 'Trabalho',
          createdAt: new Date(),
        },
        {
          id: 2,
          title: 'Aluguel',
          amount: 500,
          type: 'outcome',
          category: 'Casa',
          createdAt: new Date(),
        },
      ];
    });
  },
});

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }
  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <Modal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal}>
        <h2>Cadastrar Transação</h2>
      </Modal>
      <GlobalStyle />
    </>
  );
}

export default App;
