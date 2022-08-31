import React from 'react'
import {Row, Col} from 'react-bootstrap'

export const Home = ({params}) => {
    
    return (
        <div className="container-fluid">
            <Row style={{height: "100vh"}}>
                <Col md={12}  style={{overflowY: "scroll", height: "100%"}}>
                    Estoy en Home    
                </Col>
            </Row>
        </div>
    )
}
