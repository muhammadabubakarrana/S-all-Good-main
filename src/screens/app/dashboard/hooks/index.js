import {useState} from 'react';

export function useHooks() {
  const [mode, setMode] = useState('Today');
  const [openCheckInInfoModal, setCheckInInfoModal] = useState(false);
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
  const HandleOpenCheckInModal = () => {
    setCheckInInfoModal(!openCheckInInfoModal);
  };

  const HandleMode = item => {
    setMode(item);
  };
  //data
  const data = [
    {
      id: 0,
      value: '4',
      status: 'Done',
    },
    {
      id: 1,
      value: '4',
      status: 'Pending',
    },
    {
      id: 2,
      value: '4',
      status: 'Missed',
    },
  ];
  return {
    mode,
    HandleMode,
    HandleOpenCheckInModal,
    openCheckInInfoModal,
    data,
    HandleNoResponseModal,
    openNoResponseModal,
    HandleResponseRecievedModal,
    openResponseRecievedModal,
  };
}
