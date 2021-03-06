import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket} from '@fortawesome/free-solid-svg-icons';
import '../Login/login.css';



const LogoutBtn = () => {
    const{ logout, isAuthenticated } = useAuth0();


    return(
        isAuthenticated && (
            <Button className="log-btn" onClick={() => logout()}>
                <FontAwesomeIcon className='btn-icon' icon={ faArrowRightFromBracket} />
            </Button>
        )
    )
}

export default LogoutBtn;