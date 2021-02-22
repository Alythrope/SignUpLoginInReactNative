import React, { useEffect, useState } from 'react'
import { View, Text, Button } from 'react-native'
import auth from '@react-native-firebase/auth';


export default function Dashboard({ navigation }) {


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
          return (
            <View>
              <Text>Something went wrong!</Text>
            </View>
          );
        }
      
        return (
          <View>
            <Text
                style={{
                    padding: 10,
                    textAlign: 'center'
                }}
            >You are logged in as {user.email}</Text>
          </View>
        );
      }

    

    


    const logoutUser = () => {

        auth()
        .signOut()
        .then(() => console.log('User signed out!'));
      
      }

    return (
        <View>
            
            <LoginApp />
            
            
            
            <Button 
                title="Log out" 
                onPress={() => {
                    logoutUser();
                    navigation.navigate('Home');
                }} 
            />
            <Button 
                title="Go Home" 
                onPress={() => {
                    
                    navigation.navigate('Home');
                }} 
            />
        </View>
    )
}
