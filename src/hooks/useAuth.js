import { useSelector } from 'react-redux';
import {
  selectUser,
  selectIsLoggedIn,
  selectIsRefreshing,
  selectIsAuthLoading,
} from 'redux/auth/authSelectors';

export const useAuth = () => {
  return {
    user: useSelector(selectUser),
    isLoggedIn: useSelector(selectIsLoggedIn),
    isRefreshing: useSelector(selectIsRefreshing),
    isAuthLoading: useSelector(selectIsAuthLoading),
  };
};
