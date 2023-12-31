import { FlatList, StyleSheet, Text, View } from 'react-native'
import categories from '../Data/categories.json'
import CategoryItem from './CategoryItem'
const Categories = ({setCategorySelected}) => {
  return (
    <FlatList style={styles.container} data={categories}
      keyExtractor={item => item}
      renderItem={({ item }) => (
        <CategoryItem Categoria={item} setCategorySelected={setCategorySelected}/>
      )}
    />
  )
}

export default Categories

const styles = StyleSheet.create({
  container:{
    width:"80%"
  }
})