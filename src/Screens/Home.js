import { StyleSheet, Text, View } from 'react-native'
import Header from '../Components/Header'
import Categories from '../Components/Categories'
const Home = ({setCategorySelected}) => {
  return (
    <>
      <Header title='Categorias'/>
      <Categories setCategorySelected={setCategorySelected} />
    </>
  )
}
export default Home

const styles = StyleSheet.create({})