import React, { useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

const VerifyOtpPage = () => {
  const [otp, setOtp] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state.email;

  const handleVerifyOtp = async () => {
    try {
      const response = await axios.post('http://localhost:5000/verify_otp', { email, otp });
      alert(response.data.message);
      if (response.data.message.includes('logged in')) {
        navigate('/');
      }
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div className="verify-otp">
      <h2>Verify OTP</h2>
      <input
        type="text"
        placeholder="Enter OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
      />
      <button onClick={handleVerifyOtp}>Verify OTP</button>
    </div>
  );
};

export default VerifyOtpPage;
