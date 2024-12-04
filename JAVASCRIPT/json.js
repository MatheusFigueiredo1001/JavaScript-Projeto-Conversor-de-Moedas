/*
    JSON - JavaScript Object Notation

    - Padrão de troca e armazenamento de informações; Quando um aplicativo ou site precisar comunicar com outro dispositivo que seja de outra linguagem de programação, o json serve para esta troca de informação
    - Padrão lógico simples;
    - Leve para ser enviado e recebido;
    - Simples e fácil de enteder;
    - Derivado do JavaScript;
    - Utiliza o formato chave / valor;
*/

const user = {
    nome: "Matheus",
    idade: 23,
    filhos: null,
    hobbies: ["games", "animes", "séries", "amigos"],
    casado: false,
    empresas: {
        devclub: {
            fundada: 2021,
            colaboradores: 40
        },
        monsterApp: {
            fundada: 2023,
            colaboradores: 4
        },
        atlas: {
            fundada: 2023,
            colaboradores: 5
        },
        agendaSua: {
            fundada: 2023,
            colaboradores: 4
        }
    }
};

const userJson = JSON.stringify(user) // Converte em JSON, quando vai sair para comunicar com outros dispositivos

const userJsonJs = JSON.parse(userJson) // Inverso, quando recebe de outros dispositivos arquivo em Json, para traduzir para o JS
console.log(userJsonJs)

