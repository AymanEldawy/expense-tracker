import {combineReducers} from 'redux';
import reducerSkills from './reducers/skills-reducer'
import reducerProfile from './reducers/profile-reducer'

export default combineReducers({
  reducerSkills,
  reducerProfile
})