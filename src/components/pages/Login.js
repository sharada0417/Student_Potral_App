import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../css/Login.css'
import Footer from "../Footer";

function Login(){
    const navigate = useNavigate();
    const [user, setUser] = useState({ username: "", pwd: "", error: "" })
    const getTextInput =(e)=>{
        const {name,value}=e.target;
        setUser((prevUser)=>({
            ...prevUser,[name]:value,
        }))
    }
    const aunthenticate = () => {
        //console.log(user);
        if (user.username === "Admin" && user.pwd === "abc@123") {
            setUser({ username: "", pwd: "", error: "" })
            navigate('/home');
        } else {
            setUser({'error':"Please check your username and password !"})
        }


    }
    return (
        <>
        <div className="my-outlier">
        <div className="my-fulldiv">
            <h1 >Login </h1>
            <table>
                <tr>
                    <td>Username:</td>
                    <td><input type="text" name="username"  onChange={getTextInput}/></td>
                </tr>
                <br/>
                <tr>
                    <td>Password:</td>
                    <td><input type="password" name="pwd" onChange={getTextInput} /></td>
                </tr>
                <tr>
                    <td style={{ color: 'red' }} colSpan={2}>{user.error}</td>
                </tr>
            </table>
            <button onClick={aunthenticate}>Login</button>
        </div>
        </div>
        <Footer/>
        </>
    );
}
export default Login;