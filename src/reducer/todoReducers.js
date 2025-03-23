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


        default:
            return state
    }
}

export default todoReducers;