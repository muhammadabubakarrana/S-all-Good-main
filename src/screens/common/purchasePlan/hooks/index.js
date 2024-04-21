import {useState} from 'react';
import {goBack} from '../../../../navigation/rootNavigation';

export function useHooks() {
  const [openModal, setOpenModal] = useState(false);
  const HandleOpenModal = () => {
    setOpenModal(!openModal);
  };
  const HandleTwoScreensGoBack = () => {
    goBack();
    goBack();
  };

  return {openModal, setOpenModal, HandleOpenModal, HandleTwoScreensGoBack};
}
