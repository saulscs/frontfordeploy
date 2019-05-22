import React, { Component } from 'react'
import axios from 'axios'
import Card from './Card'

export default class allIphones extends Component {
  state = {
    fullIphones: [],
    category: {
      type: String,
      enum:["Mac", "Iphone","Ipad","Apple Watch","Accesorios","Otros"]
     },
  }
  componentDidMount() {
    axios 
    .get ('https://powerful-bayou-56783.herokuapp.com/products/?category=Iphone')
    .then (({data})=>{
      this.setState({fullIphones:data})
    })
    .catch(err => console.log(err))
  }
  render() {
    const {fullIphones} = this.state
    return (
      <div>
       <div className="title-detail">
        <h1> Iphone</h1>
        </div>
        {fullIphones.map((Iphone,i)=>{
          return <Card key= {i} {...Iphone}/>
        })}
      </div>
    )
  }
}
