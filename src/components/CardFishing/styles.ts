import { StyleSheet } from 'react-native';
import { scale } from '../../utils/scales';
import { MYSTIC, SHUTTLE_GRAY } from '../../utils/colors';

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    marginVertical: scale(16)
  },
  imageWrapper: {
    borderTopStartRadius: 5,
    borderTopEndRadius: 5,
    height: scale(120),
    overflow: 'hidden'
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover' // or 'stretch'
  },
  backgroundProfile: {
    width: scale(16),
    height: scale(16),
    borderRadius: scale(16) / 2
  },
  userImageWrapper: {
    flexDirection: 'row'
  },
  contentWrapper: {
    borderBottomEndRadius: 5,
    borderBottomStartRadius: 5,
    borderColor: MYSTIC,
    padding: scale(16),
    borderWidth: 1,
    flexDirection: 'row',
    width: '100%'
  },
  textUsername: {
    fontFamily: 'OverpassBold',
    fontSize: scale(12),
    marginLeft: scale(10)
  },
  textTitle: {
    fontSize: scale(16),
    fontFamily: 'OverpassBold'
  },
  textAddress: {
    fontFamily: 'OverpassRegular',
    fontSize: scale(12),
    color: SHUTTLE_GRAY
  },
  textRate: {
    marginTop: scale(10),
    alignItems: 'center',
    flexDirection: 'row'
  },
  contentRight: {
    alignItems: 'flex-end'
  },
  contentRightText: {
    color: SHUTTLE_GRAY,
    fontSize: scale(12)
  }
});

export default styles;
