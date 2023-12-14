import { Pressable, StyleSheet, Text, View } from 'react-native'
import { colors } from '../Global/colors'


const Header = ({ title = "producto", setProductSelected,setCategorySelected }) => {
  const retornar = () => {
    if (title == "Detalle Producto") {
      setProductSelected("")
    }else if(title=="Productos"){
      setCategorySelected("")
    }
  }
  return (
    <View style={styles.container}>
      {title!="Categorias"?<Pressable style={styles.miBoton} onPress={() => { retornar() }}>
        <Text style={styles.texto2} >Volver</Text>
      </Pressable>:""}
      
      <Text style={styles.text}>{title}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.color1,
    width: "100%",
    height: 80,
    alignItems: "center",

    flexDirection: "row",
    justifyContent: 'space-between',
    padding: 30
  },
  text: {
    fontSize: 20,
    fontFamily: "rubik"
  },
  miBoton: {
    backgroundColor: colors.color5,
    borderRadius: 5,
    height: 40,
    paddingHorizontal: 20,
    justifyContent: 'center',
    marginTop: 20
  },
  texto2: {
    fontSize: 20,
  }
})