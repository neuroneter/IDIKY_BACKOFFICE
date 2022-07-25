import React from 'react'
import {Row, Col } from 'react-bootstrap'
import logo from '../../assets/img/logo.png'
import img_firts from '../../assets/img/home_img.png'

export const Cont1 = ({params}) => {

    return (
        <div className="cont1">
            <div className={params.sizeScreen}>
                <Row className="g-0">
                    <Col md={2} className="logo">
                        <img src={logo} alt="idiky Logo" />
                        <span><b>idiky</b></span>
                    </Col>
                </Row>
                <Row className="g-0">
                    <Col className="imgHome">
                        <img src={img_firts} alt="Vecinos"/>
                    </Col>
                </Row>
                <Row className="description g-0">
                    <Col md={12}><h2><b>idiky</b> App</h2></Col>
                    <Col md={12}><h1>Vive en comunidad, comparte, ayuda, vende y administra tu hogar de una forma fácil y segura.</h1></Col>
                </Row>
            </div>
        </div>
    )
}
