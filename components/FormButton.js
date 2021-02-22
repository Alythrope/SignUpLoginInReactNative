import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

export default function FormButton({buttonTitle, ...rest}) {
    return (
        <TouchableOpacity 
        style={styles.button} 
        { ...rest}
        >
            <Text style={styles.buttonText} >{buttonTitle}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'blue',
        height: '20%',
        justifyContent: 'center'

    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        
        
    }
})
