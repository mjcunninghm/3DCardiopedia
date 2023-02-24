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

const Dev_Width = Dimensions.get('screen').width;

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
              height: 100,
            }}
            source={require('Cardiopedia\\header.png')}
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
            onPress={() => this.props.navigation.navigate('Model Screen')}
          />
          <Image
            style={{
              width: 90,
              height: 90,
              marginTop: 30,
            }}
            source={require('Cardiopedia\\logo-circle.png')}
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
