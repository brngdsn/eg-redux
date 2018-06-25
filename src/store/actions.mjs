import fetch from 'cross-fetch'
import C from './constants'

// action creators

const postsRequest = (subreddit) => {
    return {
        type: C.POSTS_REQUEST,
        subreddit
    }
}

const postsSuccess = (posts) => {
    return {
        type: C.POSTS_SUCCESS,
        posts
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
            .then(posts => dispatch(postsSuccess(posts.data.children)))
            .catch(error => dispatch(postsFailure(error)))
    }
}