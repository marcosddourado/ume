import { StyleSheet } from 'react-native';
import { scale } from '../../utils/scales';
import { SHUTTLE_GRAY } from '../../utils/colors';

const styles = StyleSheet.create({
  modalWrapper: {
    paddingTop: scale(30),
    width: '100%'
  },
  modalTitle: {
    fontFamily: 'OverpassBold',
    fontSize: scale(16),
    marginTop: scale(21),
    marginBottom: scale(21)
  },
  modalText: {
    fontFamily: 'OverpassRegular',
    fontSize: scale(14),
    color: SHUTTLE_GRAY,
    paddingHorizontal: scale(37),
    paddingBottom: scale(30)
  },
  modalActionButton: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: scale(18),
    width: '100%'
  },
  modalActionText: {
    fontFamily: 'OverpassLight',
    fontSize: scale(16),
    marginLeft: scale(17)
  },
  modalActionWrapper: {
    alignItems: 'flex-start',
    width: '100%',
    paddingHorizontal: scale(30),
    paddingVertical: scale(20)
  }
});

export default styles;
