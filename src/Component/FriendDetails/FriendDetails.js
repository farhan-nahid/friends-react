import React, { useEffect, useState } from 'react';
import { Alert, Button } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom';

const FriendDetails = () => {
    const [show, setShow] = useState(true);
    const { friendId } = useParams();
    const [friend, setFriend] = useState({});
    const { name, username, phone, website, email } = friend;
    // const { catchPhrase } = friend.company;
    // const { city } = friend.address;
    console.log(friend);

    const history = useHistory();
    function homeClick() {
        history.push('/home');
    }

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => setFriend(data));
    }, [friendId]);

    return (
        <div>
            <div>
                <Alert show={show} variant="success">
                    <Alert.Heading>Name : {name}</Alert.Heading>
                    <p>User Name : {username}</p>
                    <p>Phone: {phone}</p>
                    <p>Website: {website}</p>
                    <p>Email : {email}</p>
                    {/* <p>Company : {catchPhrase}</p> */}
                    {/* <p>City : {city}</p> */}
                    <hr />
                    <div className="d-flex justify-content-end">
                        <Button onClick={() => setShow(false)} variant="outline-success">
                            Close
                        </Button>
                    </div>
                </Alert>

                {!show && <Button onClick={() => setShow(true)}>Show Details</Button>}
            </div>
            <Button onClick={() => homeClick()} variant="danger">
                {' '}
                Back To Home
            </Button>
        </div>
    );
};

export default FriendDetails;
