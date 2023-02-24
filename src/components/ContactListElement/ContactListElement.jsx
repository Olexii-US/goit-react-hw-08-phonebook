import PropTypes from 'prop-types';

import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { selectIsLoading } from 'redux/contactsSelector';
import { PopUpDeletel } from 'components/Modal/PopUpDeletel';
import {
  ListBox,
  ListItem,
  ListText,
  DeleteBtn,
} from './ContactListElement.styled';
///////////
import { ModalBase } from '../ModalBase/ModalBase';
///////////////
export const ContactListElement = ({ name, number, id }) => {
  const [userId, setUserId] = useState('');

  const setId = id => {
    setUserId(id);
  };

  const isLoading = useSelector(selectIsLoading);

  const closeModal = () => {
    setUserId('');
    document.body.style.overflow = 'unset';
  };
  ///////////prevent scroll
  useEffect(() => {
    if (userId) {
      document.body.style.overflow = 'hidden';
    }
  }, [userId]);

  return (
    <>
      <ListItem>
        <ListBox>
          <ListText>
            {name} : {number}
          </ListText>
          <DeleteBtn
            type="button"
            onClick={() => setId(id)}
            disabled={isLoading}
          >
            Delete
          </DeleteBtn>
        </ListBox>
      </ListItem>
      {/* {userId && <Modal id={userId} closeModal={closeModal} />} */}

      {userId && (
        <ModalBase closeModal={closeModal}>
          <PopUpDeletel id={userId} closeModal={closeModal} />
        </ModalBase>
      )}
    </>
  );
};

ContactListElement.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
