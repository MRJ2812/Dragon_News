import React, { useContext } from 'react';
import { ListGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Carousel from 'react-bootstrap/Carousel';
import { FaGoogle, FaGithub, FaFacebook, FaYoutube, FaTwitter, FaGit, FaWhatsapp, FaTwitch } from "react-icons/fa6";
import image1 from '../../Assets/Screenshot 2023-04-03 125913.png';
import image2 from '../../Assets/Screenshot 2023-04-03 125714.png';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const RightSideNav = () => {

    const { signinwithGoogle } = useContext(AuthContext);

    const provider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        signinwithGoogle(provider)
            .then((result) => {
                const user = result.user;
                console.log(user);
            }).catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage)
            });
    }

    return (
        <div className=''>
            <ButtonGroup vertical >
                <Button onClick={handleGoogleSignIn} variant="outline-primary" className='mb-2'><FaGoogle /> Log in with google</Button>{' '}
                <Button variant="outline-dark"><FaGithub /> Log in with github</Button>{' '}
            </ButtonGroup>

            <div>Find us on</div>
            <ListGroup>
                <ListGroup.Item className='mb-2'><FaFacebook /> Facebook</ListGroup.Item>
                <ListGroup.Item className='mb-2'><FaWhatsapp /> Whatsapp</ListGroup.Item>
                <ListGroup.Item className='mb-2'><FaTwitter /> Twitter</ListGroup.Item>
                <ListGroup.Item className='mb-2'><FaYoutube /> Youtube</ListGroup.Item>
                <ListGroup.Item className='mb-2'><FaTwitch /> Twitch</ListGroup.Item>
            </ListGroup>

            <div>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={image1}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={image2}
                            alt="Second slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
        </div >
    );
};

export default RightSideNav;