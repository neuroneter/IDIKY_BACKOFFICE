import React, {useEffect, useState} from 'react'
import {Button, Row, Col,  Card, CardHeader, CardBody, Table } from 'reactstrap';
import {Connect} from "../../../../../stores/actions/Connect"
import { Image, Transformation } from 'cloudinary-react';
import { CloudinaryContext } from "cloudinary-react";
import DeleteIcon from '@material-ui/icons/Delete';
import axios from 'axios';
import cloudinary from "cloudinary/lib/cloudinary";



cloudinary.config({
    cloud_name: 'idikydev',
    api_key: '948971119485737',
    api_secret: 'TuFiEnyZMNrgYsX1m4rglrqTgYo'
});

export const ListImagenTmp = () => {

    const [rowTable, setRowTable] = useState(<tr></tr>);

    const imgDefault = (url) => {
        return (<CloudinaryContext cloudName="idikydev" uploadPreset="bobSeller">
                <Image publicId={url} > 
                    <Transformation width="50" crop="scale" /> 
                </Image>
              </CloudinaryContext>)
    }


    const erase = (dataRow) => {
        cloudinary.v2.uploader.destroy(dataRow.url)
        .then(resp => {
            Connect('tmpimg/delete', {_id:dataRow._id}, 'POST', callBack.bind(this) );
        })
        .catch(_err=> console.log("No se puedo realizar la eliminación de la imagen"));
    }

    const callBack = (data) => {
        buildTable(data);
     }

    const buildTable = (data) => {
        const table = data.map( (row)  => {
            return (
            <tr key={row._id}>
                <th scope="row" className="align-items-center">{row._id}</th>
                <td>{row.source}</td>
                <td>{imgDefault(row.url)}</td>
                <td>
                    <div>
                        <DeleteIcon style={{cursor:"pointer"}} onClick={() => {
                            erase(row);
                        }}/>
                    </div>
                </td>
            </tr>)
       });
       setRowTable(table);
    }
    
    useEffect(() => { 
        Connect('tmpimg/list', null, 'GET', callBack.bind(this) );
    },[]);

    return (
            <Row>
                    <Col xs="12" md="12">
                    <Row>
                        <Col xs="12" md="12">
                        <Card>
                            <CardHeader>
                            <Row className="align-items-center">
                                <Col xs="12" sm="12" md="12">Listado de Imagenes Huerfanas</Col>
                            </Row>
                            </CardHeader>
                            <CardBody>
                                <Row className="align-items-center">
                                <Table striped>
                                    <thead>
                                        <tr>
                                            <th>Id</th>
                                            <th>Origen</th>
                                            <th>Imagen</th>
                                            <th>Editar</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {rowTable}
                                    </tbody>
                                </Table>
                                </Row>
                            </CardBody>
                        </Card>
                        </Col>
                    </Row>
                    </Col>
                </Row>
    )
}