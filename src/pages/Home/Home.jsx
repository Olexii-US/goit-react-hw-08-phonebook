import { useAuth } from 'hooks/useAuth';

import {
  HeroHeader,
  Info,
  HomeText,
  LinkStyle,
  UserSpan,
} from './Home.styled';

// import bgImg from '../../book.png';

const Home = () => {
  const { isLoggedIn, user } = useAuth();

  return (
    <main>
      <HeroHeader>Welcome in Phone Book!</HeroHeader>
      {/* <img src={bgImg} width="1000px" alt="book" /> */}
      {isLoggedIn ? (
        <>
          <Info>
            An useful database app for managing your{' '}
            <LinkStyle to="/contacts">contacts</LinkStyle>.
          </Info>
          <HomeText>
            Welcome back <UserSpan>{user.name}</UserSpan>! Thank you for
            choosing our app!
          </HomeText>
        </>
      ) : (
        <>
          <Info>An useful database app for managing your contacts.</Info>
          <HomeText>
            Please <LinkStyle to="/register">Register</LinkStyle> or{' '}
            <LinkStyle to="/login">Log In</LinkStyle> to continue.
          </HomeText>
        </>
      )}
    </main>
  );
};
export default Home;
