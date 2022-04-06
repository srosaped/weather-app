import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from 'react-bootstrap';
import Tooltip from "react-simple-tooltip"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserMinus } from '@fortawesome/free-solid-svg-icons';
import '../Login/login.css';



const LogoutBtn = () => {
    const{ logout, isAuthenticated } = useAuth0();


    return(
        isAuthenticated && (
        <Tooltip content="Logout">
            <Button className="log-btn" onClick={() => logout()}>
                <FontAwesomeIcon icon={ faUserMinus } />
            </Button>
        </Tooltip>
        )
    )
}

export default LogoutBtn;