import React, { useEffect, useState } from "react";
import AdminPage from "../../Admin/AdminPage";
import Table from "react-bootstrap/Table";
import axios from "axios";
import "./product.css";
import { DeleteProduct, UpdateProduct } from "../../../services/product";
import CreateProduct from "./CreateProduct";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import NavBar from "../../NavBar/NavBar";
// import { Pagination } from "antd";

const Index = () => {
  const [products, setProducts] = useState([]);
  const [productCode, setProductCode] = useState("");
  const [nameProduct, setNameProduct] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [imgProduct, setImgProduct] = useState(null);
  const [urlImg, setUrlImg] = useState("");
  const [description, setDescription] = useState("");
  const [show, setShow] = useState(false);

  ////////////////////////////////
  // const [total, setTotal] = useState("");
  // const [page, setPage] = useState(1);
  // const [postPerPage, setPostPerPage] = useState(10);
  // /////////////////////////

  // const indexOfLastPage = page + postPerPage;
  // const indexOfFirstPage = indexOfLastPage - postPerPage;
  // const currentPosts = products.slice(indexOfFirstPage, indexOfLastPage);

  // const onShowSizeChange = (curent, pageSize) => {
  //   setPostPerPage(pageSize);
  // };

  // const itemRender = (curent, type, originnalElement) => {
  //   if (type === "prev") return <a>Previous</a>;
  //   if (type === "next") return <a>Next</a>;

  //   return originnalElement;
  // };

  /////////////////////

  const handleClose = () => setShow(false);
  const handleShow = (id) => {
    setShow(true);
    console.log("idnay", id);
    localStorage.setItem("idProductUpdate", id);
  };

  const handleDelete = (e, id, index) => {
    e.preventDefault();
    DeleteProduct(id);

    setProducts(products.filter((o, i) => index !== i));
  };

  const handleUpdateProduct = () => {
    const idProductUpdate = localStorage.getItem("idProductUpdate")

    const product = {
      productCode: productCode,
      nameProduct: nameProduct,
      price: price,
      imgaeProduct: urlImg,
      quantity: quantity,
      description: description
  }
    console.log("13123123", product);
    UpdateProduct(product, idProductUpdate)
    localStorage.clear();
  }

  const upLoadImage =  (e) => {
    // setImgProduct(e.target.files[0]);
    console.log("img ", imgProduct);
    const formData = new FormData();
    formData.append("file", imgProduct);
    formData.append("upload_preset", "rahh7f3b");
      axios
    .post(
      "https://api.cloudinary.com/v1_1/uploadimgvvv/image/upload",
      formData
      )
      .then((res) => setUrlImg(res.data.url));
      console.log(urlImg);
      //   console.log(productCode, nameProduct, price, quantity, description);
    };
    

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_URL_LOCALHOST}/api/product/getAllProducts`)
      .then((res) => {
        console.log("product", res.data);
        setProducts(res.data);
        /////////////////
        // setTotal(res.data.length);
        /////////////////////////
      });
  }, []);

  return (
    <div style={{ display: "flex" }}>
      <AdminPage />
      <div style={{ maxWidth: "100%" }} className="col-10">
      <NavBar/>
        <CreateProduct/>
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
              {/* <th>Danh mục</th> */}
              <th>Chức năng</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr
                key={product._id.toString()}
                className="inforProduct"
                id="product"
              >
                <th>{index}</th>
                <th>{product.productCode}</th>
                <th>{product.nameProduct}</th>
                <th>{product.price}</th>
                <th>
                  <img src={product.imgaeProduct} width="80px" alt="" />
                </th>
                <th>{product.quantity}</th>
                {/* <th>{product.category}</th> */}
                <th>
                  <button
                    className="handleBtn"
                    onClick={(e) => handleDelete(e, product._id, index)}
                  >
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
                      onClick={() => handleShow(product._id)}
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
        {/* <div>
        <Pagination
          onChange={(value) => setPage(value)}
          pageSize={postPerPage}
          total={total}
          current={page}
          showSizeChanger
          showQuickJumper
          onShowSizeChange={onShowSizeChange}
          itemRender={itemRender}
        />
      </div> */}
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sửa thông tin sản phẩm</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="edit">
            <label htmlFor="">Mã sản phẩm</label>
            <input
              type="text"
              onChange={(e) => setProductCode(e.target.value)}
            />
            <label>Tên sản phẩm</label>
            <input
              type="text"
              onChange={(e) => setNameProduct(e.target.value)}
            />
            <label htmlFor="">Giá</label>
            <input type="text" onChange={(e) => setPrice(e.target.value)} />
            <label htmlFor="">Ảnh sản phẩm</label><br></br>
            <input
              type="file"
              onChange={ (event) => {
                  setImgProduct(event.target.files[0])
                  // const formData = new FormData();
                  // formData.append("file", imgProduct);
                  // formData.append("upload_preset", "rahh7f3b");
                  // await axios.post('https://api.cloudinary.com/v1_1/uploadimgvvv/image/upload',formData).then((res) => console.log(res))
              }}
              // onChange={(e) => upLoadImage(e)}
              style={{width: "350px"}}
            />
            <button type="submit" onClick={upLoadImage}>Gửi ảnh</button><br></br>
            <label htmlFor="">Số lượng</label>
            <input type="text" onChange={(e) => setQuantity(e.target.value)} />
            <label htmlFor="">Mô tả</label>
            <input
              type="text"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary" onClick={handleUpdateProduct}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      {/* <div>
        <Pagination
          onChange={(value) => setPage(value)}
          pageSize={postPerPage}
          total={total}
          current={page}
          showSizeChanger
          showQuickJumper
          onShowSizeChange={onShowSizeChange}
          itemRender={itemRender}
        />
      </div> */}
    </div>
  );
};

export default Index;
