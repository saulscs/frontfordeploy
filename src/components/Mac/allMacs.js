import React, { Component } from 'react'
import axios from 'axios'
import Card from './Card'

export default class allMacs extends Component {
  state = {
    fullMacs: [],
    category: {
      type: String,
      enum:["Mac", "Iphone","Ipad","Apple Watch","Accesorios","Otros"]
     },
  }
  componentDidMount() {
    axios 
    .get ('http://localhost:3000/products/?category=Mac')
    .then (({data})=>{
      this.setState({fullMacs:data})
    })
    .catch(err => console.log(err))
  }

  render() {
    const {fullMacs} = this.state
    return (
      <div>
        <div className="title-detail">
        <h1> Mac</h1>
        </div>
        {fullMacs.map((Mac,i)=>{
          return <Card key= {i} {...Mac}/>
        })}
      </div>
    )
  }
}
