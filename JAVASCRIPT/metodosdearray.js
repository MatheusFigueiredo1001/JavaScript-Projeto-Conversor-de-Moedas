/*
    Array's
    - push -> Adiciona mais um item ao array;
    - lenght -> Mostra o tamanho do array;
    - sort -> Organiza o array;
    - delet -> Deleta o item de uma posição do array;
    - every -> Testa se todos os elementos do Array passam em uma condição, passamos uma função que retorna true ou false, 
    se todos os retornos forem true, significa que todos os elementos passaram no teste, e a função retornará true,
    se algum item não estiver de acordo, ele retornará false;

    const myArray = [
	{name: 'Nico', credit: 600},
	{name: 'Maria', credit: 900},
	{name: 'Joana', credit: 300},
	{name: 'Vanessa', credit: 200},
];

const isTrue = myArray.every( user => user.credit > 100)

console.log(isTrue)


    - some -> Faz algo parecido com o .every(). 
    A diferença é que o every() só retorna true se todos os elementos passarem no teste. 
    O .some() retorna true se pelo menos um elemento do Array passar no teste.
    - fill -> Preenche posições do array como desejamos;
    - find -> Encontrar algum elemento dentro no Array. Para isso, passamos uma função que irá retornar true ou false. 
    O primeiro true que for retornado irá finalizar a função e retornar o elemento em que estamos;

    const myArray = [
    {name: 'João', credit: 600},
	{name: 'Maria', credit: 900},
	{name: 'Carlos', credit: 300},
	{name: 'Vanessa', credit: 300},
];

const findUser = myArray.find (myArray => myArray.name === 'Carlos')

console.log(findUser)

    - findIndex -> Faz o mesmo que o .find(), 
    mas retorna o índice do elemento encontrado ao invés de retornar o próprio elemento;
    - concat -> Esse método é usado para juntar dois arrays. 
    Ele não altera os arrays originais, mas cria um novo array com a soma dos dois arrays escolhidos;
    - includes -> Esse método nos diz se há ou não um determinado item no array. Retorna true ou false;
    -join -> O método join() junta todos os elementos de um array;
    - slice -> O método slice() retorna um novo array, apenas com as informações escolhidas;
    - splice -> Esse metódo remove ou adiciona elementos em um array em uma posição específica;
    - pop -> Remove o último elemento de um array:
    - shift -> Remove o primeiro elemento de um array;
*/

const users = ["João", "Maria", "Pedro", "Michele", "Fernando"];

users.splice(1, 2, "Nami")

console.log(users)