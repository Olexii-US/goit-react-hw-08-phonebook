import styled from 'styled-components';
import { ImAddressBook } from 'react-icons/im';
import { Link } from 'react-router-dom';

export const HeaderBox = styled.header`
  padding-top: 10px;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  background: #333;
`;

export const NavBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 40px;
  border-bottom: 1px solid ${props => props.theme.colors.accentMain};
  height: 42px;
`;

export const Logo = styled(ImAddressBook)`
  padding-left: 40px;
  margin-right: 4px;
`;

export const LogoText = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.colors.nainLigth};
  font-size: 28px;
  font-weight: 500;
`;

export const LogoSpan = styled.span`
  color: ${props => props.theme.colors.accentMain};
`;
