import React from 'react'
import { Form, Icon, Input, Button,Row,Col } from 'antd'
import AuthService from '../../services/auth'
import toastr from 'toastr'


const service = new AuthService()

class NormalLoginForm extends React.Component {
  
  state={
    form: { 
      name: '',
      email: '', 
      password: ''
      
    }
  }
  handleInputs = e => {
    const { form } = this.state
    form[e.target.name] = e.target.value
    this.setState(form)
  }

  handleSubmit = e => {
    e.preventDefault()
    service
    .signup(this.state.form)
    .then(()=>this.props.history.push('/login'))
    .catch(err => toastr.error(err))
  }


  render() {
    const { getFieldDecorator } = this.props.form
    
    return (
      <Row type="flex" justify="center" align="middle">
        <Col span={16} push={12}>
      <Form onSubmit={this.handleSubmit } className="login-form" id="forms">
      <h1>Registrate</h1>
      <Form.Item>
          {getFieldDecorator('name', {
            rules: [{ required: true, message: 'Ingresa tu nombre de usuario' }]
          })(<Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} 
          name="name"
          onChange={this.handleInputs}
          placeholder="Nombre" />)}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('email', {
            rules: [{ required: true, message: 'Por favor pon tu correo' }]
          })(<Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} 
          name="email"
          onChange={this.handleInputs}
          placeholder="Correo" />)}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Ingresa una contraseña' }]
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              name="password"
          onChange={this.handleInputs}
              type="password"
              placeholder="Password"
            />
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Entrar
          </Button>
        </Form.Item>
      </Form>
      </Col>
      </Row>
    )
  }
}

const WrappedNormalSignupForm = Form.create({ name: 'normal_login' })(NormalLoginForm)

export default WrappedNormalSignupForm