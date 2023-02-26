import styled from 'styled-components';
import { BsFillTelephoneFill } from 'react-icons/bs';

export const ListItem = styled.li`
  margin-left: 12px;
  ::marker {
    color: ${props => props.theme.colors.accentMain};
  }
`;

export const ListBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* flex-wrap: wrap; */

  margin-top: 6px;
`;

export const ListText = styled.p`
  margin: 0;
  max-width: 100%;
  /* max-width: 290px; */
`;
export const TelContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 250px;
`;

export const TelLink = styled.a`
  text-decoration: none;
  color: ${props => props.theme.colors.nainLigth};
  :hover,
  :focus {
    color: ${props => props.theme.colors.accentMain};
  }
`;

export const TelSvg = styled(BsFillTelephoneFill)`
  margin-left: 8px;
  color: ${props => props.theme.colors.accentMain};
`;

export const DeleteBtn = styled.button`
  padding: 2px 2px;
  font-size: 26px;
  color: ${props => props.theme.colors.nainLigth};

  background-color: transparent;
  border: none;
  margin-left: 14px;

  :hover,
  :focus {
    color: ${props => {
      if (props.name === 'delete') {
        return 'red';
      } else return props => props.theme.colors.accentBg;
    }};
    scale: 1.5;
  }
`;

//////////// style for bth
// export const DeleteBtn = styled.button`
//   padding: 2px 12px;
//   font-size: 14px;
//   letter-spacing: 0.05em;

//   background-color: ${props => props.theme.colors.nainLigth};
//   border: 1px solid transparent;
//   border-radius: 2px;
//   box-shadow: 0px 3px 1px rgba(76, 198, 255, 0.2),
//     0px 1px 2px rgba(76, 198, 255, 0.2), 0px 2px 2px rgba(76, 198, 255, 0.18);
//   :hover,
//   :focus {
//     background-color: ${props => props.theme.colors.accentBg};
//     border: 1px solid ${props => props.theme.colors.accentBg};
//     box-shadow: 0 0 2px 0 rgba(76, 198, 255, 0.8) inset,
//       0 0 2px 2px rgba(76, 198, 255, 0.8);
//   }
// `;
