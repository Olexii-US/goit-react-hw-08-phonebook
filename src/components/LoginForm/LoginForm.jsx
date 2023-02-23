import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authThunk';
import { useAuth } from 'hooks/useAuth';
import {
  FormBox,
  FormLabel,
  FormInput,
  FormButton,
} from 'components/FormCommon.styled';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const resetForm = () => {
    setEmail('');
    setPassword('');
  };
  const { isAuthLoading } = useAuth();
  const dispatch = useDispatch();

  const hendleChange = ({ target: { name, value } }) => {
    switch (name) {
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
    dispatch(logIn({ email, password }));
    resetForm();
  };

  return (
    <FormBox autoComplete="off" onSubmit={handleSubmit}>
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
        Log In
      </FormButton>
    </FormBox>
  );
};

export default LoginForm;
