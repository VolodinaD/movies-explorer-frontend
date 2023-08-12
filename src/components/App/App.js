import React from 'react';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext.js';
import './App.css';
import Main from '../Main/Main.js';
import Movies from '../Movies/Movies.js';
import SavedMovies from '../SavedMovies/SavedMovies.js';
import Profile from '../Profile/Profile.js';
import Register from '../Register/Register.js';
import Login from '../Login/Login.js';
import Preloader from '../Preloader/Preloader.js';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute.js';
import ErrorPage from '../ErrorPage/ErrorPage.js';
import moviesApi from '../../utils/MoviesApi.js';
import * as mainApi from '../../utils/MainApi.js';

function App() {
    let location = useLocation();

    const [currentUser, setСurrentUser] = React.useState({});
    const [loggedIn, setLoggedIn] = React.useState(false);
    const [isPopupOpen, setPopupOpen] = React.useState(false);
    const [cards, setCards] = React.useState([]);
    const [serverMovies, setServerMovies] = React.useState([]);
    const [savedCards, setSavedCards] = React.useState([]);
    const [isChecked, setChecked] = React.useState(false);
    const [isCheckedSaved, setCheckedSaved] = React.useState(false);
    const [keyword, setKeyword] = React.useState('');
    const [keywordSaved, setKeywordSaved] = React.useState('');
    const [isOpenPreloader, setOpenPreloader] = React.useState(false);
    const [message, setMessage] = React.useState('');
    const [isCardsMessage, setCardsMessage] = React.useState('Выполните поиск фильма.');
    const [isSavedCardsMessage, setSavedCardsMessage] = React.useState('У вас пока нет сохранённых фильмов.');

    const navigate = useNavigate();

    React.useEffect(() => {
        tokenCheck();
    }, []);

    React.useEffect(() => {
        if (loggedIn) {
            setOpenPreloader(true);
            Promise.all([mainApi.getUserInfo(), mainApi.getSavedCards()])
                .then((res) => {
                    setOpenPreloader(false);
                    setСurrentUser(res[0].data);
                    setSavedCards(res[1].reverse());
                })
                .catch((err) => {
                    setOpenPreloader(false);
                    alert(err);
                });
        }
    }, [loggedIn]);

    React.useEffect(() => {
        if (localStorage.getItem('serverMovies')) {
            const movies = JSON.parse(localStorage.getItem('findMovies'));
            const checked = JSON.parse(localStorage.getItem('checked'));
            const keyword = JSON.parse(localStorage.getItem('keyword'));
            const serverMovies = JSON.parse(localStorage.getItem('serverMovies'));
            const сardsMessage = JSON.parse(localStorage.getItem('сardsMessage'));
            setCards(movies);
            setChecked(checked);
            setKeyword(keyword);
            setServerMovies(serverMovies);
            setCardsMessage(сardsMessage);
        }
    }, [loggedIn]);

    if (location.pathname === "/movies" || location.pathname === "/" || location.pathname === "/profile") {
        mainApi.getSavedCards()
            .then((res) => {
                setSavedCards(res.reverse());
            })
            .catch((err) => {
                alert(err);
            });
    }

    function tokenCheck() {
        if (localStorage.getItem('isAuth')) {
            const isAuth = localStorage.getItem('isAuth');

            if (isAuth) {
                setOpenPreloader(true);
                mainApi.getToken(isAuth)
                    .then((res) => {
                        setOpenPreloader(false);
                        if (res) {
                            setLoggedIn(true);
                            navigate('/movies', { replace: true });
                        }
                    })
                    .catch((err) => {
                        setOpenPreloader(false);
                        alert(err);
                    });
            }
        }
    }

    function handleOpenPopupClick() {
        setPopupOpen(true);
    }

    function closePopup() {
        setPopupOpen(false);
    }

    function onRegister() {
        navigate('/signup', { replace: true });
    }

    function onLogin() {
        navigate('/signin', { replace: true });
    }

    function onMain() {
        navigate('/', { replace: true });
    }

    function goBack() {
        navigate(-1, { replace: true });
    }

    function handleCardLike(card) {
        setOpenPreloader(true);
        mainApi.likeCard(card)
            .then((res) => {
                setOpenPreloader(false);
                savedCards.unshift(res);
                cards.forEach(i => {
                    if (i.id === card.id) {
                        i.saved = true;
                        i._id = res._id;
                    }
                });
                const movies = cards;
                localStorage.setItem('findMovies', JSON.stringify(movies));
            })
            .catch((err) => {
                setOpenPreloader(false);
                alert(err);
            });
    }

    function handleCardDelete(card) {
        setOpenPreloader(true);
        mainApi.deleteCard(card._id)
            .then((res) => {
                setOpenPreloader(false);
                cards.forEach(i => {
                    if (i._id === card._id) {
                        i.saved = false;
                    }
                });
                for (let i = savedCards.length - 1; i >= 0; --i) {
                    if (savedCards[i]._id === card._id) {
                        savedCards.splice(i,1);
                    }
                } 
                const movies = cards;
                localStorage.setItem('findMovies', JSON.stringify(movies));
            })
            .catch((err) => {
                setOpenPreloader(false);
                alert(err);
            });
    }

    function handleRegister(formValue) {
        setOpenPreloader(true);
        mainApi.register(formValue)
            .then((user) => {
                setOpenPreloader(false);
                if (user) {
                    localStorage.setItem('isAuth', true);
                    setLoggedIn(true);
                    navigate('/movies', { replace: true });
                }
            })
            .catch((err) => {
                setOpenPreloader(false);
                alert(err);
            });
    }

    function handleLogin(formValue) {
        setOpenPreloader(true);
        mainApi.login(formValue)
            .then((user) => {
                setOpenPreloader(false);
                if (user) {
                    localStorage.setItem('isAuth', true);
                    setLoggedIn(true);
                    navigate('/movies', { replace: true });
                }
            })
            .catch((err) => {
                setOpenPreloader(false);
                alert(err);
            });
    }

    function filterMovies(checked, keyword, res) {
        const movies = res.filter(i => { 
            if (checked) {
                return i.nameRU.toLowerCase().includes(keyword.toLowerCase()) && i.duration <= 40;
            }
            return i.nameRU.toLowerCase().includes(keyword.toLowerCase());                  
        });

        movies.forEach(i => {
            savedCards.forEach(n => {
                if (i.id === n.movieId) {
                    i.saved = true;
                    i._id = n._id;
                }
            });
        });

        setCards(movies);

        const сardsMessage = isCardsMessage;

        localStorage.setItem('сardsMessage', JSON.stringify(сardsMessage));
        localStorage.setItem('findMovies', JSON.stringify(movies));
        localStorage.setItem('checked', JSON.stringify(checked));
        localStorage.setItem('keyword', JSON.stringify(keyword));
    }

    function handleCheckedClick(checked) {
        setOpenPreloader(true);
        if (serverMovies.length === 0) {
            setOpenPreloader(false);
            //pass
        } else {
            setOpenPreloader(false);
            setChecked(checked);
            filterMovies(checked, keyword, serverMovies);
        }
    }

    function findFilms(keyword) {
        setOpenPreloader(true);
        if (serverMovies.length === 0) {
            moviesApi.getCards()
                .then((res) => {
                    setOpenPreloader(false);
                    setKeyword(keyword);
                    filterMovies(isChecked, keyword, res);
                    setServerMovies(res);
                    setCardsMessage('Ничего не найдено.');
                    localStorage.setItem('serverMovies', JSON.stringify(res));
                })
                .catch((err) => {
                    setOpenPreloader(false);
                    alert(err);
                });
        } else {
            setOpenPreloader(false);
            setKeyword(keyword);
            filterMovies(isChecked, keyword, serverMovies);
        }
    }

    function filterSavedMovies(checked, keyword, res) {
        const savedMovies = res.filter(i => { 
            if (checked) {
                return i.nameRU.toLowerCase().includes(keyword.toLowerCase()) && i.duration <= 40;
            }
            return i.nameRU.toLowerCase().includes(keyword.toLowerCase());                  
        });

        setSavedCards(savedMovies.reverse());
    }

    function handleCheckedClickSaved(checked) {
        setOpenPreloader(true);
        mainApi.getSavedCards()
            .then((res) => {
                setOpenPreloader(false);
                setCheckedSaved(checked);
                filterSavedMovies(checked, keywordSaved, res);
                setSavedCardsMessage('Ничего не найдено.');
            })
            .catch((err) => {
                setOpenPreloader(false);
                alert(err);
            });
    }

    function findSavedFilms(keyword) {
        setOpenPreloader(true);
        mainApi.getSavedCards()
            .then((res) => {
                setOpenPreloader(false);
                setKeywordSaved(keyword);
                filterSavedMovies(isCheckedSaved, keyword, res);
                setSavedCardsMessage('Ничего не найдено.');
            })
            .catch((err) => {
                setOpenPreloader(false);
                alert(err);
            });
    }

    function handleEditProfile(data) {
        setOpenPreloader(true);
        mainApi.patchUserInfo(data)
            .then(() => {
                setOpenPreloader(false);
                setСurrentUser({name: data.name, email: data.email});
                setMessage('Всё прошло успешно!');
                setTimeout(() => {
                    setMessage('');
                }, 2000);
            })
            .catch((err) => {
                setOpenPreloader(false);
                alert(err);
            });
    }

    function signOut() {
        localStorage.removeItem('isAuth');
        localStorage.removeItem('findMovies');
        localStorage.removeItem('checked');
        localStorage.removeItem('keyword');
        localStorage.removeItem('serverMovies');
        localStorage.removeItem('сardsMessage');
        setLoggedIn(false);
        setOpenPreloader(false);
        setServerMovies([]);
        setCards([]);
        setChecked(false);
        setCheckedSaved(false);
        setKeyword('');
        setKeywordSaved('');
        setCardsMessage('Выполните поиск фильма.');

        navigate('/', {replace: true});
    }

    return (
        <>
            <Routes>
                <Route path="/movies" element={<ProtectedRoute loggedIn={loggedIn} element={
                    <CurrentUserContext.Provider value={currentUser}>
                        <Movies onMain={onMain} isPopupOpen={isPopupOpen} onPopupOpen={handleOpenPopupClick} onPopupClose={closePopup} cards={cards} findFilms={findFilms} likeCard={handleCardLike} deleteCard={handleCardDelete} handleCheckedClick={handleCheckedClick} isChecked={isChecked} keyword={keyword} loggedIn={loggedIn} onRegister={onRegister} onLogin={onLogin} isCardsMessage={isCardsMessage} />
                    </CurrentUserContext.Provider>
                } />} />
                <Route path="/saved-movies" element={<ProtectedRoute loggedIn={loggedIn} element={
                    <CurrentUserContext.Provider value={currentUser}>
                        <SavedMovies onMain={onMain} isPopupOpen={isPopupOpen} onPopupOpen={handleOpenPopupClick} onPopupClose={closePopup} cards={savedCards} findSavedFilms={findSavedFilms} deleteCard={handleCardDelete} handleCheckedClick={handleCheckedClickSaved} loggedIn={loggedIn} onRegister={onRegister} onLogin={onLogin} isCardsMessage={isSavedCardsMessage} />
                    </CurrentUserContext.Provider>
                } />} />
                <Route path="/profile" element={<ProtectedRoute loggedIn={loggedIn} element={
                    <CurrentUserContext.Provider value={currentUser}>
                        <Profile onMain={onMain} isPopupOpen={isPopupOpen} onPopupOpen={handleOpenPopupClick} onPopupClose={closePopup} loggedIn={loggedIn} onRegister={onRegister} onLogin={onLogin} handleEditProfile={handleEditProfile} signOut={signOut} message={message} />
                    </CurrentUserContext.Provider>
                } />} />
                <Route path="/" element={<Main onRegister={onRegister} onLogin={onLogin} onMain={onMain} loggedIn={loggedIn} isPopupOpen={isPopupOpen} onPopupOpen={handleOpenPopupClick} onPopupClose={closePopup} />} />
                <Route path="/signup" element={<Register onMain={onMain} handleRegister={handleRegister} loggedIn={loggedIn} onPopupOpen={handleOpenPopupClick} onRegister={onRegister} onLogin={onLogin} />} />
                <Route path="/signin" element={<Login onMain={onMain} handleLogin={handleLogin} loggedIn={loggedIn} onPopupOpen={handleOpenPopupClick} onRegister={onRegister} onLogin={onLogin} />} />
                <Route path="*" element={<ErrorPage goBack={goBack} />} />
            </Routes>
            <Preloader isOpenPreloader={isOpenPreloader} />
        </>
    );
}

export default App;