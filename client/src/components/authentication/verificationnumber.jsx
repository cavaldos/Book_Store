import { BsFillShieldLockFill, BsTelephoneFill } from "react-icons/bs";
import { CgSpinner } from "react-icons/cg";
import { useLocation, useNavigate } from 'react-router-dom';
import OtpInput from "otp-input-react";
import { useState } from "react";
// import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { auth } from "./firebase.config";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { toast, Toaster } from "react-hot-toast";
import './verifynumber.scss'


const VerificationNumber = () => {
  const location = useLocation();
  const navigate = useNavigate();

  console.log(location.state.phonenumber);

  const [otp, setOtp] = useState("");
  const [ph, setPh] = useState("");
  const [loading, setLoading] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [user, setUser] = useState(null);

  function onCaptchVerify() {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            onSignup();
          },
          "expired-callback": () => {},
        },
        auth
      );
    }
  }

  function onSignup() {
    setLoading(true);
    onCaptchVerify();

    const appVerifier = window.recaptchaVerifier;

    const formatPh = "+" + location.state.phonenumber;

    signInWithPhoneNumber(auth, formatPh, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setLoading(false);
        setShowOTP(true);
        toast.success("OTP sended successfully!");
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }

  function onOTPVerify() {
    setLoading(true);
    window.confirmationResult
      .confirm(otp)
      .then(async (res) => {
        console.log(res);
        setUser(res.user);
        setLoading(false);

        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }

  return (
    <section style={{ backgroundColor: "#1c1a1b", display: "flex", alignItems: "center", justifyContent: "center", minHeight: "100vh" }}>
      <div>
        <Toaster toastOptions={{ duration: 4000 }} />
        <div id="recaptcha-container"></div>
        {user ? (
          <h2 style={{ color: "white", fontSize: "1.5rem", textAlign: "center", fontWeight: "bold" }}>
            👍Login Success
          </h2>
        ) : (
          <div style={{ width: "23rem", display: "flex", flexDirection: "column", gap: "1rem", borderRadius: "0.5rem", padding: "1rem", backgroundColor: "white" }}>
            <h1 style={{ color: "#1c1a1b", fontSize: "1.875rem", textAlign: "center", fontWeight: "bold", marginBottom: "1.5rem" }}>
              VERIFICATION STEP <br /> BEFORE CREATE ACCOUNT
            </h1>
            {showOTP ? (
              <>
                <div style={{ backgroundColor: "white", color: "#1c1a1b", width: "fit-content", margin: "0 auto", padding: "1rem", borderRadius: "50%" }}>
                  <BsFillShieldLockFill size={50} />
                </div>
                <label
                  htmlFor="otp"
                  style={{ color: "#1c1a1b", fontSize: "1.25rem", fontWeight: "bold", textAlign: "center" }}
                >
                  Enter your OTP
                </label>
                <OtpInput
                  value={otp}
                  onChange={setOtp}
                  OTPLength={6}
                  otpType="number"
                  disabled={false}
                  autoFocus
                  className="opt-container"
                ></OtpInput>
                <button
                  onClick={onOTPVerify}
                  style={{ backgroundColor: "#1c1a1b", width: "100%", display: "flex", gap: "0.25rem", alignItems: "center", justifyContent: "center", padding: "0.625rem", color: "white", borderRadius: "0.25rem" }}
                >
                  {loading && (
                    <CgSpinner size={20} style={{ marginTop: "0.25rem", animation: "spin 1s linear infinite" }} />
                  )}
                  <span>Verify OTP</span>
                </button>
              </>
            ) : (
              <>
                <div style={{ backgroundColor: "#1c1a1b", color: "#FFFFFF", width: "fit-content", margin: "0 auto", padding: "1rem", borderRadius: "50%" }}>
                  <BsTelephoneFill size={50} />
                </div>
                <label
                  htmlFor=""
                  style={{ color: "#1c1a1b", fontSize: "1.25rem", fontWeight: "bold", textAlign: "center" }}
                >
                  Verify your phone number:
                </label>
                <p style={{ color: "#1c1a1b",textAlign: "center"}}>+{location.state.phonenumber}</p>
                {/* <PhoneInput country={"in"} value={ph} onChange={setPh} /> */}
                <button
                  onClick={onSignup}
                  style={{ backgroundColor: "#1c1a1b",display: "flex", width: "100%", display: "flex", gap: "0.25rem", alignItems: "center", justifyContent: "center", padding: "0.625rem", color: "white", borderRadius: "0.25rem" }}
                >
                  {loading && (
                    <CgSpinner size={20} style={{ marginTop: "0.25rem", animation: "spin 1s linear infinite" }} />
                  )}
                  <span>Send code via SMS</span>
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default VerificationNumber;