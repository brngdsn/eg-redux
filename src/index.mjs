import storeFactory from './store/store'
import { addColor, rateColor, sortColors } from './store/actions'

const store = storeFactory(true)

store.dispatch(rateColor(0, 3))
store.dispatch(addColor('#eee'))
store.dispatch(sortColors('SORT_BY_RATING'))