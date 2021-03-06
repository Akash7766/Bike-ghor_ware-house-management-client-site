import "animate.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Shared/Login/Login";
import Signup from "./Pages/Shared/Signup/Signup";
import Reset from "./Pages/Shared/Reset/Reset";
import Home from "./Pages/Home/Home";
import Header from "././Pages/Home/Header/Header";
import Footer from "./Pages/Shared/Footer/Footer";
import ManageInventory from "./Pages/ManageInventory/ManageInventory";

import SingleInventory from "./Pages/Shared/SingleInventory/SingleInventory";
import AddProduct from "./Pages/AddProduct/AddProduct";
import MyItem from "./Pages/MyItem/MyItem";
import RequireAuth from "./Pages/Shared/RequireAuth/RequireAuth";
import NotFound from "./Pages/Shared/NotFound/NotFound";
import Blog from "./Pages/Blog/Blog";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="/reset" element={<Reset></Reset>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
        <Route
          path="/addproduct"
          element={
            <RequireAuth>
              <AddProduct></AddProduct>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/myitem"
          element={
            <RequireAuth>
              <MyItem></MyItem>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/manage"
          element={
            <RequireAuth>
              <ManageInventory></ManageInventory>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/inventory/:id"
          element={
            <RequireAuth>
              <SingleInventory></SingleInventory>
            </RequireAuth>
          }
        ></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
