import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsThunk ';
import { BtnList, FormButton } from './Modal.styled';

export const PopUpDeletel = ({ id, closeModal }) => {
  const dispatch = useDispatch();

  const handleContactDelete = id => {
    dispatch(deleteContact(id));
    closeModal();
  };

  return (
    <>
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
    </>
  );
};

PopUpDeletel.propTypes = {
  id: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};
