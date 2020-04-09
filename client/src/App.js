import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Navbar from './components/layout/Navbar';
import Recipe from './components/recipe/Recipe';
import Results from './components/pages/Results';
import Home from './components/pages/Home';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import setAuthToken from './utils/setAuthToken';
import PrivateRoute from './components/routing/PrivateRoute';
import About from './components/pages/About';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#0288d1',
    },
    secondary: {
      main: '#e53935',
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <BrowserRouter>
        <Container maxWidth='xl' style={{ marginTop: '5rem' }}>
          <Switch>
            <PrivateRoute exact path='/' component={Home} />
            <PrivateRoute exact path='/about' component={About} />
            <PrivateRoute exact path='/results' component={Results} />
            <PrivateRoute
              exact
              path='/recipe/:title/:source/:time'
              component={Recipe}
            />
            <Route exact path='/register' component={Register} />
            <Route exact path='/login' component={Login} />
          </Switch>
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
