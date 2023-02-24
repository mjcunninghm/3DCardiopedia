import * as React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';

const Dev_Width = Dimensions.get('screen').width;

export default class ModelScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{
            width: 150,
            height: 150,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          source={require('Cardiopedia\\logo-circle.png')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});
