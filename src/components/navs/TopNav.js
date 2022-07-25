import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentDots } from '@fortawesome/free-solid-svg-icons'
import { Row, Col } from "react-bootstrap";

export const TopNav = () => {
    return (
      <Row className='components_topnav'>
        <Col xs={12}></Col>
        <Col xs={1}>
          <FontAwesomeIcon icon={faCommentDots} style={{color:"width"}}/><span>Hablemos</span>
        </Col>
      </Row>
    )
}

//xs (<576px)
//sm (≥576px)
//md (≥768px)
//lg (≥992px)
//xl (≥1200px)
//xxl (≥1400px)