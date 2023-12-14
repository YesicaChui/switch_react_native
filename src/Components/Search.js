import { StyleSheet, TextInput, View, Pressable, Text } from 'react-native'
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import { colors } from '../Global/colors';
import { useState } from 'react';

const Search = ({ setKeyword }) => {
  const [textSearch, setTextSearch] = useState("")
  const [error, setError] = useState("")
  const checkError = () => {
    const expression = /.*[0-9].*/
    if (expression.test(textSearch)) {
      setError("no debe contener numeros")
    } else {
      setKeyword(textSearch)
    }
  }

  const removeItem = () => {
    setTextSearch("")
    setError("")
  }

  return (
    <View style={styles.containerSearchError}>
      <View style={styles.container}>
        <TextInput style={styles.input} placeholder='Buscar Producto'
          value={textSearch}
          onChangeText={text => setTextSearch(text)}
        />
        <Pressable onPress={() => checkError()}>
          <AntDesign name='search1' color={'green'} size={30} />
        </Pressable>
        <Pressable onPress={() => removeItem()}>
          <MaterialIcons name='cancel' color={'green'} size={30} />
        </Pressable>
      </View>
      {error?<Text style={styles.errorInput}>{error}</Text>:null}
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 20,
    paddingBottom: 5,
    flexDirection: "row",
    gap: 10,

    justifyContent: "space-between",
    backgroundColor: colors.color1
  },
  input: {
    width: "70%",
    backgroundColor: colors.color5,
    padding: 5,
    borderRadius: 5,
  },
  containerSearchError:{
    backgroundColor: colors.color1,
  },
  errorInput:{
    color:"red",
    paddingHorizontal:20,
    marginBottom:5
  }
})