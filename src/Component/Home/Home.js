import React, { useEffect, useState } from 'react';
import NavBar from '../Navbar/Navbar';
import SingleFriend from '../SingleFriend/SingleFriend';

const Home = () => {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        const url = 'https://jsonplaceholder.typicode.com/users';
        fetch(url)
            .then((res) => res.json())
            .then((data) => setFriends(data));
    }, []);
    return (
        <>
            <NavBar />
            <div className="container">
                <div className="row">
                    {friends.map((friend) => (
                        <SingleFriend friend={friend} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Home;
