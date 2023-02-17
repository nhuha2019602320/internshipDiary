import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./Components/Home/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import NavBar from "./Components/NavBar/NavBar";
import AdminPage from "./Components/Admin/AdminPage";
import Users from "./Components/pages/Users/index";
import Products from "./Components/pages/Products/index";
import Caterories from "./Components/pages/Caterories/index";
import "bootstrap/dist/js/bootstrap.js";
import { useSelector } from "react-redux";

function App() {
  const { login } = useSelector((state) => state.auth);
  return (
    <Router>
      {/* <NavBar /> */}
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/admin" element={<AdminPage />} />
          <Route path="/login" element={<Login />} />

          <Route path="/register" element={<Register />} />
          <Route path="/users" element={<Users />} />
          <Route path="/products" element={<Products />} />
          <Route path="/categories" element={<Caterories />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

// A = {
//   s:{
//     i: a
//   }
// } A?.s?.i?.a = A && A.s &&
