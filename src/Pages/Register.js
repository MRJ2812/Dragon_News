import React, { useContext, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Form, Link } from 'react-router-dom';

const Register = () => {

    const { createUser, updateUserProfile, varifyEmail } = useContext(AuthContext);

    const [error, setError] = useState('');
    const [accepted, setaccepted] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                form.reset();
                setError('');
                handleUpdateProfile(name, photoURL);
                handleEmailVerification();
                alert("Please varify your email address");
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
            });
    }

    const handleCheckbox = event => {
        const check = event.target.checked;
        setaccepted(check);
    }

    const handleUpdateProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        console.log(profile);
        updateUserProfile(profile)
            .then(() => {
            }).catch((error) => {
                console.error(error);
            });

    }

    const handleEmailVerification = () => {
        varifyEmail()
            .then(() => {
                console.log("ok")
            }).catch((error) => {
                console.error(error);
            });
    }


    return (
        <form onSubmit={handleSubmit}>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">User Name</label>
                <input name='name' type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Photo URL</label>
                <input name='photoURL' type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input name='email' type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input name='password' type="password" class="form-control" id="exampleInputPassword1" required />
            </div>

            <div class="mb-3 form-check"  >
                <input type="checkbox" class="form-check-input" id="exampleCheck1" onClick={handleCheckbox} />
                <label class="form-check-label" for="exampleCheck1" >
                    Accept <Link to='/terms'>Terms and conditions</Link>
                </label>
            </div>

            <button type="submit" class="btn btn-primary" disabled={!accepted}>Register</button>
            <p>{error}</p>
        </form>
    );
};

export default Register;