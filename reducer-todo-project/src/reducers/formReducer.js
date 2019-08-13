export const initialState = {
    item: [
        {
            item: 'Learn about reducers',
            completed: false,
            id: 3892987589
        }
    ]
}

export const formReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                item: [...state.item, action.payload]
            }
        default:
            return state;
    }
}
