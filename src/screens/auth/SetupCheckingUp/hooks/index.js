export function useHooks() {
  const DummyCheckIn = [
    {
      id: 0,
      heading: 'Morning Check-In',
      para: 'Check to ensure that Mom has taken her morning medications and is feeling well. Remind her to have breakfast and ask if she needs any assistance with her morning routine.',
      time: '10:00 AM',
      duration: '~30min',
    },
    {
      id: 1,
      heading: 'Evening Check-In',
      para: 'Confirm that Mom has had her dinner and taken her evening medications. Check if she needs help with any tasks before bedtime and reassure her of your availability for any assistance.',
      time: '7:00 PM',
      duration: '~30min',
    },
  ];
  return {DummyCheckIn};
}
