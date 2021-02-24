import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { addToCart, removeAllQuantity, removeFromCart } from '../redux'
import Chip from '@material-ui/core/Chip';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import CancelIcon from '@material-ui/icons/Cancel';
import { Button } from '@material-ui/core';

export default function Cart(props) {
  var finalcost = 0;

  const cartItems = useSelector(state => state.cart.cartItems);
  const dispatch = useDispatch()

  const Cost = cartItems.map((item) => {
    finalcost = finalcost + (item.qty * item.Price)
  });
  const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });

  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="spanning table">
        <TableHead>

          <TableRow>
            <TableCell align="left" colSpan={4}>
              <h2>Cart Items</h2>
            </TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>

          <TableRow>
            <TableCell><h4>Cancel</h4></TableCell>
            <TableCell><h4>Item Name</h4></TableCell>
            <TableCell align="right"><h4>Unit Price</h4></TableCell>
            <TableCell align="center"><h4>Quantity</h4></TableCell>
            <TableCell align="right"><h4>Sum</h4></TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {cartItems.map((item) => (
            <TableRow key={item.id}>
              <TableCell>
                <div className="col-2">
                  <CancelIcon onClick={() => dispatch(removeAllQuantity(item))} color="error" fontSize="large"></CancelIcon>
                </div>
              </TableCell>
              <TableCell>{item.Name}</TableCell>
              <TableCell align="right">₹{item.Price}</TableCell>
              <TableCell align="center">
                <div className="stepper-row">
                  <AddCircleIcon onClick={() => dispatch(addToCart(item))} fontSize="large" color="primary"></AddCircleIcon>
                  <Chip size="medium" label={item.qty} />
                  <RemoveCircleIcon onClick={() => dispatch(removeFromCart(item))} fontSize="large" color="secondary"></RemoveCircleIcon>
                </div>
              </TableCell>
              <TableCell align="right">₹{item.qty * item.Price}</TableCell>
            </TableRow>

          ))}

          <TableRow>
            <TableCell colSpan={4}><h3>Total</h3></TableCell>
            <TableCell align="right"><h3>{Cost}₹{finalcost}</h3></TableCell>
          </TableRow>

        </TableBody>
      </Table>
    </TableContainer>

  )
}
