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

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/products" element={<AllProducts />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/account" element={<Profile />} />
        </Routes>
        {isAuth && <UserMenu user={user} />}
        <Footer />
      </Router>
    </>
  );
}

export default App;
