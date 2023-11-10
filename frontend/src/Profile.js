import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Profile() {
    const [profiles, setProfiles] = useState([]);

    useEffect(() => {
        axios.get('/api/profiles/')
            .then(res => setProfiles(res.data))
            .catch(err => console.log(err));
    }, []);

    return (
        <div>
            {profiles.map(profile => (
                <div key={profile.id}>
                    <h2>{profile.name}</h2>
                    <img src={profile.image} alt={profile.name} />
                    <p>{profile.description}</p>
                </div>
            ))}
        </div>
    );
}

export default Profile;