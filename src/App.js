import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Navbar from './components/layout/Navbar';
import Recipe from './components/recipe/Recipe';
import Results from './components/pages/Results';
import Home from './components/pages/Home';

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

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Navbar />
        <Container maxWidth='xl' style={{ marginTop: '5rem' }}>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/results' component={Results} />
            <Route path='/recipe/:title/:source/:time' component={Recipe} />
          </Switch>
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
