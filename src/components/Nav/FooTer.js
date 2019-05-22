import React, {Component}from 'react'
import { Layout } from 'antd';
const { Footer } = Layout;


export default class FooTer extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Footer 
          style={{  textAlign: 'center' , backgroundColor: 'white'}}>
          Saul Corona.Inc ©2019 made with love at Ironhack

          </Footer>
        </Layout>
      </div>
    )
  }
}
