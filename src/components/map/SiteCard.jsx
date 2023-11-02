import React from 'react'
import { Col, Row } from 'react-bootstrap'

const SiteCard = ({name, hours, address}) => {
  return (
    <>
      <Row className='my-4'>
            <Col xs={12} md={12} lg={12} xl={12}>
                <h3 className='text-start text-white text-bold ff-gotham-bold'>{name}</h3>
                <p className='text-start text-white ff-gotham-book'>
                {hours}
                </p>
                <p className='text-start text-white ff-gotham-book'>
                {address}
                </p>
            </Col>
      </Row>
      <hr className='d-block text-white' style={{
        height: '20px',
      }} />
    </>
  )
}

export default SiteCard
