import styled from 'styled-components';

export const UserMenuBox = styled.div`
  display: flex;
`;

export const UserInfo = styled.div`
  font-size: 18px;
  margin-right: 20px;
`;

export const UserSpan = styled.span`
  color: ${props => props.theme.colors.accentMain};
`;

export const LogoutBtn = styled.button`
  padding: 0px 16px;
  font-size: 16px;
  letter-spacing: 0.05em;

  background-color: transparent;
  color: ${props => props.theme.colors.nainLigth};
  border: 1px solid transparent;

  :hover,
  :focus {
    color: ${props => props.theme.colors.accentMain};
    text-shadow: 0px 6px 13px ${props => props.theme.colors.accentMain};
  }
`;
