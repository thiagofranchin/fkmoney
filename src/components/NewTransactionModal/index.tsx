import Modal from 'react-modal';
import closeImg from '../../assets/close.svg';
import { Container } from './styles';

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
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button type='button' onClick={onRequestClose} className="react-modal-close">
        <img src={closeImg} alt="Fechar modal" />
      </button>
      <Container>
        <h2>Nova transação</h2>

        <input 
          placeholder="Título"
        />

        <input type="number"
          placeholder="Valor"
        />

        <input 
          placeholder="Categoria"
        />

        <button type="submit">
          Cadastrar
        </button>

      </Container>
    </Modal>
  )
}