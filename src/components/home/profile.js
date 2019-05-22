import React, { Component } from 'react'
import { List, Avatar, Icon, Row,Col,Button } from 'antd';

const listData = [];
for (let i = 0; i < 1; i++) {
  listData.push({
    href: '/mac/5ce4d0c2b1d58745de7c6b87',
    title: `MacBook pro 2012${i}`,
    avatar: 'https://www.techlinc.in/wp-content/uploads/2019/02/facebookprofile_301007399129-300x200.jpg',
    description:
      'Atizapan de Zaragoza',
    content:
      'Macbook pro de 500 gb, con un par de años de uso. Se entrega con cargador.',
  });
}

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);



export default class profile extends Component {
  state ={
    email: '',
    name: '',
    photoURL: ''
}



  render() {
    return (
      <div>
        <h1>  Mis publicaciones</h1>
        <Row type="flex" justify="center">
        <Col span={18}>
        <List
    itemLayout="vertical"
    size="middl"
    pagination={{
      onChange: page => {
        console.log(page);
      },
      pageSize: 1,
    }}
    dataSource={listData}
    
    renderItem={item => (
      <List.Item
        key={item.title}
        actions={[
          <IconText type="star-o" text="156" />,
          <IconText type="like-o" text="156" />,
          <IconText type="message" text="2" />,
          <Button type="danger" >
          Borrar
        </Button>
        ]}
        extra={
          <img
            width={272}
            alt="logo"
            src="http://cdn.shopify.com/s/files/1/1886/1609/products/macbook-pro-13-inch_1024x1024.jpg?v=1527196043"
          />
        }
      >
        <List.Item.Meta
          avatar={<Avatar src={item.avatar} />}
          title={<a href={item.href}>{item.title}</a>}
          description={item.description}
        />
        {item.content}
      </List.Item>
    )}
  />
  </Col>
  </Row>
      </div>
    )
  }
}
