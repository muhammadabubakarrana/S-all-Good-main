import {useState} from 'react';
import {navigate} from '../../../../navigation/rootNavigation';
import {routes} from '../../../../services';

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
  const HandleBackToSetupCheckingUp = () => {
    navigate(routes.SetupCheckingUp);
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
    HandleBackToSetupCheckingUp,
  };
}
