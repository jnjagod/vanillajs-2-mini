document.querySelector('form').addEventListener('submit', addTodo)

function addTodo(e){
    e.preventDefault()
    let item = document.createElement('li')
    item.innerText = document.querySelector('#item').value
    item.addEventListener('click', completeTodo)

    let button = document.createElement('button')
    button.innerText = 'x'
    button.addEventListener('click', removeTodo)
    item.append(button)
    
    document.querySelector('ul').appendChild(item)
}

function removeTodo(e){
    e.target.parentNode.remove()
}

function completeTodo(e){
    let value = e.target.getAttribute('aria-checked')
    e.target.setAttribute('aria-checked', !(value === 'true'))
}
