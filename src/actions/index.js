// We are defining actions here(using arrow function), it requied leter other information like payload!
export const addTodo = (data) => {
    return {
        type: 'ADD_TODO',
        payload: {
            // for random unique id
            id: new Date().getTime().toString(),
            data: data
        }
    }
}

export const deleteTodo = (id) => {
    return {
        type: 'DELETE_TODO',
        id
    }
}

export const removeTodo = () => {
    return {
        type: 'REMOVE_TODO'
    }
}