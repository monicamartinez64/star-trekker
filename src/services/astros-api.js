import tokenService from "./tokenService";
const BASE_URL = '/api/astros/';

export function getAll() {
    return fetch(BASE_URL, {
        headers: {'Authorization': 'Bearer ' + tokenService.getToken()}
    }, {mode: "cors"})
    .then(res => res.json())
}