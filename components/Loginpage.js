import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { TextInput, Button, Title, Subheading} from 'react-native-paper';
import { Image } from 'react-native';
import styles from './Styles';

const LoginPage = () => {
  const [Email, setName] = useState('');
  const [password, setPassword] = useState('');
  const [togglePassword, setTogglePassword] = useState(false);

  return (
    <View style={styles.container}>
      <Image source={require('../assets/1.png')} style={styles.backgroundImage}/>
      <Title style={styles.title}>Login</Title>
      <Subheading style={styles.subtitle}>Sign in to continue.</Subheading>
      
      <TextInput
        label="Email"
        value={Email}
        onChangeText={setName}
        style={styles.input}
        left={<TextInput.Icon icon="email" />}
        mode="outlined"
      />
      <TextInput
        label="Password"
        value={password}
        onChangeText={setPassword}
        style={styles.input}
        secureTextEntry={!togglePassword}
        mode="outlined"
        left={<TextInput.Icon icon="lock" />}
        right={
          <TextInput.Icon icon={togglePassword ? "eye-off" : "eye"} onPress={() => setTogglePassword(!togglePassword)} />}
      />
      
      <TouchableOpacity onPress={() => console.log('Log in')}>
        <Button mode="contained" style={styles.button}>
          Log in
        </Button>
      </TouchableOpacity>
      
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => console.log('Forgot Password')}>
          <Text style={styles.footerText}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => console.log('Forgot Password')}>
          <Text style={{...styles.createaccnt}}>Create an Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginPage;
