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
      <Row type="flex" justify="center" gutter={16}>
        <Col span={4}>
      <Link to = {`/mac/${_id}`}>
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

