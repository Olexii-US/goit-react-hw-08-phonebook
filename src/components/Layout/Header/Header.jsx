import AuthNav from '../AuthNav/AuthNav ';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';

import css from './Header.module.css';

const Header = () => {
  return (
    <header className={css.header}>
      Header
      <Navigation />
      <UserMenu />
      <AuthNav />
    </header>
  );
};
export default Header;
