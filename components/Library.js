import * as React from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  Text,
  Button,
} from 'react-native';
import {Model} from './ModView.js';
import {Canvas} from '@react-three/fiber/native';
import {Suspense} from 'react';

const Dev_Height = Dimensions.get('screen').height;
const Dev_Width = Dimensions.get('screen').width;

export default class Library extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <Canvas
          style={{
            width: Dev_Width,
            height: Dev_Height,
            alignItems: 'center',
          }}>
          <Suspense fallback={null}>
            <Model />
          </Suspense>
        </Canvas>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: Dev_Height,
    width: Dev_Width,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
