import { useAuth } from 'hooks/useAuth';
import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <nav>
      <NavLink to="/" className={css.link}>
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts" className={css.link}>
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
export default Navigation;
