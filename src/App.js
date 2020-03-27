import React from 'react';
import Navbar from './components/layout/Navbar';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#0288d1'
    },
    secondary: {
      main: '#e53935'
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <Navbar />
      </div>
    </ThemeProvider>
  );
}

export default App;
