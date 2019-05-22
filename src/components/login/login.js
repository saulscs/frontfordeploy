import React, { Component } from 'react'
import LoginForm from './loginForm'
import AuthService from '../../services/auth'
import toastr from 'toastr'


const service = new AuthService()

class Login extends Component {
  
  componentWillMount() {
    const user = localStorage.getItem('loggedUser')
    if (user) return this.props.history.push('/login')
  }

  state = {
    form: {
      email: '',
      password: ''
    }
  }

  handleInputs = e => {
    const { form } = this.state
    form[e.target.name] = e.target.value
    this.setState(form)
  }

  handleSubmit = () => {
    const { form } = this.state
    service
      .login(form)
      .then(response => {
        if (response.err) return toastr.error(response.err)
        this.props.history.push('/')
        toastr.success('Ya iniciaste sesión')
        window.localStorage.setItem('loggedUser', JSON.stringify(response.data))
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    return (
      <div style={{ width: '50vw' }}>
        <LoginForm handleInputs={this.handleInputs} handleSubmit={this.handleSubmit} />
      </div>
    )
  }
}

export default Login