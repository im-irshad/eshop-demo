import { CssBaseline } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AllProducts from "./components/AllProducts.js/AllProducts";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Login from "./components/User/Login";
import SignUp from "./components/User/SignUp";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { loadUser } from "./redux/actions/userAction";
import Profile from "./components/User/Profile";
import UserMenu from "./components/Header/UserMenu";
import { PrivateRoute } from "./components/Route/PrivateRoute";
import UpdateProfile from "./components/User/UpdateProfile";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/CheckOut/Checkout";
import PaymentForm from "./components/CheckOut/PaymentForm";
import AddressForm from "./components/CheckOut/AddressForm";
import Review from "./components/CheckOut/Review";
import MyOrders from "./components/Order/MyOrders";
import OrderDetails from "./components/Order/OrderDetails";
import Dashboard from "./components/Admin/Dashboard";
import OrderList from "./components/Admin/Orders/OrderList";
import ProcessOrder from "./components/Admin/Orders/ProcessOrder";
import ProductReviews from "./components/Admin/Reviews/ProductReviews";
import UpdateUser from "./components/Admin/Users/UpdateUser";
import UsersList from "./components/Admin/Users/UsersList";
import ProductList from "./components/Admin/Product/ProductList";
import NewProduct from "./components/Admin/Product/NewProduct";
import UpdateProduct from "./components/Admin/Product/UpdateProduct";

function App() {
  const dispatch = useDispatch();
  const { isAuth, user } = useSelector((state) => state.UserReducer);
  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <>
      <CssBaseline />
      <Router>
        <Header />
        {isAuth && <UserMenu user={user} />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/products" element={<AllProducts />} />
          <Route path="/products/:keyword" element={<AllProducts />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route element={<PrivateRoute />}>
            <Route path="/account" element={<Profile />} />
            <Route path="/me/update" element={<UpdateProfile />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route element={<PrivateRoute />}>
            <Route path="/checkout" element={<AddressForm />} />
            <Route path="/order/confirm" element={<Review />} />
            <Route path="/process/payment" element={<PaymentForm />} />
            <Route path="/orders" element={<MyOrders />} />
            <Route path="/order/:id" element={<OrderDetails />} />
          </Route>
          <Route element={<PrivateRoute isAdmin={true} />}>
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/products" element={<ProductList />} />
            <Route path="/admin/product" element={<NewProduct />} />
            <Route path="/admin/product/:id" element={<UpdateProduct />} />
            <Route path="/admin/orders" element={<OrderList />} />
            <Route path="/admin/orders/:id" element={<ProcessOrder />} />
            <Route path="/admin/users" element={<UsersList />} />
            <Route path="/admin/user/:id" element={<UpdateUser />} />
            <Route path="/admin/reviews" element={<ProductReviews />} />
          </Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
