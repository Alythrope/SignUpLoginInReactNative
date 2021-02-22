import React, {useState} from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Button } from 'react-native'
import FormButton from './FormButton'
import FormInput from './FormInput'
import auth from '@react-native-firebase/auth';


export default function Signup({ navigation }) {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();

    



    const createUser = () => {

        if(password === confirmPassword){
            auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
        console.log('User account created & signed in!');
        navigation.navigate('Dashboard');
        })
        .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          alert('That email address is already in use!');
        }
      
        if (error.code === 'auth/invalid-email') {
          alert('That email address is invalid!');
        }
      
        console.error(error);
        });
        }else{
            alert("Password don't match")
        }

        
      
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
            <FormInput
                labelValue={confirmPassword}
                onChangeText={(userPassword) => setConfirmPassword(userPassword)} 
                placeholderText="Confirm Password"
                secureTextEntry={true}
                
            />
             <FormButton 
                buttonTitle='Sign Up'
                onPress={() => createUser()}
            />
            
            <TouchableOpacity style={styles.passForgot} 
            onPress={() => navigation.navigate('Login')}>
                <Text>Have an account? Sign In!</Text>
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
