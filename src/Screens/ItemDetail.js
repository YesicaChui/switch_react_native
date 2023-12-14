import { Image, StyleSheet, Text, View } from 'react-native'
import Header from '../Components/Header'
import { colors } from '../Global/colors'


const ItemDetail = ({ productSelected,setProductSelected }) => {
  return (
    <>

      <Header title='Detalle Producto' setProductSelected={setProductSelected} />
      <View style={styles.container}>
        <View style={styles.caja}>
          <Text style={styles.title}>{productSelected.title}</Text>
          <Image
            style={styles.image}
            source={{ uri: productSelected.thumbnail }}
            resizeMode='cover'
          />
          <Text>Precio: {productSelected.price} Stock:{productSelected.stock} </Text>
          <Text>Marca: {productSelected.brand}</Text>

          <Text>{productSelected.description}</Text>

        </View>
      </View>
    </>
  )
}

export default ItemDetail

const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.color2,
    flex: 1
  },
  caja:{
    backgroundColor:"red",
    width:"70%",
    alignItems:"center",
    padding:30
  },
  image: {
    width: 150,
    height: 150
  },
  title:{
    fontSize:30,
    fontWeight:'700',
    textAlign:"center"
  }
})