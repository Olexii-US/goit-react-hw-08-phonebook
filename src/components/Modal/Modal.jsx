import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsThunk ';
import { useEffect } from 'react';
import { Overlay, ModalStyles, BtnList, FormButton } from './Modal.styled';

export const Modal = ({ id, closeModal }) => {
  const dispatch = useDispatch();

  const handleContactDelete = id => {
    dispatch(deleteContact(id));
    console.log(id);

    closeModal();
  };
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
      <ModalStyles>
        <p>Are you sure you want to delete this contact?</p>
        <BtnList>
          <li>
            <FormButton type="button" onClick={() => handleContactDelete(id)}>
              Yes
            </FormButton>
          </li>
          <li>
            <FormButton type="button" onClick={closeModal}>
              No
            </FormButton>
          </li>
        </BtnList>
      </ModalStyles>
    </Overlay>
  );
};

Modal.propTypes = {
  id: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};
