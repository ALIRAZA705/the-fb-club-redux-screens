// import React, { Component } from 'react'
// import RegisterForm from './components/RegisterForm'
// class RegisterFormContainer extends Component {
//   submit = values => {
//     window.alert(JSON.stringify(values, null, 4));
//   }
//   getinitialValues() {
//     return {
//       preference: "spaces",
//       newsletter: true
//     }
//   }
//   render() {
//     return (
//       <RegisterForm onSubmit={this.submit} initialValues={this.getinitialValues()} />
//     )
//   }
// }
// export default RegisterFormContainer
import React from 'react';
import Users from './components/UsersComponent';
import './App.css';

function App() {
  return (
    <div className="App">
      <Users />
    </div>
  );
}

export default App;