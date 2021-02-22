/*import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Link } from 'react-router-dom';
import ShopIcon from '@material-ui/icons/Shop';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';
export default function Header(props) {

  const { cartQuantity } = props;
  const useStyles = makeStyles((theme) => ({

    root: {
      flexGrow: 1,
    },
    icon: {
      marginRight: theme.spacing(1),
    },
    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
      link: {
        marginRight: theme.spacing(4)
      }
    }
  }));
  const classes = useStyles();


  return (

    <React.Fragment>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <ShopIcon edge="start" className={classes.icon} fontSize="large" />
            <Typography className={classes.title} href="#/" variant="h6" color="inherit">
              EShop
            </Typography>
            <div align="nav-links">
              <Link to="/">Products</Link> <Link to="/cart"><ShoppingCartIcon fontSize="medium" ></ShoppingCartIcon ></Link> {cartQuantity !== 0 && <Badge badgeContent={cartQuantity} color="secondary"></Badge>}
            </div>
          </Toolbar>

        </AppBar>
      </div>
    </React.Fragment>
  );*/


import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';
import ShopIcon from '@material-ui/icons/Shop';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles();
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

export default function BackToTop(props) {
  const classes = useStyles();
  const { cartQuantity } = props;

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar>
        <Toolbar>
          <Typography variant="h6"><h2 className="title">Eshop</h2></Typography>
          <div className="nav-buttons-container row">
            <Button className="nav-buttons"><Link to="/">Products</Link></Button>
            <Button className="nav-buttons"><Link to="/cart"><ShoppingCartIcon fontSize="medium" ></ShoppingCartIcon > {cartQuantity !== 0 && <Badge badgeContent={cartQuantity} color="secondary"></Badge>}</Link></Button>
          </div>
        </Toolbar>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />
      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
}

/* {<header className=" row block-head center">
           <div>
               <a href="#/"><h1>eShop</h1></a>
           </div>
           <div>
               <Link to="/">Products</Link>
           </div>
           <div>
               <Link to="/cart">Cart</Link> {cartQuantity !== 0 && <button className="badge">{cartQuantity}</button>}
           </div>
       </header>
   }
}*/
