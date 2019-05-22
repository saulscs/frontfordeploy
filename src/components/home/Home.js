import React from 'react'
import { Layout } from 'antd';
import { Card, Col, Row,} from 'antd';
import {Link} from 'react-router-dom'

const { Content } = Layout;
const { Meta } = Card;

class Home extends React.Component {
  render() {
    return (
      <>
      
        {/* cover */}
        <header className="cover">
        <h1 className="cover-title">Buyer Place</h1>
        <p className="cover-text">Compra o vende productos  Apple de forma fácil y rápida. </p>
        </header>
        
        {/* cards */}

        <Content style={{ padding: '30px',     margin: '50px' }}>
        
        <Row gutter={16}>
      
      <Col span={8}>
      <Link to ={'/mac'}>
      <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="Mac" src="/Mac.jpg" />}
  >
    <Meta title=" MAC"/>
  </Card>
  </Link>
      </Col>
      
      <Col span={8}>
        <Link to = {'/iphone'}>
      <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="Iphone" src="/Iphone.png" />}
  >
    <Meta title=" IPHONE"/>
  </Card>
      </Link>
      </Col>
      
      <Col span={8}>
      <Link to ={'/ipad'}>
      <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="IPad" src="/Ipad.png" />}
  >
    <Meta title=" IPAD"/>
  </Card>
  </Link>
      </Col>
      </Row>
      <br/>
      <br/>
      <Row gutter={16}> 
      <Col span={8}>
        <Link to ={'/watch'}>
      <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="Apple Watch" src="/AppleWatch.png" />}
  >
    <Meta title=" APPLE WATCH"/>
  </Card>
  </Link>
      </Col>
      
      <Col span={8}>
        <Link to ={'/accesorios'}>
      <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="Accesorios" src="/Accesorios.jpg" />}
  >
    <Meta title=" ACCESORIOS"/>
  </Card>
  </Link>
      </Col>
      
      <Col span={8}>
        <Link to ={'/otros'}>
      <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="Otros" src="/Otros.jpg" />}
  >
    <Meta title=" OTROS"/>
  </Card>
  </Link>
      </Col>
    </Row>
        </Content>
        
      </>
    )
  }
}

export default Home


