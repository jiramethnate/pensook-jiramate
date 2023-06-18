import "./CheckoutScreen.css";
import { useSelector, useDispatch } from "react-redux";
import { Link, useLocation, withRouter } from "react-router-dom";
import { Dialog, DialogTitle } from "@mui/material";
import React, { useState } from "react";
import { Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";

// Components
import CheckoutItem from "../components/CheckoutItem";

// Actions
import { updateProduct } from "../redux/actions/productActions";
import useLogin from "../utils/hooks/useLogin";

const CheckoutScreen = ({ history }) => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const dispatch = useDispatch();
  const location = useLocation();
  const checkoutItems = location.state.data;
  console.log(checkoutItems);

  //const cart = useSelector((state) => state.cart);

  const { loginInfo } = useLogin();

  //   const qtyChangeHandler = (id, qty) => {
  //     dispatch(addToCart(id, qty));
  //   };

  //   const removeFromCartHandler = (item) => {
  //     dispatch(removeFromCart({ pId: item.product, _id: item._id }));
  //   };

  const getCheckoutCount = () => {
    return checkoutItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  const getCheckoutGrandTotal = () => {
    return checkoutItems
      .reduce((price, item) => price + item.price * item.qty, 0)
      .toFixed(2);
  };

  const getCheckoutVAT = () => {
    return ((getCheckoutGrandTotal() * 7) / 107).toFixed(2);
  };

  const getCheckoutSubtotal = () => {
    return (getCheckoutGrandTotal() - getCheckoutVAT()).toFixed(2);
  };

  const handleProceedBtn = () => {
    dispatch(updateProduct(checkoutItems));
    setOpenSnackbar(true);

    setTimeout(() => {
      setOpenSnackbar(false);
      history.push("/");
      window.location.reload();
    }, 3000);
  };

  if (loginInfo.loading) return <h1>Loading.....</h1>;
  else if (!loginInfo.loading && loginInfo.isLogin)
    return (
      <>
        <div className="checkoutscreen">
          <div className="checkoutscreen__left">
            <h2>Checkout</h2>

            {checkoutItems.length === 0 ? (
              <div>
                Your Checkout Is Empty <Link to="/">Go Back</Link>
              </div>
            ) : (
              checkoutItems.map((item) => (
                <CheckoutItem
                  key={item.product}
                  item={item}
                  //qtyChangeHandler={qtyChangeHandler}
                  //removeHandler={() => removeFromCartHandler(item)}
                />
              ))
            )}
          </div>

          <div className="checkoutscreen__right">
            <div className="checkoutscreen__info">
              <p>Payment for {getCheckoutCount()} items</p>
              <p>Subtotal : {getCheckoutSubtotal()} ฿</p>
              <p>Include VAT. : {getCheckoutVAT()} ฿</p>
              <p>
                <b>Grand Total : {getCheckoutGrandTotal()} ฿</b>
              </p>
            </div>
            <div>
              <button
                title="Functionality need to be add."
                onClick={handleProceedBtn}
              >
                Purchase
              </button>
              <Snackbar
                open={openSnackbar}
                autoHideDuration={2000}
                onClose={() => setOpenSnackbar(false)}
              >
                <MuiAlert elevation={6} variant="filled" severity="success">
                  Purchase Success
                </MuiAlert>
              </Snackbar>
            </div>
          </div>
        </div>
      </>
    );
};

export default CheckoutScreen;
