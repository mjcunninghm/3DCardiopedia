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

export default class PatientPortal extends React.Component {
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
              height: 100,
            }}
            source={HEADER}
          />
        </View>
        <View style={styles.body}>
          <Text style={styles.headerText}>Patient Portal</Text>
          <Text
            style={{
              color: 'black',
              textAlign: 'center',
            }}>
            The patient portal offers a interactive, 3D visualization of your
            own heart. At the current moment in time, models are curated and
            stored for the duration of a patient's stay at the University of
            Iowa Hospital and Clinics. For current patients: a username and
            password will be given once a model of your heart has been curated.
            Please speak with your provider for more details.
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
            onPress={() => this.props.navigation.navigate('Model Screen')}
          />
          <Image
            style={{
              width: 90,
              height: 90,
              marginTop: 30,
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
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10,
    flex: 92,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  prompt: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    paddingTop: 40,
  },
  input: {
    height: 40,
    width: 200,
    marginTop: 5,
    marginBottom: 10,
    borderWidth: 1,
    padding: 10,
  },
});
