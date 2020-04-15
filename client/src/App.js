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
import ExtendedSearch from './components/pages/extendedSearch/ExtendedSearch';
import ResultsExtended from './components/pages/extendedSearch/ResultsExtended';
import Favorites from './components/pages/Favorites';

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
        <Container maxWidth='xl' style={{ marginTop: 55 }}>
          <Navbar />
          <Switch>
            <PrivateRoute exact path='/' component={Home} />
            <PrivateRoute exact path='/about' component={About} />
            <PrivateRoute
              exact
              path='/extended-search'
              component={ExtendedSearch}
            />
            <PrivateRoute exact path='/results' component={Results} />
            <PrivateRoute
              exact
              path='/extended-search/results'
              component={ResultsExtended}
            />
            <PrivateRoute exact path='/recipe/:id' component={Recipe} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/favorites' component={Favorites} />
          </Switch>
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
