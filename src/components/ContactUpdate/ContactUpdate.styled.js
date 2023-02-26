import styled from 'styled-components';

export const FormEditBox = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 340px;
  padding: 20px;

  border: 1px solid ${props => props.theme.colors.accentMain};
`;

export const EditButtonBox = styled.div`
  display: flex;
`;

export const FormEditButton = styled.button`
  width: 120px;
  padding: 4px 0;
  font-size: 16px;
  letter-spacing: 0.05em;
  cursor: pointer;

  margin: 0px 28px;

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
