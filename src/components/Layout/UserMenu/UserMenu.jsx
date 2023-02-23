import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authThunk';
import { UserSpan, UserMenuBox, UserInfo, LogoutBtn } from './UserMenu.styled';

const UserMenu = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();

  const onLogoutClick = () => {
    dispatch(logOut());
  };

  return (
    <UserMenuBox>
      <UserInfo>
        <p>
          Welcome <UserSpan>{user.name}</UserSpan>!
        </p>
        <p>{user.email}</p>
      </UserInfo>
      <LogoutBtn type="button" onClick={onLogoutClick}>
        Logout
      </LogoutBtn>
    </UserMenuBox>
  );
};
export default UserMenu;
