import {useRef, useState} from 'react';
import {appSvgs, routes} from '../../../../services';
import {Dimensions} from 'react-native';
import {navigate} from '../../../../navigation/rootNavigation';

export function useHooks() {
  //hooks
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const FlatListRef = useRef();
  //functions
  const {width, height} = Dimensions.get('window');
  const updateCurrentSlideIndex = e => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };
  const goToNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex != slides.length) {
      const offset = nextSlideIndex * width;
      FlatListRef?.current.scrollToOffset({offset});
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };
  const goToCreateAccount = () => {
    navigate(routes.createAccount);
  };
  const goToPreviousSlide = () => {
    const previousSlideIndex = currentSlideIndex - 1;
    if (previousSlideIndex >= 0) {
      const offset = previousSlideIndex * width;
      FlatListRef?.current.scrollToOffset({offset});
      setCurrentSlideIndex(previousSlideIndex);
    }
  };

  //data
  const slides = [
    {
      id: 1,
      image: appSvgs.Onboarding_Three,
      title: 'Get Started',
      subtitle: 'Stay Connected with Loved Ones',
      para: 'You can schedule regular check-ins for your family members, friends or your loved ones, ensuring their safety and well-being. Receive instant alerts if a check-in is missed, allowing you to take prompt action when needed.',
    },
    {
      id: 2,
      image: appSvgs.Onboarding_Two,
      title: 'Peace of Mind',
      subtitle: 'Direct Communication at Your Fingertips',
      para: "Reach out to your loved ones with just a tap, ensuring help is always within reach. With S'all Good, you're never far from ensuring the safety and security of those who matter most.",
    },
    {
      id: 3,
      image: appSvgs.Onboarding_One,
      title: 'Simplify Your Safety Routine',
      subtitle: 'Easy Account Management',
      para: "Link multiple family members' accounts for seamless monitoring and management. Customize notification preferences & manage your profile effortlessly, ensuring peace of mind for you & your family.",
    },
  ];
  return {
    goToNextSlide,
    goToPreviousSlide,
    updateCurrentSlideIndex,
    currentSlideIndex,
    setCurrentSlideIndex,
    FlatListRef,
    slides,
    width,
    height,
    goToCreateAccount,
  };
}
