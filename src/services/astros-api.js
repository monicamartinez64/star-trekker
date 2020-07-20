import tokenService from "./tokenService";
const BASE_URL = '/api/astros/';

export function getAll() {
    return fetch(BASE_URL, {
        headers: {'Authorization': 'Bearer ' + tokenService.getToken()}
    }, {mode: "cors"})
    .then(res => res.json())
}

export function create(astro) {
    return fetch(BASE_URL, {
      method: 'POST',
      headers: {'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken()},
      body: JSON.stringify(astro)
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

export function update(astro) {
    return fetch (`${BASE_URL}${astro._id}`, {
        method: "PUT",
        headers: {'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken()},
        body: JSON.stringify(astro)
    }, {mode: "cors"})
    .then(res => res.json());
}