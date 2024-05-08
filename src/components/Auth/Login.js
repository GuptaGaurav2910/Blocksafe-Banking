import "./form.css";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { getDatabase, get, ref, child } from "firebase/database";

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
      setErrorMsg("Fill all the fields");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);
    signInWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        try {
          const userRef = ref(getDatabase(), `users/${res.user.uid}`);
          const snapshot = await get(child(userRef, "name"));
          const userName = snapshot.val();
          setSubmitButtonDisabled(false);
          navigate("/");
        } catch (error) {
          console.log("Error fetching data", error);
          setErrorMsg("Error fetching data");
        }
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };

  return (
    <div>
      <div className="auth">
        {errorMsg && <p className="error-message">{errorMsg}</p>}
        <form action="" className="sign-in-form">
          <h2 className="title">Login</h2>
          <div className="input-field">
            <i className="fa fa-user icon"></i>
            <input
              type="text"
              placeholder="Email"
              onChange={(event) =>
                setValues((prev) => ({ ...prev, email: event.target.value }))
              }
            />
          </div>
          <div className="input-field">
            <i className="fa fa-key icon"></i>
            <input
              type="password"
              placeholder="Password"
              onChange={(event) =>
                setValues((prev) => ({ ...prev, pass: event.target.value }))
              }
            />
          </div>
          <a href="#" className="forgot-password">
            Forgot password?
          </a>

          <input
            type="button"
            value="Login"
            className="btn"
            disabled={submitButtonDisabled}
            onClick={handleSubmission}
          />
          <p>
            Don't have an account?{" "}
            <span>
              <Link to="/signup" className="account-text" id="sign-up-link">
                Signup
              </Link>
            </span>{" "}
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
