import { useAuth } from 'hooks/useAuth';
import AuthNav from '../AuthNav/AuthNav ';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';

import { HeaderBox, NavBox, Logo, LogoText, LogoSpan } from './Header.styled';

const Header = () => {
  const { isLoggedIn } = useAuth();
  return (
    <HeaderBox>
      <LogoText to="/">
        <Logo /> Phone<LogoSpan>Book</LogoSpan>
      </LogoText>
      <NavBox>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </NavBox>
    </HeaderBox>
  );
};
export default Header;
