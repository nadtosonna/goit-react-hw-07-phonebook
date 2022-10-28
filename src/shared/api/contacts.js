import axios from "axios";

const instanceContacts = axios.create({
    baseURL: "https://635ba2ddaa7c3f113dc213c8.mockapi.io/api/contactlist",
    params: {
        _limit: 10,
    }
});

export const getContacts = async() => {
    const {data} = await instanceContacts.get("/");
    return data;
}

export const addContact = async(data) => {
    const {data: result} = await instanceContacts.post("/", data);
    return result;
}

export const removeContact = async(id) => {
    const {data} = await instanceContacts.delete(`/${id}`);
    return data;
}