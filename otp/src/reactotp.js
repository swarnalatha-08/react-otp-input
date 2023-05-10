// https://www.npmjs.com/package/react18-input-otp
// npm i react18-input-otp

import React, { useState } from "react";
import OtpInput from "react18-input-otp";
export default function ReactOtpInput() {
  const [otp, setOtp] = useState("");
  const handleChange = (enteredOtp) => {
    setOtp(enteredOtp);
  };
  return (
    <OtpInput
      value={otp}
      onChange={handleChange}
      numInputs={4}
      isInputNum
      inputStyle={{border:'1px solid red',fontSize:'24px',padding:'16px',margin:'10px'}}
    />
  );
}


