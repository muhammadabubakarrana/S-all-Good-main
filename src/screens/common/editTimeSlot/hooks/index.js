import {useState} from 'react';

export function useHooks() {
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const HandleDeleteModal = () => {
    setOpenDeleteModal(!openDeleteModal);
  };
  return {openDeleteModal, HandleDeleteModal};
}
