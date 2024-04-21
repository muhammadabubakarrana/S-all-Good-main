import {useState} from 'react';

export function useHooks() {
  const [openResponseSentModal, setOpenResponseSentModal] = useState(false);

  const HandleResponseSentModal = () => {
    setOpenResponseSentModal(!openResponseSentModal);
  };

  return {
    openResponseSentModal,
    HandleResponseSentModal,
  };
}
