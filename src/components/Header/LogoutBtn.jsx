import React from 'react';
import { useDispatch } from 'react-redux';
import authService from '../../appwrite/auth';
import { logout } from '../../store/authSlice';

function LogoutBtn() {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    authService.logout().then(() => {
      dispatch(logout());
    });
  };

  return (
    <button
      onClick={logoutHandler}
      className="
        px-5 py-2
        bg-gray-900
        text-white font-semibold
        rounded-full
        hover:bg-purple-700
        transition
        duration-300
        shadow-md
        focus:outline-none
        focus:ring-2 focus:ring-purple-600
      "
    >
      Logout
    </button>
  );
}

export default LogoutBtn;
