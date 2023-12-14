import { Pressable, StyleSheet, Text, View } from 'react-native'
import { colors } from '../Global/colors'
import CardShadow from '../Wrappers/CardShadow'

const CategoryItem = ({ Categoria,setCategorySelected }) => {
  return (
    <Pressable onPress={() =>setCategorySelected(Categoria)}>
      <CardShadow style={styles.container}>
        <Text style={styles.text}>{Categoria}</Text>
      </CardShadow>

    </Pressable>
  )
}

export default CategoryItem

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.color4,
    margin: 8,
    padding: 20,
    alignItems: "center",

  }
})