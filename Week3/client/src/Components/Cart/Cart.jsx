import { Container, Row, Col, Button } from "react-bootstrap";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  MDBBtn,
  MDBCardImage,
  MDBCol,
  MDBIcon,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./cart.css";
const Cart = () => {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  const cartLists = cart.cartlists;
  console.log("carts/cart", cartLists);
  const priceListProduct = cartLists.map(a => a.price)
  const convertPriceListProduct = priceListProduct.map(str => {
    return parseInt(str, 10);
  });
  convertPriceListProduct.reduce((a, b) => a + b, 0)

  const handlePay = () => {
    toast.success("Thanh toán thành công. Cảm ơn quý khách đã tin tưởng của hàng!");
    // alert("Thanh toán thành công. Cảm ơn quý khách đã tin tưởng của hàng!")
  }

  const notify = () => toast("Wow so easy!");
  return (
    <Container style={{ marginTop: "30px", width:"100%", textAlign:"center" }}>
      <Row>
        <Col style={{ backgroundColor: "white", borderRight: "1px" }} xs={8}>
          <Row>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h3>Giỏ Hàng Của bạn</h3>
            </div>
          </Row>
          {cartLists.map((item, id) => (
            <MDBRow className="mb-4 d-flex justify-content-between align-items-center" key ={id}>
              <MDBCol md="2" lg="2" xl="2">
                <MDBCardImage
                  src={item.imgaeProduct}
                  fluid
                  className="rounded-3"
                  alt="Cotton T-shirt"
                />
              </MDBCol>
              <MDBCol md="3" lg="3" xl="3">
                <MDBTypography tag="h6" className="text-muted">
                  {item.productCode}
                </MDBTypography>
                <MDBTypography tag="h6" className="text-black mb-0">
                  {item.nameProduct}
                </MDBTypography>
              </MDBCol>
              <MDBCol
                md="3"
                lg="3"
                xl="3"
                className="d-flex align-items-center"
              >
                <MDBBtn color="link" className="px-2">
                  <MDBIcon fas icon="minus" />
                </MDBBtn>

                <input type="text" defaultValue={1} />

                <MDBBtn color="link" className="px-2">
                  <MDBIcon fas icon="plus" />
                </MDBBtn>
              </MDBCol>
              <MDBCol md="3" lg="2" xl="2" className="text-end">
                <MDBTypography tag="h6" className="mb-0">
                  € {item.price}
                </MDBTypography>
              </MDBCol>
              <MDBCol md="1" lg="1" xl="1" className="text-end">
                <a href="#!" className="text-muted">
                  <MDBIcon fas icon="times" />
                </a>
              </MDBCol>
              <MDBCol md="1" lg="1" xl="1" className="text-end">
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-x-lg"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                  </svg>
                </button>
              </MDBCol>
              <hr className="my-3" />
            </MDBRow>
          ))}
          <Button variant="success" onClick={() => navigate("/")}>Tiếp Tục Mua Hàng</Button>&emsp;
          
        </Col>
        <Col className="sumanry">
        <Row style={{marginTop:"50%"}}>
          <h3>Thanh Toán</h3>
            <div>
                <div  style={{display:"flex", justifyContent:"space-around", alignItems:"center"}}>
                  <h5>Tổng sản phẩm: <b>{cartLists.length}</b></h5>
                </div>
            </div>
            <h5>
              <b>Tổng thành tiền :</b> {convertPriceListProduct.reduce((a, b) => a + b, 0)} VND</h5>
          </Row>
          <Button variant="success" onClick={handlePay}>Thanh Toán<ToastContainer /></Button>&emsp;
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;
