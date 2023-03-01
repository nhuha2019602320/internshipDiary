import "./home.css";
import Header from "../Header/Header";
import ListProducts from "../ListProducts/ListProducts";
import Slider from "../Slider/Slider";
import { Container } from "react-bootstrap";
import Footer from "../Footer/Footer"
import { useSelector } from "react-redux";
const HomePage = () => {
  const { login } = useSelector((state) => state.auth);
  return (
    <div>
      <Container>
        <Header />
        <Slider />
        <ListProducts />
      </Container>
      <Footer/>
    </div>
  );
};

export default HomePage;
