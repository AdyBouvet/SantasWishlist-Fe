import { Alert, Button } from "react-bootstrap";
import { useState } from "react"

export default function ResponseAlert(props) {
    const [show, setShow] = useState(true);

    if (show) {
        if (props.type === "danger") {
            return (
                <Alert variant={props.type} onClose={() => setShow(false)} dismissible>
                    <Alert.Heading>Something went wrong</Alert.Heading>
                </Alert>
            );
        } else if (props.type === "success") {
            <Alert variant={props.type} onClose={() => setShow(false)} dismissible>
                <Alert.Heading>Success!</Alert.Heading>
            </Alert>
        }
    }
}