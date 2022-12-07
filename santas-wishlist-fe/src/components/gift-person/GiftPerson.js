import { useEffect, useState } from "react"
import { Spinner } from   "react-bootstrap";
import NameDropdown from "../name-dropdown/NameDropdown"
import GiftCalls from "../../services/gift";
import PersonCalls from "../../services/person";
import '../.././App.css'

export default function GiftPerson() {
    const [giftName, setGiftName] = useState('Select name')
    const [gifts, setGifts] = useState(null)
    const [gift, setGift] = useState(null)
    const [personName, setPersonName] = useState('Select name')
    const [persons, setPersons] = useState(null)
    const [person, setPerson] = useState(null)
    const [loading, setLoading] = useState(false)

    function getGifts() {
        setLoading(true)
        GiftCalls.GetGifts("Bad").then(a => {
            setGifts(a)
            setLoading(false)
        })
    }

    function getGift(b) {
        setGiftName(b)
    }

    function getPersons() {
        setLoading(true)
        PersonCalls.GetPersons().then(a => {
            setPersons(a)
            setLoading(false)
        })
    }

    function getPerson(b) {
        setLoading(true)
        setPersonName(b)
        PersonCalls.GetPerson(b).then(a => {
            setPerson(a)
            getGifts()
        })
    }

    useEffect(() => {
        getPersons()
    }, [])

    return (
        <div className="OuterContainer">
            {loading && <Spinner animation="border" variant="primary" />}
            {persons && <NameDropdown name={personName} persons={persons} setName={getPerson}/>}
            {gifts && <NameDropdown name={giftName} persons={gifts} setName={getGift}/>}
        </div>
    )

}