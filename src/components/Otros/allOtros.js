import React, { Component } from 'react'
import axios from 'axios'
import Card from './Card'

export default class allOtros extends Component {
  state = {
    fullOtros: [],
    category: {
      type: String,
      enum:["Mac", "Iphone","Ipad","Apple Watch","Accesorios","Otros"]
     },
  }
  componentDidMount() {
    axios 
    .get ('https://powerful-bayou-56783.herokuapp.com/products/?category=Otros')
    .then (({data})=>{
      this.setState({fullOtros:data})
    })
    .catch(err => console.log(err))
  }
  render() {
    const {fullOtros} = this.state
    return (
      <div>
       <div className="title-detail">
        <h1> Otros</h1>
        </div>
        {fullOtros.map((Otros,i)=>{
          return <Card key= {i} {...Otros}/>
        })}
      </div>
    )
  }
}
