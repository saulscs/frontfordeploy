import React, { Component } from 'react'
import axios from "axios"

import {Form, Row, Col,Input, Button,Upload, Icon} from 'antd'
const { TextArea } = Input

const initialState ={
  title: '',
  price: '',
  description: '',
  image: '',
  category: {enum:[]},
  address:'',
}



export default class form extends Component {
  state ={
  title: '',
  price: '',
  description: '',
  image: '',
  category: {enum:[]},
  address:''
}
handleChange = event =>{
  const {name,value} = event.target
  this.setState({ [name]: value })
}

handleSubmitForm = event => {
  event.preventDefault()
  axios
  .post('https://powerful-bayou-56783.herokuapp.com/products', this.state)
  .then(res => {
    console.log(res)
    this.setState({ ...initialState })
  })
  .catch(err => console.log(err))
}

  render() {
    const formItemLayout = {
      labelCol: {
        xs: { span: 12 },
        sm: { span: 12 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    
    return (
      <div>
        <h1>  Publica tu anuncio</h1>
      <Row type="flex" justify="space-around" align="middle">
      <Col span={12} offset={6}>
        <Form {...formItemLayout} onSubmit={this.handleSubmit } lassname="login-form" id="forms">
        
        <Form.Item label="Titulo de tu publicacion">
          <Input
          type="text"
          placeholder="titulo"
          name="title"
          value={this.state.title}
          onChange={this.handleChange}
          />
        </Form.Item>
        <Form.Item label="Precio">
          <Input
          type="text"
          placeholder="Precio"
          name="price"
          value={this.state.price}
          onChange={this.handleChange}
          />
        </Form.Item>

    <Form.Item label="Sube la foto del producto">
    <Upload action="http://res.cloudinary.com/innovadorez" directory 
    name="image"
    value={this.state.image}
    onChange={this.handleChange}
    >
    <Button>
      <Icon type="upload" /> Upload Directory
    </Button>
  </Upload>
  </Form.Item>
  <Form.Item label="Descripción">
          <TextArea
          autosize
          type="text"
          size="large"
          placeholder="Especifica: Modelo, Capacidad,Color,Si incluye accesorios,
          el estado del producto, si el precio es negociable o no"
          name="description"
          value={this.state.description}
          onChange={this.handleChange}
          />
        </Form.Item>
 <Form.Item label="Seleciona la categoria correcta">
 <Input
          type="text"
          
          size="large"
          placeholder="Mac,Iphone,Ipad,Apple Watch, Accesorios, Otros"
          name="category"
          value={this.state.category.enum}
          onChange={this.handleChange}
          />
   </Form.Item>       
        <Form.Item>
        <Form.Item label="En donde puedes entregar">
 <Input
          type="text"
          
          size="large"
          placeholder="Coloca la direccion y pon referencias del lugar"
          name="address"
          value={this.state.address}
          onChange={this.handleChange}
          />
   </Form.Item>       
          <Button type="primary" htmlType="submit">
            Enviar
          </Button>
        </Form.Item>
        </Form>
        </Col>
        </Row>
      </div>
    )
  }
}
