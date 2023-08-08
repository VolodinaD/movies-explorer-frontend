export const BASE_URL = 'https://api.volodina.movies.nomoreparties.sbs';

function getResponse(res) {
    if (!res.ok) {
        return Promise.reject(`Ошибка: ${res.status}`);
    }
    
    return res.json();
} 

export const register = (data) => {
    return fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: data.name,
            email: data.email,
            password: data.password
        })
    })
    .then((res) => getResponse(res));
}

export const login = (data) => {
    return fetch(`${BASE_URL}/signin`, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: data.email,
            password: data.password
        }),     
    })
    .then((res) => getResponse(res));
}

export const getToken = (token) => {
    return fetch(`${BASE_URL}/users/me`, {
        method: 'GET',
        credentials: 'include',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    })
    .then((res) => getResponse(res));
}

export const getUserInfo = () => {
    return fetch(`${BASE_URL}/users/me`, {
        method: 'GET',
        credentials: 'include',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    })
    .then((res) => getResponse(res));
}

export const likeCard = (data) => {
    return fetch(`${BASE_URL}/movies`, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            country: data.country,
            director: data.director,
            duration: data.duration,
            year: data.year,
            description: data.description,
            image: `https://api.nomoreparties.co${data.image.url}`,
            trailerLink: data.trailerLink,
            thumbnail: `https://api.nomoreparties.co${data.image.formats.thumbnail.url}`,
            movieId: data.id,
            nameRU: data.nameRU,
            nameEN: data.nameEN
        }),
    })
    .then((res) => getResponse(res));
}

export const deleteCard = (cardId) => {
    return fetch(`${BASE_URL}/movies/${cardId}`, {
        method: 'DELETE',
        credentials: 'include',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    })
    .then((res) => getResponse(res));
}

export const getSavedCards = () => {
    return fetch(`${BASE_URL}/movies`, {
        method: 'GET',
        credentials: 'include',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    })
    .then((res) => getResponse(res));
}

export const patchUserInfo = (data) => {
    return fetch(`${BASE_URL}/users/me`, {
        method: 'PATCH',
        credentials: 'include',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: data.name,
            email: data.email
        }),
    })
    .then((res) => getResponse(res));
}