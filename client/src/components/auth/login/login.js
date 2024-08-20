
import { React, useState } from 'react';
import './login.css';
import { Navigate, Link } from 'react-router-dom'
import { doSignInWithEmailAndPassword, doSignInWithGoogle } from '../../../firebase/auth'
import { useAuth } from '../../contexts/authContext'

function Login() {
    const { userLoggedIn } = useAuth();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isSigningIn, setIsSigningIn] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const onSubmit = async (e) => {
        e.preventDefault()
        if (!isSigningIn) {
            setIsSigningIn(true)
            await doSignInWithEmailAndPassword(email, password)
            // doSendEmailVerification()
        }
    }

    const onGoogleSignIn = (e) => {
        e.preventDefault()
        if (!isSigningIn) {
            setIsSigningIn(true)
            doSignInWithGoogle().catch(err => {
                setIsSigningIn(false)
            })
        }
    }


    return (
        <div>
            {userLoggedIn && (<Navigate to={'/home'} replace={true} />)}
            <div className="form-wrapper">
                <h2>Log In</h2>
                <form onSubmit={onSubmit}>
                    <div className="form-control">
                        <input type="email" autoComplete='email'
                            required
                            value={email} onChange={(e) => { setEmail(e.target.value) }} />
                        <label>Email </label>
                    </div>
                    <div className="form-control">
                        <input type="password"
                            autoComplete='current-password'
                            required
                            value={password} onChange={(e) => { setPassword(e.target.value) }} />
                        <label>Password</label>
                    </div>
                    {errorMessage && (
                        <span className='text-red-600 font-bold'>{errorMessage}</span>
                    )}

                    <button type="submit"
                        disabled={isSigningIn}>{isSigningIn ? 'Signing In...' : 'Sign In'}</button>
                    <div className="form-help">
                        <div className="remember-me">
                            <label htmlFor="remember-me">Don't have Account</label>
                        </div>
                        <Link to="/signup">Sign up now</Link>
                    </div>
                <label className="center-label"> Or </label>
                <button type="button" class="login-with-google-btn"  disabled={isSigningIn}
                        onClick={(e) => { onGoogleSignIn(e) }}>
                   {isSigningIn ? 'Signing In...' : 'Sign in with Google'}
                </button>
                </form>

            </div>
        </div>
    );
}

export default Login;
