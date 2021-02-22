import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'

export default function FormInput({labelValue, placeholderText, ...rest}) {
    

    return (
        <View>
            <TextInput 
                value={labelValue}
                placeholder={placeholderText}
                numberOfLines={1}
                { ...rest }
            />
           
        </View>
    )
}
