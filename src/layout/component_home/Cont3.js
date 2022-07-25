import React from 'react'
import {Row, Col } from 'react-bootstrap'

export const Cont3 = ({params}) => {
    return (
        <div className="cont3">
            <Col md={12} className={params.sizeScreen}>
                <Col className="AppDownload" md={6} >
                    <Row>
                        <Col ><div className="btoApp"><span>Hablemos</span></div></Col>
                    </Row>
                    <Row>
                        <Col ><div className="btoApp"><span>Más de <b>idiky</b>...</span></div></Col>
                    </Row>
                </Col>
            </Col>
        </div>
    )
}
