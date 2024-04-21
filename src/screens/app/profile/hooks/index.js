import {useState} from 'react';

export function useHooks() {
  const [openLogoutModal, setOpenLogoutModal] = useState(false);
  const HandleLogoutModal = () => {
    setOpenLogoutModal(!openLogoutModal);
  };
  return {HandleLogoutModal, openLogoutModal};
}
