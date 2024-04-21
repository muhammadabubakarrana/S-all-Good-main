import React, {Component} from 'react';
import {
  Wrapper,
  Text,
  Headers,
  Icons,
  ScrollViews,
  Buttons,
  Spacer,
  Lines,
} from '../../../components';
import {useHooks} from './hooks';
import {DummyNotificationsData, colors} from '../../../services';
export default function Index() {
  const {terms, text} = useHooks();
  return (
    <Wrapper isMain>
      <Headers.Primary
        darkBar
        invertColors
        title={'Notifications'}
        showBackArrow
        borderBottomWidth
      />
      <ScrollViews.WithKeyboardAvoidingView>
        {DummyNotificationsData?.map((item, index) => {
          const {heading, para, date} = item;
          return (
            <Wrapper key={index}>
              <Lines.Horizontal />

              <Wrapper
                style={{
                  backgroundColor:
                    index === 0 || index === 1 || index === 2
                      ? colors.secondary
                      : null,
                }}
                paddingHorizontalSmall
                paddingVerticalSmall>
                <Text isRegular isBoldFont>
                  {heading.length > 30 ? heading.slice(0, 50) + '...' : heading}
                </Text>
                <Spacer isTiny />
                <Text isRegular>
                  {para.length > 30 ? para.slice(0, 110) + '...' : para}
                </Text>
                <Spacer isTiny />
                <Text isRegular style={{opacity: 0.5}}>
                  {date}
                </Text>
              </Wrapper>

              {index === DummyNotificationsData.length - 1 && (
                <Lines.Horizontal />
              )}
            </Wrapper>
          );
        })}

        <Spacer isBasic />
      </ScrollViews.WithKeyboardAvoidingView>
    </Wrapper>
  );
}
