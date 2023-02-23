import PropTypes from 'prop-types';

import { deleteContact } from 'redux/contactsThunk ';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/contactsSelector';

import {
  ListBox,
  ListItem,
  ListText,
  DeleteBtn,
} from './ContactListElement.styled';

export const ContactListElement = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  const handleContactDelete = () => dispatch(deleteContact(id));

  return (
    <ListItem>
      <ListBox>
        <ListText>
          {name} : {number}
        </ListText>
        <DeleteBtn
          type="button"
          onClick={handleContactDelete}
          disabled={isLoading}
        >
          Delete
        </DeleteBtn>
      </ListBox>
    </ListItem>
  );
};

ContactListElement.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
