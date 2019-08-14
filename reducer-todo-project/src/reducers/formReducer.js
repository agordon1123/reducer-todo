export const initialState = {
    item: [
        {
            item: 'Learn about reducers',
            completed: false,
            id: 3892987589
        },
        {
            item: 'Learn about redux',
            completed: false,
            id: 3892987581
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
        case 'TOGGLE_ITEM':
            return {
                ...state,
                item: state.item.map(todo => {
                    if (todo.id === action.payload)
                    return {...todo, 
                            completed: !todo.completed 
                        }
                    else {
                        return todo;
                    }
                })
            }
        case 'CLEAR_ITEMS':
                return {
                    ...state,
                    item: state.item.filter(i => !i.completed)
                }
        default:
            return state;
    }
}
