import {useState} from 'react';

export function useHooks() {
  const [openNoResponseModal, setOpenNoResponseModal] = useState(false);
  const [openResponseRecievedModal, setOpenResponseRecievedModal] =
    useState(false);

  const HandleNoResponseModal = () => {
    setOpenNoResponseModal(!openNoResponseModal);
  };
  const HandleResponseRecievedModal = () => {
    setOpenNoResponseModal(false);
    setOpenResponseRecievedModal(!openResponseRecievedModal);
  };

  return {
    HandleNoResponseModal,
    openNoResponseModal,
    HandleResponseRecievedModal,
    openResponseRecievedModal,
  };
}
