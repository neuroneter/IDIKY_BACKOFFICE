import React from 'react'
import {Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAppStoreIos, faGooglePlay} from '@fortawesome/free-brands-svg-icons'
import app from '../../assets/img/app.png'
import {Link} from 'react-router-dom'

export const Cont2 = ({params}) => {
    return (
        <div className="cont2">
            <Col md={12} className={params.sizeScreen}>
                <Row className="g-0">
                    <Col md={6}>
                        <img src={app} alt="App"/>
                    </Col>
                    <Col className="AppDownload" md={6}>
                        <Row className="g-0">
                            <Col md={12}><h2>Descarga la APP</h2></Col>
                            <Col md={12}><div className="btoApp"><FontAwesomeIcon icon={faAppStoreIos}/><span>Itune</span></div></Col>
                            <Col md={12}><div className="btoApp"><FontAwesomeIcon icon={faGooglePlay}/><span>Play Store</span></div></Col>
                            <Col md={12}>
                                <Link to={`./admin` }>
                                    <div className="btoApp"><span>Administrador</span></div>
                                </Link>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
        </div>
    )
}
