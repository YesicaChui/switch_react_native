import { StyleSheet, Text, View } from 'react-native'


const CardShadow = ({children,style}) => {
  return (
    <View style={[styles.container,style]}>
      {children}
    </View>
  )
} 

export default CardShadow

const styles = StyleSheet.create({
  container:{ 
    shadowColor:"red",
    // android
    elevation: 10,
    //ios
    shadowOffset:{width:80, height:50},
    shadowRadius:1,
    shadowOpacity:1
  }
})