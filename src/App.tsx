import React from 'react';
import Routes from './routes/Routes';
import { Provider as PaperProvider } from 'react-native-paper';
import { theme } from './assets/theme';
import Ionicons from 'react-native-vector-icons/Ionicons';
const App = () => {
  return (
    <PaperProvider
      theme={theme}
      settings={{
        icon: (props) => <Ionicons {...props} size={30} />,
      }}>
      <Routes />
    </PaperProvider>
  );
};

export default App;
