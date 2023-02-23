import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MainHome = styled.main`
  /* margin-bottom: 80px; */
  /* width: 1280px; */
  /* background-image: url('../../book.png'); */
  /* background-repeat: no-repeat; */
  /* background-size: contain; */
  /* background-size: 50%; */
`;

export const HeroHeader = styled.h1`
  margin-top: 40px;
`;

export const Info = styled.h2`
  margin-top: 20px;
  font-weight: 600;
`;

export const HomeText = styled.p`
  margin-top: 20px;
  font-size: 20px;
`;

export const LinkStyle = styled(Link)`
  text-decoration: none;

  color: ${props => props.theme.colors.accentMain};

  :hover,
  :focus {
    color: ${props => props.theme.colors.accentMain};
    text-shadow: 0px 6px 13px ${props => props.theme.colors.accentText};
  }
`;
export const UserSpan = styled.span`
  color: ${props => props.theme.colors.accentMain};
  font-weight: 600;
  letter-spacing: 1.7px;
`;
