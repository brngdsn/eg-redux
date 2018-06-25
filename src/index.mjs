import storeFactory from './store/store'
import { fetchPosts } from './store/actions'

const store = storeFactory(true)

store.dispatch(fetchPosts(`reactjs`))