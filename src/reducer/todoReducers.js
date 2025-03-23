const initialData = {
    anandList: []
}


const todoReducers = (state = initialData, action) => {

    switch (action.type) {
        case 'ADD_TODO':
            const { id, data } = action.payload
            return {
                ...state,
                anandList: [
                    ...state.anandList,
                    { id: id, data: data }
                ]
            }

        case 'DELETE_TODO':
            const newList = state.anandList.filter((todo) => todo.id !== action.id)
            return {
                ...state,
                anandList: newList
            }

        case 'REMOVE_TODO':
            return{
                ...state,
                anandList: []
            }

        default:
            return state
    }
}

export default todoReducers;