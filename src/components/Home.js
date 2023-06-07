import React, { useState } from 'react';
import { Button, CloseButton, Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { Link, useLoaderData } from 'react-router-dom';

const Home = () => {

    const users = useLoaderData();
    const [displayUsers, setDisplayUsers] = useState(users);

    const handleDelete = (user) => {
        fetch(`http://localhost:5000/users/${user._id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert('user deleted successfully');
                    const remainingUsers = displayUsers.filter(usr => usr._id !== user._id);
                    setDisplayUsers(remainingUsers);
                }
            })
    }

    return (
        <div>
            <h2 className='text-center pt-5 pb-3'><b>Available Users: <span className='text-warning'>{displayUsers.length}</span></b></h2>
            <Container>
                <Table responsive="sm md" striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th className='text-center'>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                            <th></th>
                        </tr>
                    </thead>
                    {
                        displayUsers.map((user, i) =>
                            <tbody key={user._id}>
                                <tr>
                                    <td className='text-center'>
                                        <CloseButton onClick={() => handleDelete(user)} variant="white" />
                                    </td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.phoneNumber}</td>
                                    <td className='text-center'>
                                        <Link to={`/users/${user._id}`}><Button variant="info">Update</Button></Link>
                                    </td>
                                </tr>

                            </tbody>)
                    }

                </Table>
            </Container>

        </div>
    );
};

export default Home;