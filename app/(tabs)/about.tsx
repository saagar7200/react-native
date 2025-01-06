import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const about = () => {
  return (
    <View style={styles.container}>
    <Text style={styles.text}>About screen</Text>
    <Link href={'/'} style={styles.button}>
    <Text >Go to Back</Text>
    </Link>
  </View>
  )
}

export default about

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
       paddingTop: 20
      },
      text: {
        color: '#25292e',
        fontSize: 24,
        fontWeight: 'bold',
      },
      button: {
        fontSize: 16,
        textDecorationLine: 'none',
        color: '#25292e',
        boxShadow: '4px -4px 4px rgba(0, 0, 0, 0.25)',
        borderWidth:1,
        borderColor:'#25292e',
        borderRadius: 10,
        padding:15, 
        marginTop:'auto',
        marginBottom:'auto',
        textAlign:'center',
        minWidth:'40%'
      },
})