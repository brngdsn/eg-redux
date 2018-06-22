import C from './constants'

// action creators

export const addColor = (color) => {
    return {
        type: C.ADD_COLOR,
        id: Math.random(),
        color
    }
}

export const rateColor = (id, rating) => {
    return {
        type: C.RATE_COLOR,
        id,
        rating
    }
}

export const sortColors = (sortBy) => {
    return {
        type: C.SORT_COLORS,
        sortBy
    }
}