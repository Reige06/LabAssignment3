import React, { useState } from 'react';
import { View, Image } from 'react-native';
import { TextInput, Button, Title, Subheading } from 'react-native-paper';
import styles from './Styles';

const SignupPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [togglePassword, setTogglePassword] = useState(false);

  const handleRegister = () => {
    if (password === confirmPassword) {
      console.log('Registering with:', name, password);
    } else {
      alert('Passwords do not match!');
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/1.png')} style={styles.backgroundImage}/>
      <Title style={styles.title}>Sign Up</Title>
      <Subheading style={styles.subtitle}>Create a new account</Subheading>
      
      <TextInput
        label="Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
        mode="outlined"
      />
      <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        mode="outlined"
        keyboardType="email-address"
        left={<TextInput.Icon icon="email" />}
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

      <TextInput
        label="Confirm password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        style={styles.input}
        secureTextEntry={!togglePassword}
        mode="outlined"
        left={<TextInput.Icon icon="lock" />}
        right={
          <TextInput.Icon icon={togglePassword ? "eye-off" : "eye"} onPress={() => setTogglePassword(!togglePassword)}  /> }
      />
      
      <Button mode="contained" onPress={handleRegister} style={styles.button}>
        Sign Up
      </Button>
    </View>
  );
};

export default SignupPage;
