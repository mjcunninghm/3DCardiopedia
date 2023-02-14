import * as React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  Button,
  Image,
} from 'react-native';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedValue: 'Home',
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.welcome}>
          {/*Sets logo/welcome space*/}
          <View style={{flex: 2}}>
            <View style={{flexDirection: 'row'}}>
              {/*Sets logo space*/}
              <View style={{flex: 1}}>
                <Image
                  style={{
                    width: 90,
                    height: 90,
                  }}
                  source={require('Cardiopedia\\logo-circle.png')}
                />
              </View>
              {/*Sets welcome space*/}
              <View style={{flex: 3, alignItems: 'center', paddingTop: 5}}>
                <Text style={styles.welcomeText}>
                  Welcome to 3D Cardiopedia!
                </Text>
              </View>
            </View>
          </View>
          {/*Sets welcome description space*/}
          <View style={{flex: 1, alignItems: 'center'}}>
            <Text style={{textAlign: 'center', color: 'black'}}>
              3D Cardiopedia aims to provide the most anatomically accurate
              depictions of congenital heart disease at the touch of your
              fingers.
            </Text>
          </View>
        </View>
        <View style={styles.gray}>
          {/*Sets header space*/}
          <View style={{flex: 2}}>
            <Text style={styles.portalText}>Patient Portal</Text>
          </View>
          {/*Sets description space*/}
          <View style={{flex: 5, paddingBottom: 1}}>
            <Text style={{color: 'black'}}>Patient portal description</Text>
          </View>
          {/*Sets button space*/}
          <View style={{flex: 2}}>
            <Button
              title="Go to patient portal"
              onPress={() => this.props.navigation.navigate('PatientPortal')}
            />
          </View>
        </View>
        <View style={styles.white}>
          {/*Sets header space*/}
          <View style={{flex: 2}}>
            <Text style={styles.portalText}>Library</Text>
          </View>
          {/*Sets description space*/}
          <View style={{flex: 5, paddingBottom: 1}}>
            <Text style={{color: 'black'}}>Library description</Text>
          </View>
          {/*Sets button space*/}
          <View style={{flex: 2}}>
            <Button
              title="Go to library"
              onPress={() => this.props.navigation.navigate('Library')}
            />
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
  },
  welcome: {
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10,
    flex: 28,
    flexDirection: 'column',
    backgroundColor: '#ffffff',
  },
  white: {
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10,
    flex: 36,
    flexDirection: 'column',
    backgroundColor: '#ffffff',
  },
  gray: {
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10,
    flex: 36,
    flexDirection: 'column',
    backgroundColor: '#d9d9d9',
  },
  welcomeText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  portalText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'left',
  },
});
