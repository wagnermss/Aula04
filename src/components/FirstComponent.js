import { View, Text, Button, StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import ThemeContext from '../contexts/ThemeContext'

const FirstComponent = () => {
    const { theme, toggleTheme } = useContext(ThemeContext)
  
return (
   
   <View style={[styles.container, theme === 'dark'? styles.dark : styles.light]}>
        <Text style={theme === 'dark'? styles.darkText : styles.lightText}>
            O tema atual é: {theme}
        </Text>
      <Button title="Mudar o tema" onPress={toggleTheme}/>
    </View>
  )
}

    

const styles = StyleSheet.create({
    container: {
        alignContent: 'center',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    dark: {
        backgroundColor: '#696969',
    },
    light: {
        backgroundColor: '#FFF',
    },
    darkText: {
        color: '#FFF',
    },
    lightText: {
        color: '#696969',
    },
})

export default FirstComponent