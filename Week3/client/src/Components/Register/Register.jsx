import { useState } from "react";
import { useDispatch } from "react-redux";
import { registerAccout } from "../../redux/apiRequest";
import "./register.css";
import { useNavigate } from "react-router-dom";

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
        <div>
{/* <NavBar /> */}
        <section className="register-container">
              <div className="register-title"> Sign up </div>
            <form>
                <label>EMAIL</label>
                <input type="text" placeholder="Enter your email"  onChange={(e) => setEmail(e.target.value)}/>
                <label>USERNAME</label>
                <input type="text" placeholder="Enter your username" onChange={(e) => setUserName(e.target.value)}/>
                <label>PHONE NUMBER</label>
                <input type="text" placeholder="Enter your username" onChange={(e) => setPhoneNuber(e.target.value)}/>
                <label>PASSWORD</label>
                <input type="password" placeholder="Enter your password" onChange={(e)=> setPassword(e.target.value)}/>
                <label>CONFIRMPASSWORD</label>
                <input type="password" placeholder="Enter your password" onChange={(e)=> setConfirmPassword(e.target.value)}/>
                <button type="submit" onClick={handleSubmit}> Create account </button>
            </form>
        </section>
        </div>
        
     );
}
 
export default Register;