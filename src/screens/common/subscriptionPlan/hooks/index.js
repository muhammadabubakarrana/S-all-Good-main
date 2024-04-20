export function useHooks() {
  return {};
}

{
  /* <Wrapper
  marginHorizontalBase
  paddingHorizontalSmall
  paddingVerticalSmall
  paddingHorizontalBase
  flexDirectionRow
  style={[
    
    styles.view,
    isActiveCondition === item.id && styles.activeBorder,
  ]}>
  <Wrapper flex={7.1} style={{marginTop: responsiveHeight(0.5)}}>
    <Text
      isMediumFont
      isMedium
      style={[
        {
          color:
            isActiveCondition === item.id
              ? colors.appTextColor6
              : colors.primary,
        },
      ]}>
      {item.title}
    </Text>
    <Text
      isXXLTitle
      style={[
        {
          color:
            isActiveCondition === item.id
              ? colors.appTextColor6
              : colors.appTextColor3,
        },
      ]}>
      ${item.price}{' '}
      <Text
        isSmall
        style={[
          {
            opacity: 0.5,
            color:
              isActiveCondition === item.id
                ? colors.appTextColor6
                : colors.appTextColor3,
          },
        ]}>
        /month
      </Text>
    </Text>

    <Wrapper marginHorizontalTiny>
      {item.detail.map((item2, index) => (
        <Wrapper
          key={index}
          style={{marginBottom: responsiveHeight(0.5)}}
          flexDirectionRow
          alignItemsCenter>
          <Wrapper
            style={{
              width: 4,
              height: 4,
              borderRadius: 2,
              backgroundColor:
                isActiveCondition === item.id
                  ? colors.appTextColor6
                  : colors.appTextColor3,
              marginRight: responsiveWidth(3),
            }}
          />

          <Text
            isRegularFont
            style={{
              marginTop:
                (item.id == 0 || item.id == 1) && index == 0
                  ? 15
                  : item.id == 2 && index == 0
                  ? 28
                  : (item.id == 1 || item.id == 2) && index == 2
                  ? 15
                  : null,
              marginBottom:
                (item.id == 1 || item.id == 2) && index == 1 ? -15 : null,
              fontSize: responsiveFontSize(14),
              opacity: 0.75,
              color:
                isActiveCondition === item.id
                  ? colors.appTextColor6
                  : colors.appTextColor3,
            }}>
            {item2.name}
          </Text>
   
        </Wrapper>
      ))}
    </Wrapper>
  </Wrapper>
  <Wrapper marginVerticalTiny flex={0.9}>
    <Icon
      size={sizes.icons.medium}
      name={
        isActiveCondition === item.id ? 'radiobox-marked' : 'radiobox-blank'
      }
      color={
        isActiveCondition === item.id ? colors.appTextColor6 : colors.grayLight
      }
      type="material-community"
    />
  </Wrapper>
</Wrapper>; */
}
