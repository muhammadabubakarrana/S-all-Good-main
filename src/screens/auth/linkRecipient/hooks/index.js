import {useState} from 'react';

export function useHooks() {
  const [openInviteViaEmailModal, setOpenInviteViaEmailModal] = useState(false);
  const [openLinkRequestModal, setOpenLinkRequestModal] = useState(false);
  const [openInviteSentModal, setOpenInviteSentModal] = useState(false);

  const HandleInviteViaEmailModal = () => {
    setOpenInviteViaEmailModal(!openInviteViaEmailModal);
  };
  const HandleLinkRequestModal = () => {
    setOpenLinkRequestModal(!openLinkRequestModal);
  };
  const HandleInviteSentModal = () => {
    setOpenInviteViaEmailModal(false);
    setOpenInviteSentModal(true);
    setTimeout(() => {
      setOpenInviteSentModal(false);
    }, 2000);
  };
  return {
    openInviteViaEmailModal,
    setOpenInviteViaEmailModal,
    openLinkRequestModal,
    setOpenLinkRequestModal,
    HandleInviteViaEmailModal,
    HandleLinkRequestModal,
    HandleInviteSentModal,
    openInviteSentModal,
    setOpenInviteSentModal,
  };
}
