import React, { Component } from 'react'
import AuthService from "../../services/auth"
import toastr from "toastr"

const service = new AuthService()

export default class Logout extends Component {
  
  handleLogout = () =>{
    service 
    .logout()
    .then (()=>{
      toastr.success("successful logout!!")
      window.localStorage.clear() 
      this.props.history.push('/login')
    })
    .catch(err => toastr.error(err))
  }

  render() {
    return (
       <div onClick={this.handleLogout}>
         salir
       </div>
    )
  }
}

