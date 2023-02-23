import { NavLinkStyle } from './AuthNav.styled';

const AuthNav = () => {
  return (
    <div>
      <NavLinkStyle to="/register">Register</NavLinkStyle>{' '}
      <NavLinkStyle to="/login">Log In</NavLinkStyle>
    </div>
  );
};
export default AuthNav;
