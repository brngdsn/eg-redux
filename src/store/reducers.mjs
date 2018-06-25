import C from './constants'
import { fetchPosts } from './actions'

export const posts = (
    state={
        isFetching: false, error: null, data: []
    },
    action
) => {
    switch (action.type) {
        case C.POSTS_REQUEST:
            return {
                ...state,
                isFetching: true
            }
        case C.POSTS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                data: action.posts
            }
        case C.POSTS_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.error,
                data: []
            }
        default:
            return state
    }
}