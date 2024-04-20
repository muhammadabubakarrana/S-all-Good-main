import {useState} from 'react';

export function useHooks() {
  const [openLinkedRecipientModal, setOpenLinkedRecipientModal] =
    useState(false);

  const [openUnlinkContactModal, setOpenUnlinkContactModal] = useState(false);

  const HandleLinkedRecipientModal = () => {
    setOpenLinkedRecipientModal(!openLinkedRecipientModal);
  };

  const HandleUnlinkContactModal = () => {
    setOpenLinkedRecipientModal(false);
    setOpenUnlinkContactModal(!openUnlinkContactModal);
  };

  return {
    openLinkedRecipientModal,
    HandleLinkedRecipientModal,
    HandleUnlinkContactModal,
    openUnlinkContactModal,
    setOpenUnlinkContactModal,
  };
}
