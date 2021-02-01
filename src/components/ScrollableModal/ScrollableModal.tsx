import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
// @ts-ignore
import Modal from 'react-native-modal';
import ModalBaseScene from '../../utils/ModalBaseScene';
import styles from './styles';

type State = {
  scrollOffset: null | number;
};

export default class ScrollableModal extends ModalBaseScene<State> {
  public scrollViewRef: React.RefObject<ScrollView>;
  constructor(props) {
    super(props, {
      scrollOffset: null
    });

    this.scrollViewRef = React.createRef();
  }
  handleOnScroll = event => {
    this.setState({
      scrollOffset: event.nativeEvent.contentOffset.y
    });
  };
  handleScrollTo = p => {
    if (this.scrollViewRef.current) {
      this.scrollViewRef.current.scrollTo(p);
    }
  };

  renderModal(): React.ReactElement<any> {
    return (
      <Modal
        testID={'modal'}
        isVisible={this.props.visible}
        onSwipeComplete={this.close}
        swipeDirection={['down']}
        scrollTo={this.handleScrollTo}
        scrollOffset={this.state.scrollOffset}
        scrollOffsetMax={400 - 300} // content height - ScrollView height
        style={styles.modal}
      >
        <View style={styles.scrollableModal}>
          <ScrollView
            ref={this.scrollViewRef}
            // onScroll={this.handleOnScroll}
            scrollEventThrottle={16}
          >
            <View style={styles.scrollableModalContent1}>
              <Text style={styles.scrollableModalText1}>
                You can scroll me up! 👆
              </Text>
            </View>
            <View style={styles.scrollableModalContent2}>
              <Text style={styles.scrollableModalText2}>
                Same here as well! ☝
              </Text>
            </View>
          </ScrollView>
        </View>
      </Modal>
    );
  }
}
