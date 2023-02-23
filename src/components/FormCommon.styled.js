import styled from 'styled-components';

export const FormBox = styled.form`
  display: flex;
  flex-direction: column;

  width: 300px;
  padding: 20px;
  margin-bottom: 16px;

  border: 1px solid ${props => props.theme.colors.accentMain};
`;

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  width: 280px;
  font-size: 20px;
`;

export const FormInput = styled.input`
  font-size: 16px;
  line-height: 1.5;
  margin-top: 8px;
  margin-bottom: 20px;

  border: 1px solid ${props => props.theme.colors.accentMain};
  border-radius: 3px;
  box-shadow: 0px 3px 1px rgba(76, 198, 255, 0.2),
    0px 1px 2px rgba(76, 198, 255, 0.2), 0px 2px 2px rgba(76, 198, 255, 0.18);

  background-color: ${props => props.theme.colors.nainLigth};

  :hover,
  :focus {
    /* border: 1px solid ${props => props.theme.colors.accentMain}; */
    box-shadow: 0 0 2px 0 rgba(76, 198, 255, 0.8) inset,
      0 0 2px 2px rgba(76, 198, 255, 0.8);
  }
`;

export const FormButton = styled.button`
  width: 120px;
  padding: 4px 0;
  font-size: 16px;
  letter-spacing: 0.05em;
  cursor: pointer;

  background-color: ${props => props.theme.colors.nainLigth};

  border: 1px solid transparent;
  border-radius: 3px;
  box-shadow: 0px 3px 1px rgba(76, 198, 255, 0.2),
    0px 1px 2px rgba(76, 198, 255, 0.2), 0px 2px 2px rgba(76, 198, 255, 0.18);
  :hover,
  :focus {
    background-color: ${props => props.theme.colors.accentBg};
    border: 1px solid ${props => props.theme.colors.accentBg};
    box-shadow: 0 0 2px 0 rgba(76, 198, 255, 0.8) inset,
      0 0 2px 2px rgba(76, 198, 255, 0.8);
  }
`;
