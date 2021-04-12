import api from "../api";
import {NOTES_URL} from "../constants";


export const getData = () => {
    return api.get(NOTES_URL)
}

export const addData = (data) => {
    return api.post(NOTES_URL, data)
}

export const updateData = (data) => {
    return api.put(NOTES_URL + '/' + data.id, data)
}

export const deleteData = (id) => {
    return api.delete(NOTES_URL + '/' + id)
}