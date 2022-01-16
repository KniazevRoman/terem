// --- Решение задания 2.5 --- //

document.querySelector('#main-form').addEventListener('submit', (event) => {
    // Отмена стандартного поведения по перезагрузке страницы при сабмите
    event.preventDefault();

    // Берем данные из формы
    const formData = new FormData(event.target);

    //создаем JSON из объекта FormData
    const data = {};
    formData.forEach( (value, key) => {
        data[key] = value;
    });

    // Выводим его в конец контейнера
    document.querySelector(".container").append(JSON.stringify(data));
});

// --- Решение задания 2.6 через Promise --- //

// // Отправляем асинхронный запрос с помощью fetch и выводим ответ
// document.querySelector('#main-form').addEventListener('submit', () => {
//     fetch('/')
//         .then((res) => {
//             if(!res.ok) {
//                 throw new Error(`Получен ответ от сервера со статусом ${res.status}: ${res.statusText}`);
//             } else {
//                 alert(`Запрос отправлен успешно! Получен ответ от сервера со статусом ${res.status}: ${res.statusText}`);
//             }
//         })
//         .catch(err => alert(`Ошибка при отправке запроса: ${err.message}`))
// });


// --- Решение задания 2.6 через async/await --- //

const handleFetch = (event) => {
    // Отправляем асинхронный запрос с помощью fetch и выводим ответ
    const getResponse = async () => {
        const response = await fetch('/');
        if (!response.ok) {
            throw new Error(`Получен ответ от сервера со статусом ${response.status}: ${response.statusText}`);
        }
        
        // Возвращаю необработанный response, в реальном кейсе скорее всего будет возвращаться response.json()
        return response;
    };

    getResponse()
        .then(( res) => {
            alert(`Запрос отправлен успешно! Получен ответ от сервера со статусом ${res.status}: ${res.statusText}`);
        })
        .catch( (err) => {
            alert(`Ошибка при отправке запроса: ${err.message}`);
        })
}

document.querySelector('#main-form').addEventListener('submit', handleFetch);