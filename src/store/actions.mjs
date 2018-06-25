import fetch from 'cross-fetch'
import C from './constants'

// action creators

const postsRequest = (subreddit) => {
    return {
        type: C.POSTS_REQUEST,
        subreddit
    }
}

const postsSuccess = (json) => {
    return {
        type: C.POSTS_SUCCESS,
        posts: json.data.children.map(c => c.data)
    }
}

const postsFailure = (error) => {
    return {
        type: C.POSTS_FAILURE,
        error
    }
}

export const fetchPosts = (subreddit) => {
    return (dispatch) => {
        dispatch(postsRequest(subreddit))
        return fetch(`https://www.reddit.com/r/${subreddit}.json`)
            .then(response => response.json())
            .then(json => dispatch(postsSuccess(json)))
            .catch(error => dispatch(postsFailure(error)))
    }
}