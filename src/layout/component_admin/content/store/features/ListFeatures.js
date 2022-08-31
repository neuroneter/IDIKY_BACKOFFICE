import React, {useEffect, useState} from 'react'
import { useDispatch } from 'react-redux'
import {Button, Row, Col,  Card, CardHeader, CardBody, Table } from 'reactstrap';
import {Connect} from "../../../../../stores/actions/Connect"
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { addFeatures } from '../../../../../stores/states/store/Features'
import {useSelector} from 'react-redux';
import { FormFeatures } from './FormFeatures';
import { Modals } from '../../../../../components/cross/modals';
import { changeFlag } from '../../../../../stores/states/store/Brands';

export const ListFeatures = () => {

    const dispatch = useDispatch();
    const stateFeatures = useSelector(state => state.features);

    const [rowTable, setRowTable] = useState(<tr></tr>);
    const [list, setList] = useState(true);
    const [data, setData] = useState({});
    const [modal, setModal] = useState(false);

    const callBackEraseDB  = (data) => {
        dispatch(changeFlag(false));
    }

    const callBackErase = () => {
        setModal(false);
        Connect('features/delete', {_id:data._id, urlIcon:data.urlIcon, urlImage:data.urlImage, source:"feature"}, 'POST', callBackEraseDB.bind(this) );
    }

    const callBack = (data) => {
        dispatch(addFeatures(data));
        buildTable(data);
     }

     const concatFeatures = (obj) => {
        let val = '';
        obj.forEach(row => {
            val = (val !== '')? row.name+", "+val: row.name;
        })
        return val;
     }

    const buildTable = (data) => {
       const table = data.map( (row)  => {
            return (
            <tr key={row._id}>
                <th scope="row" className="align-items-center">{row._id}</th>
                <td>{row.name}</td>
                <td>
                    {concatFeatures(row.attributes)}
                </td>
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
        if(!stateFeatures.flagBrands) Connect('features/list', null, 'GET', callBack.bind(this) );
        else buildTable(stateFeatures.allBrands);
    },[stateFeatures.flagBrands]);

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
                                <Col xs="10" sm="10" md="10">Listado de Caracteristicas</Col>
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
                                            <th>Caracteristicas</th>
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
                &&<FormFeatures setlist={setList.bind(this)} dataRow={data}/>
            }
        
            {}

            <Modals setModal={setModal.bind(this)} modal={modal} title="Usted quiere eliminar este registro!" btons={{label:"Eliminar", callBackErase:callBackErase.bind(this)}} />
        </>
    )
}