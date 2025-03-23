// We are defining actions here(using arrow function), it requied leter other information like payload!
export const addTodo = () => {
    return {
        type: 'ADD_TODO'
    }
}

export const deleteTodo = () => {
    return {
        type: 'DELETE_TODO'
    }
}

export const removeTodo = () => {
    return {
        type: 'REMOVE_TODO'
    }
}