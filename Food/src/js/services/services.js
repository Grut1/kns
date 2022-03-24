//функция postData настраивает наш запрос, с помощью fetch посылает запрос на сервер, получает ответ от сервера и трансформирует ответ в json
	// asynk говорит, что в функции идет ассинхронный код? await указывает на операции, которые необходимо дождаться
const postData = async (url, data) => {
    const res = await fetch(url, {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: data //данные, которые будут поститься в функции
    });
    return await res.json();
};


async function getResource(url) {
    let res = await fetch(url);

    if (!res.ok) {
        throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }

    return await res.json();
}

export {postData};
export {getResource};