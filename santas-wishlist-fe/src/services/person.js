import api from "./api";

const GetPerson = (person) => api.get("/Persons/" + person)
    .then((response) => response.data);

const SetPerson = (Person) => api.post("/Person" + Person)
    .then((response) =>
        "success"
    )
    .catch((error) => {
        console.log(error)
        return "danger"
    })

const GetPersons = () => api.get("/Persons")
    .then((response) => response.data);

const DeletePerson = (name) => api.delete("/Persons?name=" + name)
    .then(() => "success")
    .catch(() => "danger");

const PersonCalls = {
    GetPerson,
    SetPerson,
    GetPersons,
    DeletePerson
}

export default PersonCalls;