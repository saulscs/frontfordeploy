import React from 'react'
import {Link} from 'react-router-dom'
import { Card, Row,Col } from 'antd';
const { Meta } = Card;

export default function Mac({
  title,
  image,
  price,
  _id,
}) {
  console.log(_id)
  return (
      <Row type="flex" justify="center">
        <Col span={4}>
      <Link to = {`/iphone/${_id}`}>
        <Card
    hoverable
    style={{ width: 350 }}
    cover={<img src={image} alt={Image} width="50px" />}
  >
    <Meta title={title} description={price} />
  </Card>,
      </Link>
      </Col>
      </Row>
  )
} 

