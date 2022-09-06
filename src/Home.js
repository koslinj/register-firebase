import React from 'react'
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Home() {

    const navigate = useNavigate();
    const [userid, setUserid] = useState('');

    useEffect(() => {

        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                console.log(uid);
                setUserid(uid);
            } else {
                console.log('NO USER');
                navigate('/login');
            }
        });

    }, [])



    return (
        <div className='home'>
            <h1>Twoje id: {userid}</h1>
            <button onClick={() => {
                const auth = getAuth();
                signOut(auth);
            }}
            >Log out</button>
        </div>
    )
}

export default Home