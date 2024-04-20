import {useState} from 'react';

export function useHooks() {
  const [accepted, setAccepted] = useState(false);
  const terms = [
    {
      id: 1,
      detail:
        "We don't sell or otherwise intentionally share your information with anyone. We take all commercially reasonable precautions to safeguard anything you share with us.",
    },
    {
      id: 2,

      detail:
        'The sole purpose of S’all Good is to help people stay connected and help promote public safety, especially for people living alone.',
    },
    {
      id: 3,

      detail:
        "We are not responsible if something bad happens to you or your loved one. We're not criminals - we're just an app.",
    },
    {
      id: 4,

      detail:
        "In the unfortunate event something bad does happen to the check-in recipient, you promise to not sue us, slander us, or otherwise attack us or hold us responsible. Again, we're just an app.",
    },
    {
      id: 5,

      detail:
        'We cannot replace the true connection of voice calls, video calls, or in-person visits. We can only provide extra peace of mind for you and your loved ones.',
    },
  ];
  return {accepted, setAccepted, terms};
}
