import { useState } from 'react';
import Modal from 'react-modal'


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

export const CalendarModal = () => {

  const [isModalOpen, setIsModalOpen] = useState(true);

  const onCloseModel = () => {
    setIsModalOpen(!isModalOpen);
  }
  return (
    <Modal isOpen={isModalOpen}
    onRequestClose={onCloseModel}
    style={customStyles}
    className="modal"
    overlayClassName="modal-fondo"
    closeTimeoutMS={200}
    >
      <h1>Hola mundo</h1>
      <hr />
      <p>Hola</p>
    </Modal>
  )
}
