import React, {useState} from 'react';
import {
  ScrollViews,
  Wrapper,
  Spacer,
  Headers,
  RowButton,
  RowInputs,
  CustomInput,
  Lines,
} from '../../../components';
import {responsiveWidth} from '../../../services';

export default function Index() {
  return (
    <Wrapper isMain style={[{}]}>
      <ScrollViews.KeyboardAvoiding>
        <Headers.Primary
          darkBar
          invertColors
          title={'Change Payment Method'}
          showBackArrow
          titleStyle={{
            marginLeft: responsiveWidth(4),
          }}
          borderBottomWidth
        />
        <Wrapper>
          <Spacer isMedium />

          <CustomInput title={'Card Holder Name'} />
          <Spacer isSmall />

          <CustomInput
            title={'Card Number'}
            placeholder={'---- ---- ---- ----'}
          />
          <Spacer isSmall />
          <RowInputs
            placeholder1={'MM / YY'}
            placeholder2={'- - -'}
            title1={'Card Expiry'}
            title2={'CVC'}
          />
          <Spacer isMedium />
          <Lines.Horizontal style={{alignSelf: 'center'}} width={'90%'} />
          <Spacer isMedium />

          <Wrapper alignItemsCenter>
            <RowButton
              //   onPress2={goToNextSlide}
              //   onPress1={goToPreviousSlide}
              text1={'Cancel'}
              text2={'Update'}
              buttonColorPrimary
            />
          </Wrapper>
        </Wrapper>
      </ScrollViews.KeyboardAvoiding>
    </Wrapper>
  );
}
