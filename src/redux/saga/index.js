import { all } from 'redux-saga/effects'
import userSaga from './usersaga'

export default function* rootSaga() {
  yield all([
    userSaga(),
  ])
}