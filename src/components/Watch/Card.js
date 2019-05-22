import React from 'react'
import {Link} from 'react-router-dom'
import { Card, Row,Col } from 'antd';
const { Meta } = Card;

export default function Watch({
  title,
  image,
  price,
  _id,
}) {
  return (
      <Row type="flex" justify="center">
        <Col span={4}>
      <Link to = {`/watch/${_id}`}>
        <Card
    hoverable
    style={{ width: 350 }}
    cover={<img src={image} alt={image} width="50px" />}
  >
    <Meta title={title} description={price} />
  </Card>
      </Link>
      </Col>
      </Row>
  )
} 