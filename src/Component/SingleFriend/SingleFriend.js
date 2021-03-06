import React from 'react';
import { Button, Card, CardGroup } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';

const SingleFriend = (props) => {
    const { name, email, website, id } = props.friend;
    const history = useHistory();
    const handleClick = (friendId) => {
        const url = `/friend/${friendId}`;
        history.push(url);
    };
    return (
        <CardGroup className="container">
            <Card className="row">
                <Card.Body className="col-md-6">
                    <Card.Title>Name: {name}</Card.Title>
                    <Card.Text>
                        Email : {email}
                        Website:{website}
                    </Card.Text>
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
