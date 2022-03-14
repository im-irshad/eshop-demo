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
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route element={<PrivateRoute />}>
            <Route path="/account" element={<Profile />} />
            <Route path="/me/update" element={<UpdateProfile />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
