import { Provider } from 'react-redux';
import store from './redux/store'
import Header from './components/header';
import Home from './components/home';
import Cart from './components/cart';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { Paper } from '@material-ui/core';

function App() {

  const theme = createMuiTheme({
    palette: {
    }
  })

  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Paper style={{ height: '100vh' }}>
          <Router>
            <div className="App">
              <Header ></Header>
              <Switch>
                <Route path="/cart" component={Cart} ></Route>
                <Route path="/" exact component={Home}></Route>
              </Switch>
            </div>
          </Router>
        </Paper>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
