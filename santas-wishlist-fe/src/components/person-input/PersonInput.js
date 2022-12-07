import { Button, Form, Spinner } from 'react-bootstrap';
import '../../App.css';
import PersonCalls from "../../services/person";
import React, { useState } from "react";
import ResponseAlert from '../response-alert/ResponseAlert';

function PersonInput() {

    const [apiResponse, setApiResponse] = useState(null);
    const [isLoading, setIsLoading] = useState(false)

    function submit(event) {
        setIsLoading(true)
        event.preventDefault();
        var output = {
            "Name": event.target[0].value,
            "Country": event.target[1].value,
            "KindnessRating": event.target[2].value
        }
        console.log(output)
        PersonCalls.SetPerson(output)
            .then(a => {
                setApiResponse(a)
                setIsLoading(false)
            })
    }

    return (
        <div className="Window">
            <Form onSubmit={event => submit(event)}>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control placeholder="Name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="country">
                    <Form.Label>Country</Form.Label>
                    <Form.Control placeholder="Country" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="kindnessRating">
                    <Form.Label>Kindness rating</Form.Label>
                    <Form.Control placeholder="Kindness rating"/>
                </Form.Group>
                {isLoading && <Spinner animation="border" variant="primary"/>}
                {apiResponse != null &&  <ResponseAlert type={apiResponse}></ResponseAlert>}
                <Button variant="success" type="submit">
                    Submit person
                </Button>
            </Form>
        </div>
    );
}

export default PersonInput;