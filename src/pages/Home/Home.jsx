import { useAuth } from 'hooks/useAuth';
import { Link } from 'react-router-dom';

import bgImg from '../../book.png';

import css from './Home.module.css';
const Home = () => {
  const { isLoggedIn, user } = useAuth();

  return (
    <main className={css.main}>
      <h1>Welcome in Phone Book!</h1>
      {/* <img src={bgImg} width="1000px" alt="book" /> */}
      {isLoggedIn ? (
        <>
          <h2>
            An useful database app for managing your{' '}
            <Link to="/contacts" className={css.link}>
              contacts
            </Link>
            .
          </h2>
          <p>
            Welcome back <b>{user.name}</b>! Thank you for choosing our app!
          </p>
        </>
      ) : (
        <>
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
        </>
      )}
    </main>
  );
};
export default Home;
