import { PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Loginpage from './components/Loginpage';
import Registerpage from './components/Registerpage';
import ForgotPasswordPage from './components/Passwordrecoverypage';

const App = () => {
  return (
    <PaperProvider>
      <SafeAreaProvider>
        {/* Login Page */}
        <Loginpage/>

        {/* Signup page*/}
        {/* <Registerpage/>  */}

        {/* Password recovery page*/}
        {/* <ForgotPasswordPage /> */}
      </SafeAreaProvider>
    </PaperProvider>

  );
};

export default App;

