import {useState} from 'react';

export function useHooks() {
  const [openModal, setOpenModal] = useState(false);
  const bulletPoints = [
    {
      id: 1,
      name: 'Schedule up to 3 check-ins per day for 1 recipient',
    },
    {
      id: 2,
      name: 'Add 1 additional person to notice group (a spouse, sibling, etc.)',
    },
    {
      id: 3,
      name: 'Receive missed check-in alerts via email/app',
    },
    {
      id: 4,
      name: 'Priority support',
    },
  ];

  return {bulletPoints, openModal, setOpenModal};
}
