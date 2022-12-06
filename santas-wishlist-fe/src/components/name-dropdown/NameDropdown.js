import { Dropdown } from "react-bootstrap";

export default function NameDropdown(props) {
    return(
    <div>
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                {props.name}
            </Dropdown.Toggle>
            <Dropdown.Menu>
                {props.persons.map((person) => 
                    <Dropdown.Item key={person.id} onClick={() => props.setName(person.name)}>{person.name}</Dropdown.Item>
                )}
            </Dropdown.Menu>
        </Dropdown>
    </div>
    )
}