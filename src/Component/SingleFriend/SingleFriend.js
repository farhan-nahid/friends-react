import React from 'react';
import { Button, Card, CardGroup } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';

const SingleFriend = (props) => {
    const { friend } = props;
    const { name, email, id } = friend;
    const history = useHistory();
    const handleClick = (friendId) => {
        const url = `/friend/${friendId}`;
        history.push(url);
    };
    return (
        <CardGroup className="col-md-6 col-lg-3 mt-3 ">
            <Card className="border-0">
                <Card.Body className="shadow ">
                    <Card.Title>Name: {name}</Card.Title>
                    <Card.Text>{email}</Card.Text>
                    <p>
                        Id : <Link to={`/friend/${id}`}> {id}</Link>{' '}
                    </p>
                    <Button onClick={() => handleClick(id)} variant="danger">
                        User Details
                    </Button>
                </Card.Body>
            </Card>
        </CardGroup>
    );
};

export default SingleFriend;
