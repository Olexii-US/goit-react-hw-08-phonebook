import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authThunk';

const UserMenu = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();

  const onLogoutClick = () => {
    dispatch(logOut());
  };

  return (
    <div>
      UserMenu
      <p>Welcome {user.name}!</p>
      <p>{user.email}</p>
      <button type="button" onClick={onLogoutClick}>
        Logout
      </button>
    </div>
  );
};
export default UserMenu;
