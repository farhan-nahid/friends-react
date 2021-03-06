import React, { useEffect, useState } from 'react';
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
        <div>
            <h1>Total Friend : {friends.length}</h1>
            {friends.map((friend) => (
                <SingleFriend friend={friend} />
            ))}
        </div>
    );
};

export default Home;
