import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authThunk';
import { useAuth } from 'hooks/useAuth';
import {
  FormBox,
  FormLabel,
  FormInput,
  FormButton,
} from 'components/FormCommon.styled';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const resetForm = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  const { isAuthLoading } = useAuth();

  const dispatch = useDispatch();

  const hendleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(register({ name, email, password }));
    resetForm();
  };

  return (
    <FormBox autoComplete="off" onSubmit={handleSubmit}>
      <FormLabel>
        User Name
        <FormInput
          type="text"
          name="name"
          value={name}
          onChange={hendleChange}
        />
      </FormLabel>
      <FormLabel>
        Email
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={hendleChange}
        />
      </FormLabel>
      <FormLabel>
        Password
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={hendleChange}
        />
      </FormLabel>
      <FormButton type="submit" disabled={isAuthLoading}>
        Register
      </FormButton>
    </FormBox>
  );
};

export default RegisterForm;
