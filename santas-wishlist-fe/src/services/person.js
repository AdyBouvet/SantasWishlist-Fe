import api from "./api";

const GetPerson = (person) => api.get("/persons/" + person)
    .then((response) => response.data)
    .catch(() => "danger");

const SetPerson = (person) => api.post("/persons", person)
    .then(() =>
        "success"
    )
    .catch((error) => {
        console.log(error)
        return "danger"
    })

const GetPersons = () => api.get("/persons")
    .then((response) => response.data)
    .catch(() => "danger");

const DeletePerson = (name) => api.delete("/persons?name=" + name)
    .then(() => "success")
    .catch(() => "danger");

const PersonCalls = {
    GetPerson,
    SetPerson,
    GetPersons,
    DeletePerson
}

export default PersonCalls;