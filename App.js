import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/Components/Header';
import Home from './src/Screens/Home';
import ItemListCategories from './src/Screens/ItemListCategories';
import ItemDetail from './src/Screens/ItemDetail';
import { useState } from 'react';
import { useFonts } from 'expo-font';

export default function App() {
  const [categorySelected, setCategorySelected] = useState("")
  const [fontLoaded] = useFonts(
    {
      kalnia: require('./assets/Kalnia-VariableFont.ttf'),
      rubik: require('./assets/RubikBubbles-Regular.ttf')
    }
  )
  if(!fontLoaded) return null
  return (
    <View style={styles.container}>
      {categorySelected ? <ItemListCategories category={categorySelected} /> : <Home setCategorySelected={setCategorySelected} />}

      {/* <ItemListCategories/>  */}
      {/* <ItemDetail/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
