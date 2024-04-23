import {useState} from 'react';
import {navigate} from '../../../../navigation/rootNavigation';
import {routes} from '../../../../services';

export function useHooks() {
  const [mode, setMode] = useState('Today');
  const [openCheckInInfoModal, setCheckInInfoModal] = useState(false);
  const [openNoResponseModal, setOpenNoResponseModal] = useState(false);
  const [openResponseRecievedModal, setOpenResponseRecievedModal] =
    useState(false);

  const HandleNoResponseModal = () => {
    setOpenNoResponseModal(!openNoResponseModal);
  };
  const GoToCheckInSchedule = () => {
    setCheckInInfoModal(false);
    navigate(routes.CheckInSchedule);
  };
  const HandleResponseRecievedModal = () => {
    setOpenNoResponseModal(false);
    setOpenResponseRecievedModal(!openResponseRecievedModal);
    setTimeout(() => {
      setOpenResponseRecievedModal(false);
    }, 2000);
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
    GoToCheckInSchedule,
  };
}
