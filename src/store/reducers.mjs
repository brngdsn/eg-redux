import C from './constants'

export const color = (state={}, action) => {
    switch (action.type) {
        case C.ADD_COLOR:
            return {
                id: action.id,
                color: action.color,
                rating: 0
            }
        case C.RATE_COLOR:
            return (state.id !== action.id) ? state : {
                ...state,
                rating: action.rating
            }
        default:
            return state
    }
}

export const colors = (state=[], action) => {
    switch (action.type) {
        case C.ADD_COLOR:
            return [
                ...state,
                color({}, action)
            ]
        case C.RATE_COLOR:
            return state.map(c => color(c, action))
        case C.SORT_COLORS:
            return [...state].sort((a, b) => a.rating - b.rating)
        default:
            return state
    }
}

export const sort = (state=`NONE`, action) => {
    switch (action.type) {
        case C.SORT_COLORS:
            return action.sortBy
        default:
            return state
    }
}