import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import AdminPage from "../../Admin/AdminPage";
import Table from "react-bootstrap/Table";
import axios from "axios";
import "./product.css";
const Index = () => {
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);

  const handleDelete = (e) => {
    e.preventDefault();
  };
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_URL_LOCALHOST}/api/product/getAllProducts`)
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
      });
  }, []);

  return (
    <div style={{ display: "flex" }}>
      <AdminPage />
      <div style={{ maxWidth: "100%" }} className="col-10">
        <Table striped style={{ marginTop: "30px" }}>
          <thead>
            <tr
              style={{
                textAlign: "center",
                fontWeight: "bold",
                fontSize: "18px",
              }}
            >
              <th>STT</th>
              <th>Mã sản phẩm</th>
              <th>Tên sản phẩm</th>
              <th>Giá</th>
              <th>Ảnh sản phẩm</th>
              <th>Số lượng còn</th>
              <th>Danh mục</th>
              <th>Chức năng</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={product._id.toString()} className="inforProduct">
                <th>{index}</th>
                <th>{product.productCode}</th>
                <th>{product.nameProduct}</th>
                <th>{product.price}</th>
                <th>
                  <img src={product.imgaeProduct} width="80px" alt="" />
                </th>
                <th>{product.quantity}</th>
                <th>{product.category}</th>
                <th>
                  <button className="handleBtn" onClick={handleDelete}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      fill="currentColor"
                      className="bi bi-x"
                      viewBox="0 0 16 16"
                    >
                      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                    </svg>
                  </button>
                  <button className="handleBtn">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      fill="currentColor"
                      className="bi bi-vector-pen"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.646.646a.5.5 0 0 1 .708 0l4 4a.5.5 0 0 1 0 .708l-1.902 1.902-.829 3.313a1.5 1.5 0 0 1-1.024 1.073L1.254 14.746 4.358 4.4A1.5 1.5 0 0 1 5.43 3.377l3.313-.828L10.646.646zm-1.8 2.908-3.173.793a.5.5 0 0 0-.358.342l-2.57 8.565 8.567-2.57a.5.5 0 0 0 .34-.357l.794-3.174-3.6-3.6z"
                      />
                      <path
                        fillRule="evenodd"
                        d="M2.832 13.228 8 9a1 1 0 1 0-1-1l-4.228 5.168-.026.086.086-.026z"
                      />
                    </svg>
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Index;
