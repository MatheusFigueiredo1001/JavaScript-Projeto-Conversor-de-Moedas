const inputTask = document.querySelector('.input-task')
const addTask = document.getElementById('add-task')
const taskList = document.querySelector('ul')

addTask.addEventListener('click', () => {
    const selectTask = inputTask.value
    const selectPriority = document.querySelector('select').value

    const newTask = document.createElement('li')
    newTask.textContent = selectTask // Define o nome da tarefa dentro do <li>
    newTask.classList.add(selectPriority);  // Adiciona 'alta', 'média' ou 'baixa'

    const removeTask = document.createElement('button')
    removeTask.textContent = 'Remover'

    console.log(selectTask)

    taskList.innerHTML += `<li>${selectTask}</li>`
    newTask.appendChild(removeTask);
    taskList.appendChild(newTask);
    inputTask.value = ''
})

