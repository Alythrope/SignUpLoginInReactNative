import React, {useState, useEffect} from 'react'
import { View, Text, Button } from 'react-native'
import auth from '@react-native-firebase/auth';

export default function HomeScreen({ navigation }) {

    function LoginApp() {

        // Set an initializing state whilst Firebase connects
        const [initializing, setInitializing] = useState(true);
        const [user, setUser] = useState();
                
        // Handle user state changes
        function onAuthStateChanged(user) {
            setUser(user);
            if (initializing) setInitializing(false);
        }
              
        useEffect(() => {
            const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
            return subscriber; // unsubscribe on unmount
        }, []);
              
        if (initializing) return null;
              
        if (!user) {
            return(
                <View>
                    <Button title="Log In" onPress={() => navigation.navigate('Login') } />
                    <Button title="Sign Up" onPress={() => navigation.navigate('Signup') } />
                </View>
            )
            
        }
            return(
                <View>
                    <Text
                        style={{
                            padding: 10,
                            textAlign: 'center'
                        }}
                    >You are already logged in. Go to Dashboard!</Text>
                    <Button
                        title="Dashboard"
                        onPress={() => navigation.navigate('Dashboard')}
                    />
                </View>
            ) 
    }

    

    return (
        <View>
            
            {/* <Button title="Log In" onPress={() => navigation.navigate('Login') } />
            <Button title="Sign Up" onPress={() => navigation.navigate('Signup')} /> */}
            <LoginApp />
        </View>
    )

    

}
