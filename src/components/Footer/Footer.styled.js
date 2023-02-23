import styled from 'styled-components';

export const FooterBox = styled.footer`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background: #333;

  padding: 8px;
  text-align: center;

  border-top: 1px solid ${props => props.theme.colors.accentMain};
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px -4px 5px 0px rgba(0, 0, 0, 0.14), 0px -1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const AccentName = styled.span`
  color: ${props => props.theme.colors.accentMain};
  margin-left: 6px;
  margin-right: 10px;
`;

export const SocialLink = styled.a`
  text-decoration: none;
  margin-left: 10px;

  color: ${props => props.theme.colors.nainLigth};

  :hover,
  :focus {
    color: ${props => props.theme.colors.accentMain};
    text-shadow: 0px 6px 13px ${props => props.theme.colors.accentText};
  }
`;
