import React, { Component } from 'react'
import axios from 'axios'
import Card from './Card'

export default class allAccesorios extends Component {
  state = {
    fullAccesorios: [],
    category: {
      type: String,
      enum:["Mac", "Iphone","Ipad","Apple Watch","Accesorios","Otros"]
     },
  }
  componentDidMount() {
    axios 
    .get ('https://powerful-bayou-56783.herokuapp.com/products/?category=Accesorios')
    .then (({data})=>{
      this.setState({fullAccesorios:data})
    })
    .catch(err => console.log(err))
  }
  render() {
    const {fullAccesorios} = this.state
    return (
      <div>
        <div className="title-detail">
        <h1> Accesorios</h1>
        </div>
        {fullAccesorios.map((Accesorios,i)=>{
          return <Card key= {i} {...Accesorios}/>
        })}
      </div>
    )
  }
}
