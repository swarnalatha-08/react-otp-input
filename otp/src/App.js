// npm install --save otp-input-react
// npm i react-otp-input

// import { useState } from "react";
import "./App.css";
// import OTPInput, { ResendOTP } from "otp-input-react";
// import OtpInput, { onResendClick } from "react-otp-input";
// import OtpInput from 'react18-input-otp';
import ReactOtpInput from "./reactotp";

function App() {
  // const [OTP, setOTP] = useState("");
  // const [otp, setOtp] = useState("");
  // const styles = {
  //   border: "1px solid red",
  // };
  // const handlePaste = (e) => {
  //   const pastedText = e.clipboardData.getData('numeric');
  //   setOtp(pastedText);
  //   e.preventDefault();
  // };
  // const handleKeyDown = (e) => {
  //   if (e.ctrlKey && e.key === 'v') {
  //     const pastedText = navigator.clipboard.readText().then((text) => {
  //       setOtp(text);
  //     });
  //     e.preventDefault();
  //   }
  // };
  return (
    <div className="App">
      <ReactOtpInput />
      {/* <div>
        <ResendOTP
          onResendClick={() => console.log("Resend clicked", OTP, otp)}
        />
      </div> */}
      {/* <OTPInput
        value={OTP}
        onChange={setOTP}
        autoFocus={true}
        // OTPLength={6}
        otpType="number"
        disabled={false}
        secure={false}
        style={styles}
      /> */}
      {/* <div>.</div> */}
      {/* <OtpInput
        // onPaste={handlePaste}
        // onKeyDown={handleKeyDown}
        value={otp}
        onChange={setOtp}
        numInputs={4}
        inputStyle={{
          width: "3rem",
          height: "3rem",
          margin: "20px 1rem",
          fontSize: "2rem",
          borderRadius: 4,
          border: "1px solid rgba(0,0,0,0.3)",
        }}
        inputType="numeric"
        // renderSeparator={<span>-</span>}
        renderInput={(props) => <input {...props} />}
        containerStyle={styles}
        // shouldAutoFocus={true}
      /> */}
    </div>
  );
}

export default App;
