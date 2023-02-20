import { useAuth } from 'hooks/useAuth';
import AuthNav from '../AuthNav/AuthNav ';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';

import css from './Header.module.css';

const Header = () => {
  const { isLoggedIn } = useAuth();
  return (
    <header className={css.header}>
      Header
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
export default Header;
