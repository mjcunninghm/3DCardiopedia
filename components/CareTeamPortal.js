import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TextInput,
  Button,
} from 'react-native';
import {LOGO, HEADER} from '../images.js';

const Dev_Width = Dimensions.get('screen').width;
export const Dev_Height = Dimensions.get('screen').height;
export const Dev_font = Dimensions.get('screen').fontScale;

export default class CareTeamPortal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
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
        <View style={styles.body}>
          <Text style={styles.headerText}>Care Team Portal</Text>
          <Text
            style={{
              color: 'black',
              textAlign: 'center',
            }}>
            The care team portal allows for physicians, nurses, or any member of
            the care team to access an exhaustive library of presently admitted,
            patient models.
          </Text>
          <Text style={styles.prompt}>Login</Text>
          <TextInput
            style={styles.input}
            placeholder="Username"
            value={this.state.username}
            onChangeText={username => this.setState({username: username})}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={this.state.password}
            onChangeText={password => this.setState({password: password})}
            secureTextEntry={true}
          />
          <Button
            title="Enter"
            onPress={() => this.props.navigation.navigate('Patient Library')}
          />
          <Image
            style={{
              width: Dev_Height * 0.1,
              height: Dev_Height * 0.1,
              marginTop: Dev_Height * 0.03,
            }}
            source={LOGO}
          />
        </View>
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
    flex: 15,
  },
  body: {
    paddingTop: Dev_Height * 0.01,
    paddingLeft: Dev_Width * 0.045,
    paddingRight: Dev_Width * 0.045,
    paddingBottom: Dev_Height * 0.01,
    flex: 92,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  headerText: {
    fontSize: 30 * Dev_font,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  prompt: {
    fontSize: 25 * Dev_font,
    fontWeight: 'bold',
    color: 'black',
    paddingTop: Dev_Height * 0.04,
  },
  input: {
    height: Dev_Height * 0.04,
    width: Dev_Width * 0.5,
    marginTop: Dev_Height * 0.005,
    marginBottom: Dev_Height * 0.015,
    borderWidth: 1,
    padding: Dev_Height * 0.01,
  },
});
