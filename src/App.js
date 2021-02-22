import { Provider } from 'react-redux';
import Header from './components/header';
import Home from './components/home';
import Cart from './components/cart';
import SimpleSnackbar from './components/snackbar'
import data from './data'; //local fetching from data.js
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { Paper } from '@material-ui/core';

function App() {

  const theme = createMuiTheme({
    palette: {
    }
  })

  const [users, setUser] = useState([]);
  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8000/store");
    setUser(result.data);
  }
  //console.log(users);
  //console.log(data);

  const products = users;

  const [cartItems, setcartItems] = useState([]);
  const [open, setOpen] = useState('');

  const onAdd = (product) => {
    const exist = cartItems.find(x => x.id === product.id);
    if (exist) {
      setcartItems(cartItems.map(x => x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x));
      setOpen('added')
    }
    else {
      setcartItems([...cartItems, { ...product, qty: 1 }]);
      setOpen('added')
    }
    console.log(open)
  }

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setcartItems(cartItems.filter((x) => x.id !== product.id))
      //open = "removed"
    } else {
      setcartItems(cartItems.map(x => x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x));
     // open = "removed"

    }
  }

  const onRemoveAll = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setcartItems(cartItems.filter((x) => x.id !== product.id))
     // open = "removed";
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Paper style={{ height: '100vh' }}>
        <Router>
          <div className="App">
            <Header cartQuantity={cartItems.length}></Header>

            <Switch>
              <Route path="/cart" component={Cart} >
                <Cart onAdd={onAdd} onRemove={onRemove} onRemoveAll={onRemoveAll} cartItems={cartItems}></Cart>
              </Route>
              <Route path="/" exact component={Home}>
                <Home onAdd={onAdd} products={products}></Home>
              </Route>
            </Switch>
            <SimpleSnackbar open={open}></SimpleSnackbar>
          </div>
        </Router>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
