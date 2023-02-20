import { useState } from 'react';
import css from 'components/FormCommon.module.css';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authThunk';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const resetForm = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

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
    <form autoComplete="off" onSubmit={handleSubmit} className={css.form}>
      <label className={css.formLabel}>
        User Name
        <input
          type="text"
          name="name"
          value={name}
          onChange={hendleChange}
          className={css.formInput}
        />
      </label>
      <label className={css.formLabel}>
        Email
        <input
          type="email"
          name="email"
          value={email}
          onChange={hendleChange}
          className={css.formInput}
        />
      </label>
      <label className={css.formLabel}>
        Password
        <input
          type="password"
          name="password"
          value={password}
          onChange={hendleChange}
          className={css.formInput}
        />
      </label>
      <button
        type="submit"
        className={css.formButton}
        // disabled={isLoading}
      >
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
