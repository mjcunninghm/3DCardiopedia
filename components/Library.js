/*
Sets the user interface for the generic library.
 */

import * as React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';
import {HEADER} from '../images';
import {Models} from './Models';

// Find screen dimensions
export const Dev_Width = Dimensions.get('screen').width;
export const Dev_Height = Dimensions.get('screen').height;
export const Dev_font = Dimensions.get('screen').fontScale;

export default class Library extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            style={{
              width: Dev_Width,
              height: Dev_Height * 0.125,
            }}
            source={HEADER}
          />
        </View>
        <Models screen={'Model'} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  header: {
    paddingBottom: Dev_Height * 0.125,
    flex: 15,
  },
});
