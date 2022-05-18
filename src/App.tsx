import { useState } from 'react';
import Modal from 'react-modal';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';

import { GlobalStyle } from './styles/global';

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleNewTransactionModalOpen() {
    setIsNewTransactionModalOpen(true);
  }

  function handleNewTransactionModalClose() {
    setIsNewTransactionModalOpen(false);
  }
  
  return (
    <>
      <Header onOpenNewTransactionModal={handleNewTransactionModalOpen} />
      <Dashboard />
      <Modal 
        isOpen={isNewTransactionModalOpen} 
        onRequestClose={handleNewTransactionModalClose} // close modal when user clicks outside of it or ESC key is pressed
      >
        <h2>Nova transação</h2>
      </Modal>
      <GlobalStyle />
    </>
  );
}
