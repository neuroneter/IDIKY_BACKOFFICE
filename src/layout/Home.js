import React from 'react'
import {Row, Col } from 'react-bootstrap'
import {Cont1} from './component_home/Cont1'
import {Cont2} from './component_home/Cont2'
import {Cont3} from './component_home/Cont3'


export const Home = ({params}) => {

    //const {history, sizeScreen}
    const {sizeScreen} = params;

    return (
        <div className = "homeContent">
                       
            {
                (sizeScreen === "isBigDesktop" || sizeScreen === "isDesktop" || sizeScreen === "isDafault")
                && <Row className={sizeScreen+" g-0"}>
                        <Col md={8}>
                            <Cont1 params={params}/>
                        </Col>
                        <Col md={4}>
                            <Cont2 params={params}/>
                            <Cont3 params={params}/>
                        </Col>
                    </Row>
            }

            {
                (sizeScreen === "isSmallDesktop")
                && <Row className={sizeScreen+" g-0"}>
                        <Col md={7}>
                            <Cont1 params={params}/>
                        </Col>
                        <Col md={5}>
                            <Cont2 params={params}/>
                            <Cont3 params={params}/>
                        </Col>
                    </Row>
            }

            {
                (sizeScreen === "isTablet")
                && <Row className={sizeScreen+" g-0"}>
                        <Col md={12}>
                            <Cont1 params={params}/>
                        </Col>
                        <Col md={12}>
                            <Cont2 params={params}/>
                            <Cont3 params={params}/>
                        </Col>
                    </Row>
            }

            {
                (sizeScreen === "isMobile")
                && <Row className={sizeScreen+" g-0"}>
                        <Col md={12}>
                            <Cont1 params={params}/>
                        </Col>
                        <Col md={12}>
                            <Cont2 params={params}/>
                            <Cont3 params={params}/>
                        </Col>
                    </Row>
            }

        </div>
    )
}


//xs (<576px)
//sm (≥576px)
//md (≥768px)
//lg (≥992px)
//xl (≥1200px)
//xxl (≥1400px)