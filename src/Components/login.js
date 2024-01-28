import React, { useState } from "react";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import '../Styles/login.css';

import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import {auth} from './firebase/setup'




function Login(){
    const [phone,setphone] = useState("")
    const [user,setuser] = useState(null)
    const [otp,setotp] = useState("")

    const sendOtp = async()=>{

        try{

        const recaptcha = new  RecaptchaVerifier(auth,"recaptcha",{})
        const confirm = signInWithPhoneNumber(auth,phone,recaptcha)
        console.log(confirm)
        setuser(confirm)
        }
        catch(err){
            console.log(err)
        }
    }

    const VerifyOtp = async()=>{
        try{
                const data = await user.confirm(otp)
                console.log(data)
            }
            catch(err){
                console.log(err)
            }
    }







    return(
        <>
        {/* Bootstrap */}
            <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
        crossOrigin="anonymous"
        />

        <link
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
        rel="stylesheet"
        />
         {/* Bootstrap */}
        <div className="otp-login">
            <div className="login-content">
            <PhoneInput
            country={'us'}
            value={phone}
            onChange={(phone)=>setphone("+" +phone)}
        />
        <br></br>
        <button onClick={sendOtp} className="button" sx={{marginTop:"10px"}} >Send Otp</button>
            </div>
            <br></br>
            <div id="recaptcha" ></div>
            <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
            
        </label>
        <input
        onChange={(e)=>setotp(e.target.value)}
        type="number"
        className="form-control"
        id="exampleFormControlInput1"
        placeholder="enter otp"
            />
            </div>
            <div className="login-content">
            <button onClick={VerifyOtp} className="button"  >Verify Otp</button>
            </div>
        </div>
        </>
    )
}

export default Login