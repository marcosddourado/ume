import { StyleSheet } from 'react-native';
import { SHUTTLE_GRAY } from '../../utils/colors';
import { scale } from '../../utils/scales';

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  iconButtonWrapper: {
    alignItems: 'center'
  },
  iconText: {
    fontFamily: 'OverpassLight',
    color: SHUTTLE_GRAY,
    marginTop: scale(10)
  },
  rateText: {
    fontFamily: 'OverpassLight',
    color: SHUTTLE_GRAY,
    fontSize: scale(14),
    alignSelf: 'center',
    marginTop: scale(17)
  },
  textFishing: {
    color: '#001F2C',
    fontSize: scale(16),
    fontFamily: 'OverpassRegular',
    alignSelf: 'center',
    marginBottom: scale(15)
  }
});

export default styles;
