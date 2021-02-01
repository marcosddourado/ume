import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { scale } from '../../utils/scales';
import { BackButton } from '../../navigation/DefaultHeaderProps';

export default function SearchFishings(): JSX.Element {
  return (
    <View>
      <View style={styles.modalSearchHeader}>
        <View style={styles.modalSearchHeaderWrapper}>
          <BackButton />
          <TextInput
            autoFocus
            style={styles.modalSearchTextInput}
            placeholder="Buscar pescarias, pessoas, etc..."
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  modalSearchHeader: {
    shadowColor: 'rgba(0, 0, 0, 0.2)',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.6,
    elevation: 2,
    height: scale(90),
    backgroundColor: '#FFF',
    justifyContent: 'flex-end',
    paddingBottom: scale(10)
  },
  modalSearchHeaderWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: scale(20)
  },
  modalSearchTextInput: {
    fontFamily: 'OverpassLight',
    fontSize: scale(16),
    width: '80%',
    marginLeft: scale(20)
  }
});
