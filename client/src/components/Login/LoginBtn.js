import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import '../Login/login.css';



const LoginBtn = () => {
    const{ loginWithRedirect, isAuthenticated } = useAuth0();


    return(
        !isAuthenticated && (
            <Button className="log-btn login-btn" onClick={() => loginWithRedirect()}>
                <FontAwesomeIcon icon={faUserPlus} />
            </Button>
        )
    )
}

export default LoginBtn;