import Modal from "react-modal";
import closeImg from "../../assets/close.svg";
import outcomeImg from "../../assets/outcome.svg";
import incomeImg from "../../assets/income.svg";
import { Container, TransactionTypeContainer, RadioButton } from "./styles";
import { useState } from "react";

Modal.setAppElement("#root");

interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionalModal({ isOpen, onRequestClose }: ModalProps) {
  const [type, setType] = useState("deposit");

  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >
        <button
          type="button"
          onClick={onRequestClose}
          className="react-modal-close"
        >
          <img src={closeImg} alt="Fechar" />
        </button>

        <Container>
          <h2>Cadastrar transação</h2>

          <input placeholder="Título" />
          <input placeholder="Valor" type="number" />
          <TransactionTypeContainer>
            <RadioButton
              type="button"
              onClick={() => setType("deposit")}
              isActive={type === "deposit"}
            >
              <img src={incomeImg} alt="Entrada" />
              <span>Entrada</span>
            </RadioButton>

            <RadioButton
              type="button"
              onClick={() => setType("withdraw")}
              isActive={type === "withdraw"}
            >
              <img src={outcomeImg} alt="Saída" />
              <span>Saída</span>
            </RadioButton>
          </TransactionTypeContainer>
          <input placeholder="Categoria" />

          <button type="submit">Cadastrar</button>
        </Container>
      </Modal>
    </>
  );
}
