import {useState} from 'react';

export function useHooks() {
  const [openTestCheckInModal, setOpenTestCheckInModal] = useState(false);
  const [show, setShow] = useState(false);

  const HandleTestCheckInModal = () => {
    setOpenTestCheckInModal(!openTestCheckInModal);
  };
  const HandleShow = () => {
    setShow(!show);
  };

  return {
    // DummyCheckIn,
    HandleTestCheckInModal,
    openTestCheckInModal,
    HandleShow,
    show,
  };
}
