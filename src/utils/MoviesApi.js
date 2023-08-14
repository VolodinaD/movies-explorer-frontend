class MoviesApi {
    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        } else {
            return Promise.reject(`Ошибка: ${res.status}`);
        }
    }

    getCards() {
        return fetch('https://api.nomoreparties.co/beatfilm-movies', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        })
            .then(this._checkResponse);
    } 
}

const moviesApi = new MoviesApi();

export default moviesApi;