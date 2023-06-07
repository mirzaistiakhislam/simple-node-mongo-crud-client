import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const AddUser = () => {

    const handleAddUser = (event) => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const phoneNumber = form.phoneNumber.value;
        console.log(name, email, phoneNumber);

        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, phoneNumber })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    alert('user created successfully');
                    form.reset();
                }
            })
    }

    return (
        <div>
            <h3 className='text-center pb-2 mt-5'><b>Enter <span className='text-warning'>User</span> Information</b></h3>
            <Form onSubmit={handleAddUser} className='w-50 mx-auto mt-3 border border-dark p-4'>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="name" placeholder="Enter name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter Email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPhone">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="text" name="phoneNumber" placeholder="Enter Phone Number" required />
                </Form.Group>

                <Button variant="secondary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default AddUser;