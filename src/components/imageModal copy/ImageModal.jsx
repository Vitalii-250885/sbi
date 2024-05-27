import ReactModal from "react-modal";
import Modal from "react-modal";

import css from "./ImageModal.module.css";

Modal.setAppElement("#root");

const ImageModal = ({ photo, modalIsOpen, closeModal }) => {
  return (
    <>
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className={css.modal}>
        <div className={css.backdrop} onClick={closeModal}>
          <div className={css.modal}>
            <img src={photo} alt="" className={css.image} />
          </div>
        </div>
      </ReactModal>
    </>
  );
};

export default ImageModal;
