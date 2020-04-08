import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Navbar from './components/layout/Navbar';
import Recipe from './components/recipe/Recipe';
import Results from './components/pages/Results';
import Home from './components/pages/Home';
import SkeletonCurrent from './components/layout/SkeletonCurrent';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import setAuthToken from './utils/setAuthToken';
import PrivateRoute from './components/routing/PrivateRoute';

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
      <BrowserRouter>
        <Navbar />
        <Container maxWidth='xl' style={{ marginTop: '5rem' }}>
          <Switch>
            <PrivateRoute exact path='/' component={Home} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/results' component={Results} />
            <Route exact path='/skeleton' component={SkeletonCurrent} />
            <Route path='/recipe/:title/:source/:time' component={Recipe} />
          </Switch>
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
