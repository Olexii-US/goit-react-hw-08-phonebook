import PropTypes from 'prop-types';

import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { selectIsLoading } from 'redux/contactsSelector';
import { PopUpDeletel } from 'components/Modal/PopUpDeletel';
import { ContactUpdate } from '../ContactUpdate/ContactUpdate';
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
  //////////////////////edit//////////
  const [btnName, setBtnName] = useState(null);

  // const setId = id => {
  //   setUserId(id);
  // };

  const isLoading = useSelector(selectIsLoading);

  const closeModal = () => {
    setUserId('');
    setBtnName(null);
    document.body.style.overflow = 'unset';
  };
  ///////////prevent scroll
  useEffect(() => {
    if (userId) {
      document.body.style.overflow = 'hidden';
    }
  }, [userId]);

  const btnHendler = e => {
    setBtnName(e.target.name);
    setUserId(id);
  };

  return (
    <>
      <ListItem>
        <ListBox>
          <ListText>
            {name} : {number}
          </ListText>
          <DeleteBtn
            type="button"
            onClick={btnHendler}
            disabled={isLoading}
            name="edit"
          >
            Edit
          </DeleteBtn>
          <DeleteBtn
            type="button"
            onClick={btnHendler}
            disabled={isLoading}
            name="delete"
          >
            Delete
          </DeleteBtn>
        </ListBox>
      </ListItem>
      {/* {userId && <Modal id={userId} closeModal={closeModal} />} */}

      {/* {userId && btnName === 'edit' && (
        <ModalBase closeModal={closeModal}>
          <ContactUpdate id={userId} closeModal={closeModal} />
        </ModalBase>
      )}
      {userId && btnName === 'delete' && (
        <ModalBase closeModal={closeModal}>
          <PopUpDeletel id={userId} closeModal={closeModal} />
        </ModalBase>
      )} */}

      {userId && (
        <ModalBase closeModal={closeModal}>
          {btnName === 'edit' ? (
            <ContactUpdate id={userId} closeModal={closeModal} />
          ) : (
            <PopUpDeletel id={userId} closeModal={closeModal} />
          )}
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
