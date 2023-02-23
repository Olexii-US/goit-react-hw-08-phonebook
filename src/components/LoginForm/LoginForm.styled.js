import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LinkStyle = styled(Link)`
  text-decoration: none;
  font-size: 14px;

  color: ${props => props.theme.colors.nainLigth};

  :hover,
  :focus {
    color: ${props => props.theme.colors.accentMain};
    text-shadow: 0px 6px 13px ${props => props.theme.colors.accentText};
  }
`;

export const BtnBox = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  padding-right: 60px;
`;
