import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { Overlay, ModalStyles } from './ModalBase.styled';

export const ModalBase = ({ closeModal, children }) => {
  //////////ESC close///////////
  useEffect(() => {
    const handleEscape = e => {
      if (e.code === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleEscape);

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [closeModal]);
  //////////Backdrop close///////////
  const handleBackdrop = e => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <Overlay onClick={handleBackdrop}>
      <ModalStyles>{children}</ModalStyles>
    </Overlay>
  );
};

ModalBase.propTypes = {
  closeModal: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
