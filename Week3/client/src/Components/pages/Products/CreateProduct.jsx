import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { NewProduct } from "../../../services/product";
const CreateProduct = () => {
  const [show, setShow] = useState(false);
  const [productCode, setProductCode] = useState("");
  const [nameProduct, setNameProduct] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [imgProduct, setImgProduct] = useState(null);
  const [urlImg, setUrlImg] = useState("");
  const [description, setDescription] = useState("");


  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  };

  const upLoadImage =  (e) => {
    setImgProduct(e.target.files[0]);
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
    
    const createProduct = () => {
        const product = {
          productCode: productCode,
          nameProduct: nameProduct,
          price: price,
          imgaeProduct: urlImg,
          quantity: quantity,
          description: description
      }
      NewProduct(product)
   
  }
  return (
    <div>
      <button onClick={handleShow}>Thêm sản phẩm</button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Thay đổi thông tin</Modal.Title>
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
            <label htmlFor="">Ảnh sản phẩm</label>
            <input
              type="file"
              // onChange={async (event) => {
              //     setImgProduct(event.target.files[0])
              //     // const formData = new FormData();
              //     // formData.append("file", imgProduct);
              //     // formData.append("upload_preset", "rahh7f3b");
              //     // await axios.post('https://api.cloudinary.com/v1_1/uploadimgvvv/image/upload',formData).then((res) => console.log(res))
              // }}
              onChange={(e) => upLoadImage(e)}
            />
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
          <Button variant="primary" onClick={createProduct}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CreateProduct;
