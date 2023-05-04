import {useState} from 'react';
import {Dev_Height, Dev_Width, Dev_font} from './Library';
import {
  View,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  Text,
  Button,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import * as React from 'react';
import {useNavigation} from '@react-navigation/native';

export function Models({screen}) {
  const [models, setModels] = useState([
    {name: `${screen} 1`, key: '1'},
    {name: `${screen} 2`, key: '2'},
    {name: `${screen} 3`, key: '3'},
    {name: `${screen} 4`, key: '4'},
    {name: `${screen} 5`, key: '5'},
    {name: `${screen} 6`, key: '6'},
    {name: `${screen} 7`, key: '7'},
    {name: `${screen} 8`, key: '8'},
    {name: `${screen} 9`, key: '9'},
    {name: `${screen} 10`, key: '10'},
    {name: `${screen} 11`, key: '11'},
    {name: `${screen} 12`, key: '12'},
    {name: `${screen} 13`, key: '13'},
    {name: `${screen} 14`, key: '14'},
    {name: `${screen} 15`, key: '15'},
  ]);
  const navigation = useNavigation();
  return (
    <FlatList
      data={models}
      style={{backgroundColor: '#ffffff'}}
      renderItem={({item}) => (
        <TouchableOpacity onPress={() => navigation.navigate('Model Screen')}>
          <Text style={styles.models}>{item.name}</Text>
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  models: {
    fontSize: 25 * Dev_font,
    paddingLeft: Dev_Width * 0.15,
    height: Dev_Height * 0.1,
    width: Dev_Width,
    borderWidth: 1,
    padding: Dev_Height * 0.03,
    color: 'black',
  },
});
