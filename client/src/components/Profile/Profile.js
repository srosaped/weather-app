import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import '../Profile/profile.css';


const Profile = () => {
    const { user, isAuthenticated } = useAuth0();
    return ( 
        isAuthenticated && (
        <div className='profile-wrapper'>
            <img className='profile-picture' src={user.picture} alt={user.name}/>
            <h2 className='user-name'>Hi, {user.given_name}!</h2>
        </div>
        )
    )
}

export default Profile;