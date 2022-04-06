import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from 'react-bootstrap';
import Tooltip from "react-simple-tooltip";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import '../Login/login.css';



const LoginBtn = () => {
    const{ loginWithRedirect, isAuthenticated } = useAuth0();


    return(
        !isAuthenticated && (
        <Tooltip content="Login">
            <Button className="log-btn" onClick={() => loginWithRedirect()}>
                <FontAwesomeIcon icon={faUserPlus} />
            </Button>
        </Tooltip>
        )
    )
}

export default LoginBtn;