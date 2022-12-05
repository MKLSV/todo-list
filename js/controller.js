
function onInit() {
    renderTodos()
}

function renderTodos() {
    const todos = getTodosForDisplay()
    console.log(todos)
    console.log('here')
    const strHTMLs = todos.map(todo => `
    <li class="${(todo.isDone) ? "done" : ""}"
    onclick="onToggleTodo('${todo.id}')"><span class="${todo.importance}">
    ${todo.txt} </span>
    <button onclick="onRemoveTodo(event,'${todo.id}')">x</button> 
    </li>` )
    if (todos.length) {
        document.querySelector('.empty').style.display = 'none'
    } else document.querySelector('.empty').style.display = 'block'

    document.querySelector('.todo-list').innerHTML = strHTMLs.join('')

    document.querySelector('.total-todos').innerText = getTotalTodos()
    document.querySelector('.active-todos').innerText = getActiveTodos()
}

function onAddTodo(ev) {
    ev.preventDefault()
    const elTxt = document.querySelector('input[name="todo-txt"]')
    const txt = elTxt.value
    if (!txt) return
    const elImportance = document.querySelector('.importance')
    const importance = elImportance.value
    // console.log('txt', txt)
    addTodo(txt, importance)
    elTxt.value = ''
    renderTodos()

}

function onRemoveTodo(ev, todoId) {
    ev.stopPropagation()
    // console.log('Removing', todoId)
    if (confirm('Are you sure?')) {
        removeTodo(todoId)
        renderTodos()
    }
}

function onToggleTodo(todoId) {
    // console.log('Toggling', todoId)
    toggleTodo(todoId)
    renderTodos()
}

function onSetFilter(filterBy) {
    // console.log('filterBy', filterBy)
    setFilter(filterBy)
    renderTodos()
}
function onSort(sortBy) {
    sort(sortBy)
    renderTodos()
}


