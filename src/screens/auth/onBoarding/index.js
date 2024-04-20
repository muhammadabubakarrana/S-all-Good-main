import React from 'react';
import {
  Wrapper,
  Text,
  StatusBars,
  Spacer,
  Buttons,
  Icons,
  RowButton,
} from '../../../components';
import {
  colors,
  fontSizes,
  responsiveFontSize,
  responsiveWidth,
  routes,
  sizes,
} from '../../../services';
import {FlatList, StyleSheet} from 'react-native';
import {useHooks} from './hooks';
import {navigate} from '../../../navigation/rootNavigation';

export default function Index() {
  const {
    currentSlideIndex,
    FlatListRef,
    slides,
    height,
    updateCurrentSlideIndex,
    goToNextSlide,
    goToPreviousSlide,
    goToCreateAccount,
  } = useHooks();

  return (
    <Wrapper
      isMain
      // justifyContentSpaceBetween
      style={{paddingTop: sizes.statusBarHeight}}>
      <StatusBars.Dark />
      <Wrapper>
        <FlatList
          ref={FlatListRef}
          onMomentumScrollEnd={updateCurrentSlideIndex}
          scrollEnabled={false}
          contentContainerStyle={{height: height * 0.75}}
          showsHorizontalScrollIndicator={false}
          horizontal
          data={slides}
          pagingEnabled
          renderItem={({item}) => <Slide item={item} />}
        />
      </Wrapper>
      <Spacer isSmall />

      {/* <Spacer isMedium /> */}
      <Wrapper flexDirectionRow justifyContentCenter>
        {/* Render indicator */}
        {slides.map((_, index) => (
          <Wrapper
            key={index}
            style={[
              styles.indicator,
              index == 1 && {marginHorizontal: 5},
              currentSlideIndex == index && {
                backgroundColor: colors.primary,
              },
            ]}
          />
        ))}
      </Wrapper>
      <Spacer isBasic />

      {/* Buttons */}
      <Wrapper style={{height: height * 0.25}} marginVerticalBase>
        {currentSlideIndex === 0 ? (
          <Buttons.Colored
            buttonColor={colors.appTextColor3}
            text={'Next (1/3)'}
            onPress={goToNextSlide}
          />
        ) : (
          <Wrapper alignItemsCenter>
            <RowButton
              onPress2={
                currentSlideIndex === 2 ? goToCreateAccount : goToNextSlide
              }
              onPress1={goToPreviousSlide}
              text1={'Previous'}
              text2={currentSlideIndex === 2 ? 'Finish' : 'Next (2/3)'}
            />
          </Wrapper>
        )}
        <Spacer isSmall />

        {currentSlideIndex === 2 ? null : (
          <Buttons.Bordered
            tintColor={colors.appTextColor3}
            text={'Skip All'}
            onPress={() => navigate(routes.createAccount)}
          />
        )}
      </Wrapper>
      <Spacer isSmall />
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  indicator: {
    height: 4,
    width: responsiveWidth(26),
    backgroundColor: colors.primaryLight,
    borderRadius: 2,
  },
});
const Slide = ({item}) => {
  const {width} = useHooks();
  const {title, image, subtitle, para} = item;
  return (
    <>
      <Wrapper alignItemsCenter style={{width: width}}>
        <Spacer isSmall />

        <Wrapper marginVerticalBase>
          <Text alignTextCenter isMediumFont isTinyTitle>
            {title}
          </Text>
        </Wrapper>
        <Spacer isMedium />
        <Icons.Svg size={responsiveFontSize(200)} svg={image} />
        <Spacer isMedium />
        <Spacer isBasic />

        <Wrapper marginHorizontalSmall>
          <Text
            alignTextCenter
            isMediumFont
            isSmallTitle
            style={{fontSize: fontSizes.extraLarge}}>
            {subtitle}
          </Text>
        </Wrapper>
        {/* <Spacer isMedium /> */}
        <Wrapper marginVerticalLarge marginHorizontalTiny>
          <Wrapper marginHorizontalSmall>
            <Text alignTextCenter isRegularFont isMedium>
              {para}
            </Text>
          </Wrapper>
        </Wrapper>
      </Wrapper>
    </>
  );
};
