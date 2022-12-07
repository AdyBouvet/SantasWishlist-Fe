import { useEffect, useState } from "react"
import { Button, Spinner } from "react-bootstrap";
import NameDropdown from "../name-dropdown/NameDropdown"
import PersonCalls from "../../services/person";
import PersonInput from "../person-input/PersonInput";
import ResponseAlert from "../response-alert/ResponseAlert";

export default function PersonScreen(props) {

    const [name, setName] = useState('Select name')
    const [persons, setPersons] = useState([])
    const [person, setPerson] = useState(null)
    const [loading, setLoading] = useState(false)
    const [apiResponse, setApiResponse] = useState("Default")

    function getPersons() {
        setLoading(true)
        PersonCalls.GetPersons().then(a => {
            if (a != "danger"){
                setPersons(a)
            }
            else {setApiResponse("danger")}
            setLoading(false)
        })
    }

    function getPerson(b) {
        setLoading(true)
        setName(b)
        PersonCalls.GetPerson(b).then(a => {
            setPerson(a)
            setLoading(false)
        })
    }

    function deletePerson() {
        setLoading(true)
        if (name != 'Select name') {
            PersonCalls.DeletePerson(name).then(() => {
                getPersons()
                setPerson(null)
                setName('Select name')
                setLoading(false)
            })
        }
    }

    useEffect(() => {
        getPersons()
    }, [])

    return (
        <div className="Container">
            <div className="OuterContainer">
                {persons && <NameDropdown name={name} persons={persons} setName={getPerson} />}
                {loading && <Spinner animation="border" variant="primary" />}
                {apiResponse == "danger" &&  <ResponseAlert type={apiResponse}></ResponseAlert>}
                {person && <div>
                    <p>Name: {person.name}</p>
                    <p>Country: {person.country}</p>
                    <p>Kindness rating: {person.kindnessRating}</p>
                    <Button onClick={() => deletePerson()} variant="danger">Delete</Button>
                </div>}
            </div>
            <div className="OuterContainer">
                <PersonInput />
            </div>
        </div>
    )
}