import { addTodo } from "../actions";

const initialData = {
    anandList: []
}


const todoReducers = (state = initialData, action) => {
    console.log('áction :', action);

    switch (action.type) {
        case 'ADD_TODO':
            const { id, data } = action.payload
            return {
                ...state,
                data: [
                    ...state.anandList,
                    { id: id, data: data }
                ]
            }


        default:
            return state
    }
}

export default todoReducers;