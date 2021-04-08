import { db } from '../config/Firebase.js'

export const UPDATE_USERS = 'UPDATE_USERS'

export const updateUsers = users => ({
  type: UPDATE_USERS,
  payload: users
})

export const fetchUser = () => {
  return async (dispatch, getState) => {
    try {
      const users = await db.collection('users')
      console.log('user::'.users);
      return updateUsers(users.docs.map(user => user.data()))
    } catch (error) {
      console.error(error)
    }
  }
}