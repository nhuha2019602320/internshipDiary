import React from "react";
import AdminPage from '../../Admin/AdminPage'
import Container from "react-bootstrap/esm/Container";
import axios from "axios";
import { useEffect } from "react";
const Index = () => {
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_URL_LOCALHOST}/api/category/getCategory`)
     .then((res) => {
       console.log("list",res.data)
     })
 },[])
  return (
    <div style={{ display: "flex" }}>
      <AdminPage />
      <Container>cateroies</Container>
    </div>
  );
};

export default Index;
