import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./pages/Home.jsx";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import About from "./pages/About.jsx";
import Register from "./pages/Auth/Register.jsx";
import Login from "./pages/Auth/Login.jsx";
import ForgotPassword from "./pages/Auth/ForgotPassword.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import Contact from "./pages/Contact.jsx";
import AdminRoute from "./components/Routes/AdminRoute.jsx";
import AdminDashboard from "./pages/Admin/AdminDashboard.jsx";
import UserRoute from "./components/Routes/UserRoute.jsx";
import UserDashboard from "./pages/User/UserDashboard.jsx";
import CreateCategory from "./pages/Admin/CreateCategory.jsx";
import CreateProduct from "./pages/Admin/CreateProduct.jsx";
import UpdateProducts from "./pages/Admin/UpdateProducts.jsx";
import AllUsers from "./pages/Admin/AllUsers.jsx";
import AdminProfile from "./pages/Admin/AdminProfile.jsx";
import Products from "./pages/Admin/Products.jsx";
import CategoryProduct from "./pages/CategoryProduct.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";
import CartPage from "./components/cartPage.jsx";
import Checkout from "./pages/Checkout.jsx";
import PaymentSuccess from "./pages/PaymentSuccess.jsx";
import AdminOrders from "./pages/Admin/AdminOrders.jsx";
import UserOrder from "./pages/User/UserOrder.jsx";
import UserProfile from "./pages/User/UserProfile.jsx";
import Shipping from "./pages/Shipping.jsx";
import Search from "./pages/Search.jsx";

function App() {
  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        
        <Route path="/product/shipping" element={<Shipping/>}/>        <Route path="/product/checkout" element={<Checkout />} />
        <Route path="/paymentsuccess" element={<PaymentSuccess />} />

        <Route path="/category/:slug" element={<CategoryProduct />} />
        <Route path="/product/:slug" element={<ProductDetails />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/search" element={<Search />} />

        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="admin/create-category" element={<CreateCategory />} />
          <Route path="admin/create-product" element={<CreateProduct />} />
          <Route path="admin/products" element={<Products />} />
          <Route path="admin/product/:slug" element={<UpdateProducts />} />
          <Route path="admin/all-users" element={<AllUsers />} />
          <Route path="admin/admin-profile" element={<AdminProfile />} />
          <Route path="admin/orders" element={<AdminOrders />} />
        </Route>

        <Route path="/dashboard" element={<UserRoute />}>
          <Route path="user" element={<UserDashboard />} />
          <Route path="user/orders" element={<UserOrder />} />
          <Route path="user/profile" element={<UserProfile />} />
          {/* <Route path="user/profile" element={<Profile />} /> */}
        </Route>

        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
