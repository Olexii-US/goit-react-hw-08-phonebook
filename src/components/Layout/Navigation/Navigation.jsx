import { useAuth } from 'hooks/useAuth';

import { NavLinkStyle } from './Navigation.styled';

const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <nav>
      <NavLinkStyle to="/">Home</NavLinkStyle>
      {isLoggedIn && <NavLinkStyle to="/contacts">Contacts</NavLinkStyle>}
    </nav>
  );
};
export default Navigation;
