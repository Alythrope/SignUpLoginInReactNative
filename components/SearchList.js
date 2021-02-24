import React, {useState} from 'react'
import { View, Text, TextInput } from 'react-native'




export default function SearchList() {
    
    const fruits = ['apple', 'banana', 'pear', 'grape'];
    
    const [fruitz, setFruitz] = useState(fruits);

   
    


    return (
        <View>
            <TextInput 
                onChangeText={(text) => {
                    
                    setFruitz(fruits.filter(fruit => 
                        fruit.toLocaleLowerCase().includes(text.toLocaleLowerCase())));
                    
                    
                }}
            />
            
            {fruitz.map(fruit => <Text>{fruit}</Text>)}
            
            
            
            
        </View>
    )
}
