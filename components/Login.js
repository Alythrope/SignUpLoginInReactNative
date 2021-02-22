import React, {useState} from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import FormButton from './FormButton'
import FormInput from './FormInput'
import auth from '@react-native-firebase/auth';



export default function Login({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');



    
    const loginUser = () => {
        
        auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
        console.log('User account created & signed in!');
        navigation.navigate('Dashboard');
        })
        .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }
      
        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }
      
        console.error(error);
      });
      
    }
    


    return (
        <View>
            
            <FormInput
                labelValue={email}
                onChangeText={(userEmail) => setEmail(userEmail)} 
                placeholderText="Email"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                
            />
            
            <FormInput
                labelValue={password}
                onChangeText={(userPassword) => setPassword(userPassword)} 
                placeholderText="Password"
                secureTextEntry={true}
                
            />
            
            <FormButton 
                buttonTitle='Log In'
                onPress={() => {
                    loginUser()
                    
                }}
            />
            
            
            
            <TouchableOpacity style={styles.passForgot} >
                <Text>Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.passForgot} 
            onPress={() => navigation.navigate('Signup')}>
                <Text>Don't have an account? Create here</Text>
            </TouchableOpacity>
            
            

        </View>
    )
}

const styles = StyleSheet.create({
    passForgot: {
        alignItems: 'center',
        padding: 5
    }
    
})
