import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useLoaderData } from 'react-router-dom';

const UpdateUser = () => {

    const storedUser = useLoaderData();

    const handleUpdateAddUser = (event) => {
        event.preventDefault();

        const form = event.target;
        const updateName = form.name.value;
        const updateEmail = form.email.value;
        const updatePhoneNumber = form.phoneNumber.value;

        fetch(`http://localhost:5000/users/${storedUser._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ updateName, updateEmail, updatePhoneNumber })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    alert('Updated Successfully');
                }
            })
    }


    return (
        <div>
            <h3 className='text-center pb-2 mt-5'><b>Update <span className='text-warning'>User</span> Information</b></h3>
            <Form onSubmit={handleUpdateAddUser} className='w-50 mx-auto border border-dark mt-3 p-4'>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="name" defaultValue={storedUser.name} placeholder="Enter name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="email" defaultValue={storedUser.email} placeholder="Enter Email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPhone">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="text" name="phoneNumber" defaultValue={storedUser.phoneNumber} placeholder="Enter Phone Number" required />
                </Form.Group>

                <Button variant="secondary" type="submit">
                    Update
                </Button>
            </Form>
        </div>
    );
};

export default UpdateUser;