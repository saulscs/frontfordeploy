import React from 'react'
import { Form, Input, Button, Row,Col} from 'antd';

function LoginForm({ handleInputs, handleSubmit }) {
  return (
    <Row type="flex" justify="center" align="middle">
      <Col span={16} push={12}>
    <Form layout="vertical" className="login-form" id="forms">
    <h1>Iniciar Sesion</h1>
      <Form.Item>
      <Input type="email" name="email"  placeholder="correo" onChange={handleInputs} />
      </Form.Item>
      <Form.Item>
      <Input type="password" name="password" placeholder="contraseña" onChange={handleInputs} />
      </Form.Item>
      <Form.Item>
      <Button type="primary"  onClick={handleSubmit}>Iniciar</Button>
      </Form.Item>
      </Form>
      </Col>
      </Row>
  )
}

export default LoginForm
