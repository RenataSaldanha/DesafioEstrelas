const image1 = document.querySelector('#primeiro');
const image2 = document.querySelector('#segundo');
const image3 = document.querySelector('#terceiro');
const image4 = document.querySelector('#quarto');
const name1 = document.querySelector('#nomeUm');
const name2 = document.querySelector('#nomeDois');
const name3 = document.querySelector('#nomeTres');
const name4 = document.querySelector('#nomeQuatro');

let nomePersonagem;

const numeroMaximoPersonagem = 671;


gerarNumero = () => {
    return Math.floor(Math.random() * numeroMaximoPersonagem);
}

primeiroPersonagem = () => {
    const id = gerarNumero();
    return fetch(`https://rickandmortyapi.com/api/character/${id}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json',
        }
    }).then((response) => response.json()).then((data) => {
        image1.src = data.image;
        nomePersonagem = data.name;
        name1.innerHTML = nomePersonagem;

    });
}

segundoPersonagem = () => {
    const id = gerarNumero()

    return fetch(`https://rickandmortyapi.com/api/character/${id}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json',
        }
    }).then((response) => response.json()).then((data) => {
        image2.src = data.image;
        nomePersonagem = data.name;
        name2.innerHTML = nomePersonagem;

    });
}

terceiroPersonagem = () => {
    const id = gerarNumero();

    return fetch(`https://rickandmortyapi.com/api/character/${id}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json',
        }
    }).then((response) => response.json()).then((data) => {
        image3.src = data.image;
        nomePersonagem = data.name;
        name3.innerHTML = nomePersonagem;

    });
}

quartoPersonagem = () => {
    const id = gerarNumero();

    return fetch(`https://rickandmortyapi.com/api/character/${id}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json',
        }
    }).then((response) => response.json()).then((data) => {
        image4.src = data.image;
        nomePersonagem = data.name;
        name4.innerHTML = nomePersonagem;

    });
}

mudar = () => {
    primeiroPersonagem();
    segundoPersonagem();
    terceiroPersonagem();
    quartoPersonagem();
}

window.onload = mudar;