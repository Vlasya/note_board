import axios from "axios";
import {BASE_NOTES_URL} from "./constants";

export default axios.create({
    baseURL: BASE_NOTES_URL,
    headers: {
        'Content-Type': 'application/json'
    }
})