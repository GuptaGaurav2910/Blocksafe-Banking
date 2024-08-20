
// const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
// const [error, setError] = useState<string | null>(null);
// const [email, setEmail] = useState('');
// const handleEmailChange = (event) => {
//     setEmail(event.target.value);
// };
// const validateEmail = () => {
//     const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
//     if (!emailRegex.test(email)) {
//         setError('Please enter a valid email address');
//     } else {
//         setError('');
//     }
// };

// useEffect(() => {
//     validateEmail();
// }, [email]);


import './SignUp.css';
import { React, useState } from 'react';
import { Navigate, Link, useNavigate } from 'react-router-dom'
import  { useAuth }  from '../../contexts/authContext'
import { doCreateUserWithEmailAndPassword } from '../../../firebase/auth'


const SignUp = () => {
    const [email, setEmail] = useState('')
    const [userName, setUserName] = useState(null)
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [isRegistering, setIsRegistering] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const { userLoggedIn, setCurrentUser } = useAuth();
    const navigate = useNavigate();

    const onSubmit = async (e) => {
        e.preventDefault()
        if(!isRegistering) {
            setIsRegistering(true)
            try {
                await doCreateUserWithEmailAndPassword(email, password, userName);
                setCurrentUser({ email, userName }); // Set currentUser in AuthProvider
                navigate('/home'); // Redirect to home page after successful registration
            } catch (error) {
                setErrorMessage(error.message);
                setIsRegistering(false);
            }
        }
    }

  return (
            <div>
             {userLoggedIn && (<Navigate to={'/home'} replace={true} />)}
            <div className="form-wrapper">
                <h2>Sign Up</h2>
                <form  onSubmit={onSubmit} >
                   <div className="form-control">
                        <input type="text" required value={userName} onChange={(e) => { setUserName(e.target.value) }} />
                        <label>User Name</label>
                    </div>
                    <div className="form-control">
                        <input  type="email"
                                autoComplete='email'
                                required
                                value={email} onChange={(e) => { setEmail(e.target.value) }} />
                        <label>Email </label>
                    </div>
                    <div className="form-control">
                        <input  disabled={isRegistering} type="password" autoComplete='new-password' required  value={password} onChange={(e) => { setPassword(e.target.value) }}/>
                        <label>Password</label>
                    </div>
                    <div className="form-control">
                        <input  disabled={isRegistering} type="password" autoComplete='off' required  value={confirmPassword} onChange={(e) => { setConfirmPassword(e.target.value) }}/>
                        <label>Confirm Password</label>
                    </div>
                    <button type="submit">Sign Up</button>
                    <div className="form-help">
                        <Link to="/login">Sign In</Link>
                    </div>
                    <label className="center-label"> Or </label>
                <button type="button" class="login-with-google-btn" >
                    Sign Up with Google
                </button>
                </form>
            </div>
        </div>
  )
}

export default SignUp