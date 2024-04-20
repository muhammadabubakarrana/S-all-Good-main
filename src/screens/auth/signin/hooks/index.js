import {useState} from 'react';
import {navigate} from '../../../../navigation/rootNavigation';
import {routes} from '../../../../services';

export function useHooks() {
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [accepted, setAccepted] = useState(false);
  const [openResetPassModal, setOpenResetPassModal] = useState(false);

  const handleLogin = (email, password) => {
    navigate(routes.app);
  };

  return {
    handleLogin,
    confirmPasswordVisible,
    setConfirmPasswordVisible,
    accepted,
    setAccepted,
    openResetPassModal,
    setOpenResetPassModal,
  };
}
