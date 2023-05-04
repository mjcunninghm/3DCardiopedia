import * as React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  Text,
  TextInput,
} from 'react-native';
import {HEADER, LOGO} from '../images.js';
const Dev_Width = Dimensions.get('screen').width;
const Dev_Height = Dimensions.get('screen').height;
const Dev_font = Dimensions.get('screen').fontScale;

export default class ModelScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      conditionname: '',
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.LOGO}>
          <Image
            style={{
              width: Dev_Height * 0.225,
              height: Dev_Height * 0.225,
              marginTop: Dev_Height * 0.3,
            }}
            source={LOGO}
          />
        </View>
        <View style={{flex: 5, paddingTop: Dev_Height * 0.001}}>
          <View style={styles.names}>
            <Text
              style={{
                color: 'black',
                fontSize: 20 * Dev_font,
                fontWeight: 'bold',
              }}>
              Patient Name
            </Text>
            <Text style={{color: 'black'}}>Condition Name</Text>
          </View>
        </View>
        <View
          style={{
            flex: 8,
            alignItems: 'center',
            paddingBottom: Dev_Height * 0.002,
          }}>
          <View style={styles.input}>
            <Text style={{color: 'black'}}>CHD Description</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  input: {
    height: Dev_Height * 0.12,
    width: Dev_Width * 0.9,
    marginTop: Dev_Height * 0.005,
    marginBottom: Dev_Height * 0.01,
    borderWidth: 1,
    padding: Dev_Height * 0.01,
  },
  names: {
    paddingTop: Dev_Height * 0.03,
    paddingLeft: Dev_Width * 0.045,
    paddingRight: Dev_Width * 0.045,
    flexDirection: 'column',
    backgroundColor: '#ffffff',
  },
  LOGO: {
    paddingBottom: Dev_Height * 0.07,
    alignItems: 'center',
  },
});
