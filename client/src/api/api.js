const apiUrl = "http:localhost:2999/";

export class Api {

    static get = (url) => {
        return fetch (apiUrl+url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then((response) =>response.json())
    }

    static post = (url, data = {}) => {
        return fetch (apiUrl + url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application.json'
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
    }

    static singIn =(login, password) => {
        return this.post('singIn',{login, password});
    }

    static singUp = (login, password) => {
        return this.post('singUp', {login,password})
    }
}