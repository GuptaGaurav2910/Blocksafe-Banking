import './form.css';
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

function Login() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    pass: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = () => {
    if (!values.email || !values.pass) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);
    signInWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        
        navigate("/");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };

  return (
    <div>
    <div className="auth">
      {/* {error && <p className="error-message">{error}</p>} */}
          <form action="" class="sign-in-form">
              <h2 class="title">Login</h2>
              <div class="input-field">
                  <i class="fa fa-user icon"></i>
                  <input type="text" placeholder="Username"  onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }/>
              </div>
              <div class="input-field">
                  <i class="fa fa-key icon"></i>
                  <input type="password" placeholder="Password"  onChange={(event) =>
            setValues((prev) => ({ ...prev, pass: event.target.value }))
          }/>
              </div>
              <a href="#" class="forgot-password">Forgot password?</a>

              <b>{errorMsg}</b>

              <input type="submit" value="Login" class="btn" disabled={submitButtonDisabled} onClick={handleSubmission}/>
              <p>Don't have an account?{" "}<span><Link to="/signup" class="account-text" id="sign-up-link">Signup</Link></span> </p>
          </form>
    </div>
  </div>
  )
}

export default Login