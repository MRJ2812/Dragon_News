import React, { useContext, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {

    const { loginWithPassword, setLoading } = useContext(AuthContext);

    const [error, setError] = useState('');

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';


    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        loginWithPassword(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);

                setError('');
                if (user.emailVerified) {
                    navigate(from, { replace: true });
                    form.reset();
                }
                else {
                    alert("Email not verified. Please check your email and verify it");
                }

            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
            })
            .finally(() => {
                setLoading(false);
            });
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input name='email' type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input name='password' type="password" className="form-control" id="exampleInputPassword1" required />
            </div>

            <button type="submit" className="btn btn-primary">Log In</button>
            <p>{error}</p>
        </form>
    );
};

export default Login;