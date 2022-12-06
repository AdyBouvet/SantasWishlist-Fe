import { useEffect, useState } from "react"
import { Button, Spinner } from   "react-bootstrap";
import NameDropdown from "../name-dropdown/NameDropdown"
import PersonCalls from "../../services/person";

export default function PersonScreen(props) {

    const [name, setName] = useState('Select name')
    const [persons, setPersons] = useState([])
    const [person, setPerson] = useState(null)
    const [loading, setLoading] = useState(false)

    function getPersons() {
        setLoading(true)
        PersonCalls.GetPersons().then(a => {
            setPersons(a)
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
        if (name != 'Select name') {
            PersonCalls.DeletePerson(name).then(() => {
                getPersons()
                setPerson(null)
                setName('Select name')
            })
        }
    }

    useEffect(() => {
        getPersons()
    }, [])

    return (
        <div>
            {loading && <Spinner animation="border" variant="primary" />}
            <NameDropdown name={name} persons={persons} setName={getPerson}/>
            {person && <p>Name: {person.name}</p>}
            {person && <p>Country: {person.country}</p>}
            {person && <p>Kindness rating: {person.kindnessRating}</p>}
            {person && <Button onClick={() => deletePerson()} variant="danger">Delete</Button>}
        </div>
    )
}