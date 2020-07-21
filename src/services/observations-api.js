import tokenService from "./tokenService";
const BASE_URL = '/api/observations/';

export function getAll() {
    return fetch(BASE_URL, {
        headers: {'Authorization': 'Bearer ' + tokenService.getToken()}
    }, {mode: "cors"})
    .then(res => res.json())
}

export function create(observation) {
    return fetch(BASE_URL, {
      method: 'POST',
      headers: {'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken()},
      body: JSON.stringify(observation)
    }, {mode: "cors"})
    .then(res => res.json());
}

export function deleteOne(id) {
    return fetch(`${BASE_URL}${id}`, {
        method: "DELETE",
        headers: {'Authorization': 'Bearer ' + tokenService.getToken()}
    }, {mode: "cors"})
    .then(res => res.json());
}

export function update(observation) {
    return fetch (`${BASE_URL}${observation._id}`, {
        method: "PUT",
        headers: {'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken()},
        body: JSON.stringify(observation)
    }, {mode: "cors"})
    .then(res => res.json());
}