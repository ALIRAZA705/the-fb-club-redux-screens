import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {getUsers}  from './../redux/action/users';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Card from './CardComponent';
import { Component } from 'react';

// const Users = () => {
//   const dispatch = useDispatch();
//   const users = useSelector(state => state.users.users);

//   useEffect(() => {
//     dispatch(getUsers([
//       {
//         id: 1,
//         name: 'Leanne Graham',
//         company: {
//           name: "Romaguera-Crona",
//           catchPhrase: "Multi-layered client-server neural-net",
//         }
//       }
//     ]));
//   }, [])

//   return (
//     <>
//       {users.length > 0 && users.map((user) => (
//         <Card key={user.id} user={user} />
//         // console.log("users",user)
//       ))}
//       {users.length === 0 && <p>No users available!</p>}
//     </>
//   )
// }

class Users extends Component{
    render(){
        // return(
            return (
                <div>
                  {this.props.users.length > 0 && this.props.users.map((user) => (
                    <Card key={user.id} user={user} />
                    // console.log("users",user)
                  ))}
                  {this.props.users.length === 0 && <p>No users available!</p>}
                </div>
              )
        // )
    }
}
const mapStateToProps = state => {
    return {
        users:state.users.users,
        loading :state.users.loading,
        error :state.users.error,
    };
  };
  const mapDispatchToProps = dispatch => {
    // return {
      // dispatching plain actions
    //   increment: () => dispatch({ type: 'INCREMENT' }),
    //   decrement: () => dispatch({ type: 'DECREMENT' }),
    // bindActionCreators({ getUsers([
    //         {
    //             id: 1,
    //             name: 'Leanne Graham',
    //             company: {
    //               name: "Romaguera-Crona",
    //               catchPhrase: "Multi-layered client-server neural-net",
    //             }
    //           }
    //         ])
    //  }, dispatch);
    bindActionCreators( dispatch(getUsers()))
    //  dispatch(getUsers([
    //     {
    //         id: 1,
    //         name: 'Leanne Graham',
    //         company: {
    //           name: "Romaguera-Crona",
    //           catchPhrase: "Multi-layered client-server neural-net",
    //         }
    //       }
    //     ]))

    // }
  }
// export default Bookings
export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Users); 
