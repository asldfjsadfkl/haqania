import React from 'react';
import './otp.css'

const OtpVerification = () => {


    const submitOtp = async (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const data = Object.fromEntries(form);
        console.log(data);
    }


    return (
        <main className='main-otp'>

            <form method='POST' className='form-otp' onSubmit={submitOtp}>
                <h3 style={{ "textAlign": "center" }}>The verification code sent to you on your number</h3>
                <input className="input-otp-code" name='verifycode' autoComplete="off" maxLength={3} placeholder='Verification Code' required type="number" />
                <button className='verify-Button-otp' type='submit'>Verify</button>
            </form>


        </main>

    )
}

export default OtpVerification