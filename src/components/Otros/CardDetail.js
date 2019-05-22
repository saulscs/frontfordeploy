import React, { Component } from 'react'
import axios from 'axios'
import { Button} from 'antd';

export default class CardDetail extends Component {
  state = {
    data: []
  }

  componentDidMount(){
    const { id } = this.props.match.params
    console.log(id)
    axios
    .get(`http://localhost:3000/products/${id}`)
    .then(({data}) => {
      this.setState({ data })
      console.log(data)
    })
    .catch(err => console.log(err))
  }
  render() {
   const  {
    
    image,
    title,
    price,
    description,
    
  } = this.state.data

    return (
      <div className="container">
        <h1>{title}</h1>
        <img src={image} alt={Image} width="720px" />
        <p>{price}</p>
       
        <Button type="primary" icon="user" size={"large"}  target="gmail" href="https://mail.google.com/mail/?view=cm&fs=1&tf=1?&to=userInfo@gmail.com&body=Hola estoy interesado en en este dispositivo">
    
          Contactar vendedor
          
        </Button>
        <p>{description}</p>
        
      </div>
    )
  }
}
