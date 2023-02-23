import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavLinkStyle = styled(NavLink)`
  font-size: 20px;
  text-decoration: none;
  margin: 0px 8px;
  color: ${props => props.theme.colors.nainLigth};

  :hover,
  :focus {
    color: ${props => props.theme.colors.accentMain};
    text-shadow: 0px 6px 13px ${props => props.theme.colors.accentText};
  }
  &.active {
    color: ${props => props.theme.colors.accentMain};
  }
`;