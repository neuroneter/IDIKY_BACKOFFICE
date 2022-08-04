import React, {useEffect, useState} from 'react'
import { useDispatch } from 'react-redux'
import {Button, Row, Col,  Card, CardHeader, CardBody, Table, Input } from 'reactstrap';
import {Connect} from "../../../../../stores/actions/Connect"
import { Image, Transformation } from 'cloudinary-react';
import { CloudinaryContext } from "cloudinary-react";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { addCategories, changeFlagCategories } from '../../../../../stores/states/Categories';
import {useSelector} from 'react-redux';
import { FormCategories } from './FormCategories';
import { Modals } from '../../../../../components/cross/modals';


export const ListCategories = () => {

    const dispatch = useDispatch();
    const stateCategories = useSelector(state => state.categories);

    const [rowTable, setRowTable] = useState(<tr></tr>);
    const [list, setList] = useState(true);
    const [data, setData] = useState({});
    const [modal, setModal] = useState(false);

    const imgDefault = (url) => {
        return (<CloudinaryContext cloudName="idikydev" uploadPreset="bobSeller">
                <Image publicId={url} > 
                    <Transformation width="50" crop="scale" /> 
                </Image>
              </CloudinaryContext>)
    }

    const callBackEraseDB  = (data) => {
        dispatch(changeFlagCategories(false));
    }

    const callBackErase = () => {
        setModal(false);
        Connect('categories/delete', {id:data._id, urlIcon:data.urlIcon, urlImage:data.urlImage, source:"categories"}, 'POST', callBackEraseDB.bind(this) );
    }

    const callBack = (data) => {
        dispatch(addCategories(data));
        buildTable(data);
     }

    const buildTable = (data) => {
        const table = data.map( (row)  => {
            return (
            <tr key={row._id}>
                <th scope="row" className="align-items-center">{row._id}</th>
                <td>{row.name}</td>
                <td>{row.description}</td>
                <td>{imgDefault(row.urlIcon)}</td>
                <td>{imgDefault(row.urlImage)}</td>
                <td>
                    <div>
                        <EditIcon style={{cursor:"pointer"}} onClick={() => {
                            setData(row);
                            setList(false);
                        }}/>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <DeleteIcon style={{cursor:"pointer"}} onClick={() => {
                            setData(row);
                            setModal(true);
                        }}/>
                    </div>
                </td>
            </tr>)
       });
       setRowTable(table);
    }
    
    useEffect(() => { 
        if(!stateCategories.flagCategories) Connect('categories/list', null, 'GET', callBack.bind(this) );
        else buildTable(stateCategories.allCategories);
    },[stateCategories.flagCategories]);

    return (
        <>
            {
                (list)
                &&<Row>
                    <Col xs="12" md="12">
                    <Row>
                        <Col xs="12" md="12">
                        <Card>
                            <CardHeader>
                            <Row className="align-items-center">
                                <Col xs="10" sm="10" md="10">Listado de Marcas</Col>
                                <Col xs="2" sm="2" md="2">
                                <Button size="sm" style={{fontSize:"medium"}} onClick={() => {
                                    setData({});
                                    setList(false);
                                }} block className="float-right btn btn-success active">
                                    Crear
                                </Button>
                                </Col>
                            </Row>
                            </CardHeader>
                            <CardBody>
                                <Row className="align-items-center">
                                <Table striped>
                                    <thead>
                                        <tr>
                                            <th>Id</th>
                                            <th>Nombre</th>
                                            <th>Descripción</th>
                                            <th>Icon</th>
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
            }
            {
                (!list)
                &&<FormCategories setlist={setList.bind(this)} dataRow={data}/>
            }

            <Modals setModal={setModal.bind(this)} modal={modal} title="Usted quiere eliminar este registro!" btons={{label:"Eliminar", callBackErase:callBackErase.bind(this)}} />
        </>
    )
}