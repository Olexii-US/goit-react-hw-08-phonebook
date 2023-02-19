import { Link } from 'react-router-dom';

import css from './Home.module.css';
const Home = () => {
  return (
    <main>
      <h1>Welcome in Phone Book!</h1>
      <h2>An useful database app for managing your contacts.</h2>
      <p>
        Please{' '}
        <Link to="/register" className={css.link}>
          Register
        </Link>{' '}
        or{' '}
        <Link to="/login" className={css.link}>
          Log In
        </Link>{' '}
        to continue.
      </p>
      {/* <p>Welcome back USER</p> */}
    </main>
  );
};
export default Home;
