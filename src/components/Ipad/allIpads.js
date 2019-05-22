import React, { Component } from 'react'
import axios from 'axios'
import Card from './Card'

export default class allIpads extends Component {
  state = {
    fullIpads: [],
    category: {
      type: String,
      enum:["Mac", "Iphone","Ipad","Apple Watch","Accesorios","Otros"]
     },
  }
  componentDidMount() {
    axios 
    .get ('https://powerful-bayou-56783.herokuapp.com/products/?category=Ipad')
    .then (({data})=>{
      this.setState({fullIpads:data})
    })
    .catch(err => console.log(err))
  }
  render() {
    const {fullIpads} = this.state
    return (
      <div>
        <div className="title-detail">
        <h1> Ipad</h1>
        </div>
        {fullIpads.map((Ipad,i)=>{
          return <Card key= {i} {...Ipad}/>
        })}
      </div>
    )
  }
}
