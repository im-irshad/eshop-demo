import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, CardMedia } from "@mui/material";
import { rmvItFromCart } from "../../redux/actions/cartAction";
import EmptyCart from "./EmptyCart";
import { Typography } from "@mui/material";

function Cart() {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cartReducer);
  console.log(cartItems);
  function handleRmvFromCart(id) {
    dispatch(rmvItFromCart(id));
  }
  return (
    <>
      {cartItems.length === 0 ? (
        <EmptyCart />
      ) : (
        <div>
          <TableContainer component={Paper}>
            <Table
              sx={{ width: "50%", alignSelf: "center" }}
              aria-label="simple table"
            >
              <TableHead>
                <TableRow>
                  <TableCell>Image</TableCell>
                  <TableCell align="right">Product</TableCell>
                  <TableCell align="right">Quantity</TableCell>
                  <TableCell align="right">Price</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cartItems.map((item) => (
                  <TableRow
                    key={item._id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      <CardMedia
                        component="img"
                        sx={{ width: 151 }}
                        image={item.image}
                        alt="green iguana"
                      />
                    </TableCell>
                    <TableCell align="right">
                      {item.name}{" "}
                      <Button onClick={() => handleRmvFromCart(item.product)}>
                        Remove
                      </Button>
                    </TableCell>
                    <TableCell align="right">{item.quantity}</TableCell>
                    <TableCell align="right">{item.price}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <hr />

          <Typography align="right" m={3}>{`Total Price: ${cartItems.reduce(
            (acc, item) => acc + item.quantity * item.price,
            0
          )}Kr`}</Typography>
          <Button href="/checkout" variant="contained" size="medium">
            Checkout
          </Button>
        </div>
      )}
    </>
  );
}

export default Cart;
