import React, { useState } from 'react';
import { View, Image } from 'react-native';
import { TextInput, Button, Title, Subheading } from 'react-native-paper';
import styles from './Styles.js';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');

  const handlePasswordReset = () => {
    console.log('Resetting password for:', email);
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/1.png')} style={styles.backgroundImage}/>
      <Title style={styles.title}>Forgot Password</Title>
      <Subheading style={styles.subtitle}>Enter your email to reset your password</Subheading>
      
      <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        mode="outlined"
        keyboardType="email-address"
        left={<TextInput.Icon icon="email" />}
      />
      
      <Button mode="contained" onPress={handlePasswordReset} style={styles.button}>
        Reset Password
      </Button>
    </View>
  );
};

export default ForgotPasswordPage;
