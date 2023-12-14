import { Image, StyleSheet, Text, View } from 'react-native'
import { colors } from '../Global/colors'


const ProductItem = ({ producto }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: producto.thumbnail }}
        resizeMode='cover'
      />
      <Text style={styles.text}>{producto.title}</Text>
    </View>
  )
}

export default ProductItem

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.color3,
    margin: 5,
    padding: 10,
    alignItems: 'center',
    flexDirection:'row',
    justifyContent:'start',
    borderRadius:5,
    gap:30
  },
  image:{
    width:50,
    height:50
  }
})