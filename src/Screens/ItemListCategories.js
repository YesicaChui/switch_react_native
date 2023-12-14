import { FlatList, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import Header from '../Components/Header'
import Search from '../Components/Search'
import dataProductos from "../Data/products.json"
import ProductItem from '../Components/ProductItem'
import { useEffect, useState } from 'react'


const ItemListCategories = ({category,setProductSelected}) => {
  const [keyword, setKeyword] = useState("")
  const [products,setProducts]=useState("")
  useEffect(()=>{
    if(category){
      const productsCategory = dataProductos.filter(product =>product.category===category)
      const productsFilter= productsCategory.filter(product =>product.title.toLowerCase().includes(keyword.toLowerCase()))
     
      setProducts(productsFilter)
    }else{
      const productsFilter= dataProductos.filter(product =>product.title.toLowerCase().includes(keyword.toLowerCase()))
     
      setProducts(productsFilter)
    }
    console.log(keyword)
  },[keyword])

  return (
    <>
      <Header title='Productos' />
      <Search setKeyword={setKeyword} />
      <FlatList 
      style={styles.container}
      data={products}
      keyExtractor={item=>item.id}
      renderItem={({item})=>(
        <ProductItem producto={item} setProductSelected={setProductSelected}/>
      )}
      />
    </>
  )
}

export default ItemListCategories

const styles = StyleSheet.create({
  container:{
    width:"80%"

  }
})