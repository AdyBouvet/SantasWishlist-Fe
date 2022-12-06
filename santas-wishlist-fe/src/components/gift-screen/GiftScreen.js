import { useEffect, useState } from "react"
import { Spinner } from   "react-bootstrap";
import NameDropdown from "../name-dropdown/NameDropdown"
import GiftCalls from "../../services/gift";

export default function GiftScreen(props) {

    const [name, setName] = useState('Select name')
    const [gifts, setGifts] = useState([])
    const [gift, setGift] = useState(null)
    const [loading, setLoading] = useState(false)

    function getGifts() {
        setLoading(true)
        GiftCalls.GetGifts().then(a => {
            setGifts(a)
            setLoading(false)
        })
    }

    function getGift(b) {
        setLoading(true)
        setName(b)
        GiftCalls.GetGift(b).then(a => {
            setGift(a)
            setLoading(false)
        })
    }

    useEffect(() => {
        getGifts()
    }, [])

    return (
        <div>
            {loading && <Spinner animation="border" variant="primary" />}
            <NameDropdown name={name} persons={gifts} setName={getGift}/>
            {gift && <p>Name: {gift.name}</p>}
            {gift && <p>Kindness rating: {gift.kindnessTier}</p>}
        </div>
    )
}