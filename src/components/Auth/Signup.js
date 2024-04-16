import {React,useState} from 'react'
import './form.css';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase";

export default function Signup() {
    const navigate = useNavigate();
    const [values, setValues] = useState({
      name: "",
      email: "",
      pass: "",
    });
    const [errorMsg, setErrorMsg] = useState("");
    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
  
    const handleSubmission = () => {
      if (!values.name || !values.email || !values.pass) {
        setErrorMsg("Fill all the fields");
        return;
      }
      setErrorMsg("");
  
      setSubmitButtonDisabled(true);
      createUserWithEmailAndPassword(auth, values.email, values.pass)
        .then(async (res) => {
          setSubmitButtonDisabled(false);
          const user = res.user;
          await updateProfile(user, {
            displayName: values.name,
          });
          navigate("/");
        })
        .catch((err) => {
          setSubmitButtonDisabled(false);
          setErrorMsg(err.message);
        });
    };
  
  return (
    <div className="container">
    <div className="auth">
    {errorMsg && <p className="error-message">{errorMsg}</p>}
           <form action="" className="sign-up-form">
              <h2 className="title">Sign up</h2>
              <div className="input-field">
                  <i className="fa fa-user icon"></i>
                  <input type="text" placeholder="Username" onChange={(event) => 
                setValues((prev) => ({ ...prev,name: event.target.value }))
                }
                />
              </div>
              <div className="input-field">
                  <i className="fa fa-envelope icon"></i>
                  <input type="text" placeholder="Email" onChange={(event) => 
                setValues((prev) => ({ ...prev,email: event.target.value }))
                }/>
              </div>
              <div className="input-field">
                  <i className="fa fa-key icon"></i>
                  <input type="password" placeholder="Password" onChange={(event) => 
                setValues((prev) => ({ ...prev,pass: event.target.value }))
                }/>
              </div>
              <input type="submit" value="Sign up" className="btn" onClick={handleSubmission} disabled={submitButtonDisabled}/>
              <p>Already have an account?{" "}<span><Link to="/login" className="account-text" id="sign-in-link">Sign in</Link></span> </p>
          </form>
          </div>
  </div>
  )
}
