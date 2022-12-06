import { Button, Form, Spinner } from 'react-bootstrap';
import '.././App.css';
import QuoteCalls from "../services/gift";
import React, { useState } from "react";
import ResponseAlert from '../components/response-alert/ResponseAlert';

function MainPage() {

    const [apiResponse, setApiResponse] = useState(null);
    const [isLoading, setIsLoading] = useState(false)

    function submit(event) {
        setIsLoading(true)
        event.preventDefault();
        const formData = event.target
        var response =
            "?quote=" + formData[0].value + "&SaidBy=" + formData[1].value +
            "&Comment=" + formData[3].value +
            "&HeardAt=" + formData[4].value + "&Target=" + formData[5].value
        if (formData[2].value.length > 0)
            response += "&TimeStamp=" + formData[2].value

        QuoteCalls.SetQuote(response)
            .then(a => {
                setApiResponse(a)
                setIsLoading(false)
            })
    }

    return (
        <div className="Window">
            <Form onSubmit={event => submit(event)}>
                <Form.Group className="mb-3" controlId="quote">
                    <Form.Label>Quote</Form.Label>
                    <Form.Control placeholder="Quote" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="said-by">
                    <Form.Label>Said by</Form.Label>
                    <Form.Control placeholder="Said by" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="timestamp">
                    <Form.Label>Timestamp</Form.Label>
                    <Form.Control placeholder="Timestamp" type="datetime-local" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="comment">
                    <Form.Label>Comment</Form.Label>
                    <Form.Control placeholder="Comment" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="heard-at">
                    <Form.Label>Heard at</Form.Label>
                    <Form.Control placeholder="Heard at" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="target">
                    <Form.Label>Target</Form.Label>
                    <Form.Control placeholder="Target" />
                </Form.Group>

                <Form.Switch
                    id="nsfw-switch"
                    label="a"
                    variant="danger"
                />
                {isLoading && <Spinner animation="border" variant="primary"/>}
                {apiResponse != null &&  <ResponseAlert type={apiResponse}></ResponseAlert>}
                <Button variant="primary" type="submit">
                    Submit quote
                </Button>
            </Form>
        </div>
    );
}

export default MainPage;