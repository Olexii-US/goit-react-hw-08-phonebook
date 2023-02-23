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
    text-shadow: 0px 6px 13px ${props => props.theme.colors.accentText};
  }

  /* background-color: ${props => props.theme.colors.nainLigth};
  border: 1px solid transparent;
  border-radius: 2px;
  box-shadow: 0px 3px 1px rgba(76, 198, 255, 0.2),
    0px 1px 2px rgba(76, 198, 255, 0.2), 0px 2px 2px rgba(76, 198, 255, 0.18); */
  /* :hover,
  :focus {
    background-color: ${props => props.theme.colors.accentBg};
    border: 1px solid ${props => props.theme.colors.accentBg};
    box-shadow: 0 0 2px 0 rgba(76, 198, 255, 0.8) inset,
      0 0 2px 2px rgba(76, 198, 255, 0.8);
  } */
`;
