import Modal from 'react-modal';

import {} from './styles';

Modal.setAppElement('#root');

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  return (
    <Modal 
      isOpen={isOpen} // isOpen: true or false
      onRequestClose={onRequestClose} // close modal when user clicks outside of it or ESC key is pressed
    >
      <h2>Nova transação</h2>
    </Modal>
  )
}