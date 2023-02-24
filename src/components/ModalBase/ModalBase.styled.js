import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 1200;
`;

export const ModalStyles = styled.div`
  background-color: ${props => props.theme.colors.nainLigth};
  margin: auto;
  padding: 24px 20px;
  /* width: 50%; */
  box-shadow: 0 0 2px 0 rgba(76, 198, 255, 0.8) inset,
    0 0 2px 2px rgba(76, 198, 255, 0.8);
  z-index: 15;

  color: black;
  font-size: 20px;
  font-weight: 600;
`;

export const BtnList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;

  margin-top: 16px;
`;

export const FormButton = styled.button`
  width: 120px;
  padding: 4px 0;
  font-size: 16px;
  letter-spacing: 0.05em;
  cursor: pointer;

  color: ${props => props.theme.colors.nainLigth};
  background-color: ${props => props.theme.colors.accentMain};

  border: 1px solid transparent;
  border-radius: 3px;
  box-shadow: 0px 3px 1px rgba(76, 198, 255, 0.2),
    0px 1px 2px rgba(76, 198, 255, 0.2), 0px 2px 2px rgba(76, 198, 255, 0.18);
  :hover,
  :focus {
    color: black;
    background-color: ${props => props.theme.colors.accentBg};
    border: 1px solid ${props => props.theme.colors.accentBg};
    box-shadow: 0 0 2px 0 rgba(76, 198, 255, 0.8) inset,
      0 0 2px 2px rgba(76, 198, 255, 0.8);
  }
`;
