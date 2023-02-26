import PropTypes from 'prop-types';

import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { selectIsLoading } from 'redux/contactsSelector';
import { PopUpDeletel } from 'components/PopUpDelete/PopUpDelete';
import { ContactUpdate } from '../ContactUpdate/ContactUpdate';

import {
  ListBox,
  ListItem,
  ListText,
  DeleteBtn,
  TelSvg,
  TelLink,
  TelContainer,
} from './ContactListElement.styled';
import { MdDeleteForever } from 'react-icons/md';
import { FaUserEdit } from 'react-icons/fa';

import { ModalBase } from '../ModalBase/ModalBase';

export const ContactListElement = ({ name, number, id }) => {
  const [userId, setUserId] = useState('');
  const [btnName, setBtnName] = useState(null);

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
    setBtnName(e.currentTarget.name);
    setUserId(id);
  };

  return (
    <>
      <ListItem>
        <ListBox>
          {/* <TelContainer>
            <ListText>
              {name} :
              <TelLink href={`tel:${number}`}>
                <TelSvg />
                {number}
              </TelLink>
            </ListText>
          </TelContainer> */}

          <TelContainer>
            <ListText>{name} :</ListText>
            <TelLink href={`tel:${number}`}>
              <TelSvg />
              {number}
            </TelLink>
          </TelContainer>

          <div>
            <DeleteBtn
              type="button"
              onClick={btnHendler}
              disabled={isLoading}
              name="edit"
            >
              <FaUserEdit />
            </DeleteBtn>
            <DeleteBtn
              type="button"
              onClick={btnHendler}
              disabled={isLoading}
              name="delete"
            >
              <MdDeleteForever />
            </DeleteBtn>
          </div>
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
