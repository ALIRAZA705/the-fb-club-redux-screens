// import * as types from '../types';
// export function GET_USERS(users){
//     return {
// type:types.GET_USERS,
// payload:users,
//     }
// }
import * as type from '../types';

export function getUsers() {
  return { 
    type: type.GET_USERS_REQUESTED,
    // payload: users,
  }
}