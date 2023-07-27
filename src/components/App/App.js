import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Main from '../Main/Main.js';
import Movies from '../Movies/Movies.js';
import SavedMovies from '../SavedMovies/SavedMovies.js';
import Profile from '../Profile/Profile.js';
import Register from '../Register/Register.js';
import Login from '../Login/Login.js';
import ErrorPage from '../ErrorPage/ErrorPage.js';
import api from '../../utils/api.js';

function App() {
    const [isPopupOpen, setPopupOpen] = React.useState(false);
    const [cards, setCards] = React.useState([]);
    const navigate = useNavigate();
    const savedCards = [
        {
            "id": "1",
            "country" : "Великобритания",
            "director" : "Уилл Лавлейс, Дилан Сотерн",
            "duration" : 104,
            "year" : "2010",
            "description" : "Затеянный по такому подозрительному поводу, как реюнион Blur в 2009-м году фильм начисто лишен присущего моменту пафоса и выхолощенности речей. Вернее, что-то похожее неизбежно возникает, когда ты видишь, как забитый до отказа Гайд-парк как в последний раз ревет «Song 2», но это лишь буквальное свидетельство того, что Blur — великая группа. К счастью, помимо прямых и косвенных свидетельств этого, в «No Distance Left to Run» хватает острых углов, неловких моментов и всего того сора, из которого рождаются по-настоящему отличные группы: помимо важных, но общеизвестных моментов (вроде соперничества с Oasis за первенство в том же бритпопе) визуализируются и те, что всегда оставались за кадром: наркотическая зависимость, неутихающие костры амбиций, ревность, обиды, слава — и все это блестяще снято на фоне истории того, что вообще происходило в Британии времен Блэра.",
            "image" : "https://api.nomoreparties.co/uploads/blur_a43fcf463d.jpeg",
            "trailerLink" : "https://www.youtube.com/watch?v=6iYxdghpJZY",
            "thumbnail" : "https://api.nomoreparties.co/uploads/thumbnail_blur_a43fcf463d.jpeg",
            "movieId" : 3,
            "nameRU" : "Без обратного пути",
            "nameEN" : "No Distance Left to Run"
        },

        {
            "id": "2",
            "country" : "Бразилия",
            "director" : "Уэсли Пенц",
            "duration" : 80,
            "year" : "2008",
            "description" : "**Визионер из трущоб**\nГимн бразильским гетто (они же фавелы), породившим байле-фанк — взбалмошную смесь музыки стран третьего мира, нелегального рейва и злого фанка, на волне которого вышли в люди Майя и Сантиголд. Снял фильм не кто иной, как Дипло (он же Уэсли Пенц) — диджей, продюсер и крестный отец двух вышеупомянутых артисток. Поэтому неудивительно, что вместо истории жанра в сухом остатке у него вышла увлекательная этнографическая экспедиция в трущобы Рио-де-Жанейро, где наркотики, секс и зашкаливающий уровень преступности играют в становлении байле-фанка не меньшую роль, чем сама музыка.\n",
            "image" : "https://api.nomoreparties.co/uploads/881707734_640_d6a3a43358.jpeg",
            "trailerLink" : "https://www.youtube.com/watch?v=Cugdwa7mndA",
            "thumbnail" : "https://api.nomoreparties.co/uploads/thumbnail_881707734_640_d6a3a43358.jpeg",
            "movieId" : 6,
            "nameRU" : "Фавела на взрыве",
            "nameEN" : "Favela on Blast"
        },
        
        {
            "id": "3",
            "country" : "Германия",
            "director" : "Ромуальд Кармакар",
            "duration" : 60,
            "year" : "2003",
            "description" : "Панорамный взгляд на берлинский Лав-парад 2002-го года с трех разных точек зрения, каждая из которых образует отдельную новеллу. Первая, «Интро», показывает происходящее глазами людей, стоящих у входа в клуб Linientreu; вторая, «Габба», переносит зрителя в гущу толпы на площади Брайтшайдплац, где диджейские вертушки установлены даже в кебабной. И третья, «Хелл за работой», дает исчерпывающее представление о том, как DJ Hell сводит пластинки во время своего сета в WMF.",
            "image" : "https://api.nomoreparties.co/uploads/zagruzhennoe_1_fd5faff237.jpeg",
            "trailerLink" : "https://www.youtube.com/watch?v=GsDRVpdgNJ4",
            "thumbnail" : "https://api.nomoreparties.co/uploads/thumbnail_zagruzhennoe_1_fd5faff237.jpeg",
            "movieId" : 9,
            "nameRU" : "196 ударов в минуту",
            "nameEN" : "196 BPM"
        }
    ];

    React.useEffect(() => {
        api.getCards()
        .then((res) => {
                setCards(res);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    function handleOpenPopupClick() {
        setPopupOpen(true);
    }

    function closePopup() {
        setPopupOpen(false);
    }

    function onRegister() {
        navigate('/signup', {replace: true});
    }
    
    function onLogin() {
        navigate('/signin', {replace: true});
    }

    function onMain() {
        navigate('/', {replace: true});
    }

    function goBack() {
        navigate(-1, {replace: true});
    }

    return (
        <>
            <Routes>
                <Route path="/" element={<Main onRegister={onRegister} onLogin={onLogin} onMain={onMain} />} />
                <Route path="/movies" element={<Movies onMain={onMain} isPopupOpen={isPopupOpen} onPopupOpen={handleOpenPopupClick} onPopupClose={closePopup} cards={cards} />} />
                <Route path="/saved-movies" element={<SavedMovies onMain={onMain} isPopupOpen={isPopupOpen} onPopupOpen={handleOpenPopupClick} onPopupClose={closePopup} cards={savedCards} />} />
                <Route path="/profile" element={<Profile onMain={onMain} isPopupOpen={isPopupOpen} onPopupOpen={handleOpenPopupClick} onPopupClose={closePopup} />} />
                <Route path="/signup" element={<Register onMain={onMain} />} />
                <Route path="/signin" element={<Login onMain={onMain} />} />
                <Route path="*" element={<ErrorPage goBack={goBack} />} />
            </Routes>
        </> 
    );
}

export default App;