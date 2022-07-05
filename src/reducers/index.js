import { combineReducers } from 'redux'

import inforeducer from '../reducers/infoReducer'
import spiderReducer from '../reducers/spider_fossils'
const allReducers = combineReducers({

    spider:spiderReducer,
    info:inforeducer
})
export default allReducers