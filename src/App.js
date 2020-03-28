import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Navbar from './components/layout/Navbar';
import AddButton from './components/layout/AddButton';
import RecipesList from './components/recipes/RecipesList';

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
      <Navbar />
      <Container maxWidth='xl' style={{ marginTop: '5rem' }}>
        <RecipesList />
      </Container>
    </ThemeProvider>
  );
}

export default App;
