/*
Sets the user interface for the patient library.
 */

import * as React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {Models} from './Models';

// Find screen dimensions
export const Dev_Width = Dimensions.get('screen').width;
export const Dev_Height = Dimensions.get('screen').height;
export const Dev_font = Dimensions.get('screen').fontScale;

export default class PatientLibrary extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <Models screen={'Patient'} />
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
