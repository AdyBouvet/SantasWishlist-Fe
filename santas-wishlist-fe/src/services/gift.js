import api from "./api";

const GetGift = (gift) => api.get("/Gifts/" + gift)
    .then((response) => response.data);


const SetGift = (Gift) => api.post("/Gift" + Gift)
    .then((response) =>
        "success"
    )
    .catch((error) => {
        console.log(error)
        return "danger"
    })

const GetGifts = (kindnessTier) => api.get("/Gifts?kindness-tier=" + kindnessTier)
    .then((response) => response.data);


const DeleteGift = (id) => api.delete("/Gift?name=" + id)
    .then(() => "success")
    .catch(() => "danger");

const GiftCalls = {
    GetGift,
    SetGift,
    GetGifts,
    DeleteGift
}

export default GiftCalls;