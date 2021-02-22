import React, { useState } from 'react';
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
  const { cartItems, onAdd, onRemove, onRemoveAll } = props;
  var finalcost = 0;

  /*const cart = cartItems.map((item) => (
    <div key={item.id} className="row">
      <div className="col-2">
        <button onClick={() => onRemoveAll(item)} className="badge">x</button>
      </div>
      <div className="col-2">
        <button onClick={() => onAdd(item)} className="add">+</button>
        <button className="add">{item.qty}</button>
        <button onClick={() => onRemove(item)} className="remove">-</button>
      </div>
      <br />
    </div>
  ));*/

  const Cost = cartItems.map((item) => {
    finalcost = finalcost + (item.qty * item.Price)
  });
  const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });

  const classes = useStyles();
  /*function ccyFormat(num) {
    return `${num.toFixed(2)}`;
  }*/

  /*function priceRow(qty, unit) {
    return qty * unit;
  }*/


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
                  <CancelIcon onClick={() => onRemoveAll(item)} color="error" fontSize="large"></CancelIcon>
                </div>
              </TableCell>
              <TableCell>{item.Name}</TableCell>
              <TableCell align="right">₹{item.Price}</TableCell>
              <TableCell align="center">
                <div className="stepper-row">
                  <AddCircleIcon onClick={() => onAdd(item) } fontSize="large" color="primary"></AddCircleIcon>
                  <Chip size="medium" label={item.qty} />
                  <RemoveCircleIcon onClick={() => onRemove(item)} fontSize="large" color="secondary"></RemoveCircleIcon>
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

  );
  {/* <aside className="block-cart col-1">
            <h2>
                Cart Items
            </h2>
            <div>
                {cartItems.length === 0 && <div>Cart is Empty</div>}
            </div>

            <div>
                {cartItems.length !== 0 &&
                    <div className="row">
                        <h4>Cancel</h4>
                        <h4>Name</h4>
                        <h4>Price</h4>
                        <h4 >Quantity</h4>
                        <h4>Total Price</h4>
                    </div>}
            </div>

            {cart}

            <div>
                {cartItems.length !== 0 &&
                    <div>
                        <hr></hr>
                        <div className="row">
                            <h4>Total Cost</h4>
                            <h4 className="text-right">{Cost}Rs.{finalcost}</h4>
                        </div>
                    </div>}
            </div>
                </aside>*/}
}
