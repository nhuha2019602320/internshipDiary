import "./home.css";
import axios from 'axios'
import { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
const HomePage = () => {
  const [listProduct, setListProduct] = useState([]);
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_URL_LOCALHOST}/api/product/getAllProducts`)
        .then((res) => setListProduct(res.data))
  },[])
  return (
    <div className="home-container">
      <div className="home-title">User List</div>
      <div className="home-userlist">
        {listProduct.map((item, index) => {
          return (
            <div key={index}>
              <div className="home-user">{item.nameProduct}</div>
              {/* <div className="home-user">{item.imgaeProduct}</div> */}
              <img src={`${item.imgaeProduct}`} alt="" />
              <div className="home-user">{item.quantity}</div>
            </div>
          );
        })}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default HomePage;
