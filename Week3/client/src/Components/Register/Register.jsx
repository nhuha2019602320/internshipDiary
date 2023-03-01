import { useState } from "react";
import { useDispatch } from "react-redux";
import { registerAccout } from "../../redux/apiRequest";
import "./register.css";
import { useNavigate } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
const Register = () => {
    const [email, setEmail] = useState("");
    const [userName, setUserName] = useState("");
    const [phoneNumber, setPhoneNuber] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();   
        if(
            !email.match(process.env.REACT_APP_REGEX) &&
            userName !== "" &&
            password === confirmPassword

        ){
            let newUser = {
                userName: userName,
                email: email,
                phoneNumber: phoneNumber,
                password: password
            }
            console.log(process.env.REACT_APP_REGEX);
            registerAccout(newUser, dispatch, navigate)

        } else {
            console.log("infomation is not correct");
        }

    }

    return ( 
        <div className="register">
<NavBar />
        <section className="register-container">
              <div className="register-title">Đăng Ký Tài Khoản</div>
            <form>
                <label>EMAIL</label>
                <input type="text" placeholder="Enter your email"  onChange={(e) => setEmail(e.target.value)}/>
                <label>Tên Tài Khoản</label>
                <input type="text" placeholder="Enter your username" onChange={(e) => setUserName(e.target.value)}/>
                <label>Số Điện Thoại</label>
                <input type="text" placeholder="Enter your username" onChange={(e) => setPhoneNuber(e.target.value)}/>
                <label>Mật Khẩu</label>
                <input type="password" placeholder="Enter your password" onChange={(e)=> setPassword(e.target.value)}/>
                <label>Nhập Lại Mật Khẩu</label>
                <input type="password" placeholder="Enter your password" onChange={(e)=> setConfirmPassword(e.target.value)}/>
                <button type="submit" onClick={handleSubmit}>Tạo Tài Khoản</button>
            </form>
        </section>
        </div>
        
     );
}
 
export default Register;