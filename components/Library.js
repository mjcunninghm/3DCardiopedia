import * as React from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {Model} from './ModView';

const Dev_Height = Dimensions.get('screen').height;
const Dev_Width = Dimensions.get('screen').width;

export default class Library extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <SafeAreaView styles={styles.container}>
        <View>
          <Model />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: Dev_Height,
    width: Dev_Width,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#222222',
  },
});
