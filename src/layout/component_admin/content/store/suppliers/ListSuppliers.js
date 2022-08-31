import React, { useEffect, useState } from 'react'

import {
  Button,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Table,
  Input,
} from 'reactstrap'
import { Connect } from '../../../../../stores/actions/Connect'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import { addSuppliers } from '../../../../../stores/states/store/Suppliers'
import { useDispatch, useSelector } from 'react-redux'
import { FormSuppliers } from './FormSuppliers'
import { Image, Transformation } from 'cloudinary-react'
import { CloudinaryContext } from 'cloudinary-react'
import { Modals } from '../../../../../components/cross/modals'
import { changeFlagSuppliers } from '../../../../../stores/states/store/Suppliers'

/**
 * Este Modulo lista los registros de marcas de la tabla ListBrands
 */
export const ListSuppliers = () => {
  //Funcion dispatch que permite disparar los reducer que estan en el store
  const dispatch = useDispatch()
  //Con esta línea podemos recuperar información que esta almacenada en el store

  const stateSuppliers = useSelector((state) => state.suppliers)

  //rowTable, es un estado local que almacena la construcción Html de la tabla
  const [rowTable, setRowTable] = useState(<tr></tr>)
  //list, es un estado que nos ayuda como un switch para cambiar entre la pantalla de listado de marcas y el formulario

  const [list, setList] = useState(true)
  //data, este estado nos permite almacenar la información que de un row que esta siendo seleccionado o para ser editado o eliminado
  const [data, setData] = useState({})
  //modal, es un estado que nos permite activar o desactivar la visualización de un modal
  const [modal, setModal] = useState(false)

  //Esta funcion callback se envía en la solicitud de conección "callBackErase" que espera la respuesta del servidor
  //que indica si un registro fue o no fue posible su eliminación
  const callBackEraseDB = (data) => {
    dispatch(changeFlagSuppliers(false))
  }

  const imgDefault = (url) => {
    return (
      <CloudinaryContext cloudName='idikydev' uploadPreset='bobSeller'>
        <Image publicId={url}>
          <Transformation width='50' crop='scale' />
        </Image>
      </CloudinaryContext>
    )
  }

  //la función flecha callBackErase es enviada por el modulo Modal y se dispara si en este modal el usuario acepta el proceso de borrado
  //llama al metodo connect solicitando eliminar un registro y se cierra el modal seteando un valor false
  const callBackErase = () => {
    setModal(false)
    Connect(
      'Suppliers/delete',
      {
        _id: data._id,
        name: data.name,
        divipola: data.divipola,
        zipCode: data.zipCode,
        urlCommerce: data.urlCommerce,
        urlRegistry: data.urlRegistry,
        urlTradeAgree: data.urlTradeAgree,
        source: 'suppliers',
      },
      'POST',
      callBackEraseDB.bind(this)
    )
  }

  //esta funcion flecha callBack, es utilizada desde el "useEffect" por el connect cuando se solicita todos los registros a listar de la tabla brands
  //se llama a esta funcion una vez el servidor retorna los datos a connect
  //Aqui realizamos el seteo de los "data" en el Estado global Brands a travez del dispatch llamando al reducer "addBrands" este se encarga de setear los
  //datos en el estado y notificar a todos los modulos que pueden usar estos datos
  //tambien realizamo la construcción de la tabla que listara los datos recuperados a travez del connect a el servidor
  const callBack = (data) => {
    //dispatch(addSuppliers(data))
    buildTable(data)
    //console.log(data)
  }

  //Funcion flecha que abstrae la construcción de la tabla utilizando un bucle "map" el cual nos permite construir la misma estructura de la tabla
  //de forma repetitiva y retornar a la tabla
  const buildTable = (data) => {
    const table = data.map((row) => {
      return (
        <tr key={row._id}>
          <th scope='row' className='align-items-center'>
            {row._id}
          </th>
          <td>
            {row.state && <Input type='checkbox' defaultChecked={true} />}
            {!row.state && <Input type='checkbox' defaultChecked={false} />}
          </td>
          <td>{row.name}</td>
          <td>{row.divipola}</td>
          <td>{row.zipCode}</td>
          <td>{imgDefault(row.urlCommerce)}</td>
          <td>{imgDefault(row.urlRegistry)}</td>
          <td>{imgDefault(row.urlTradeAgree)}</td>
          <td>
            <div>
              <EditIcon
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  setData(row)
                  setList(false)
                }}
              />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <DeleteIcon
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  setData(row)
                  setModal(true)
                }}
              />
            </div>
          </td>
        </tr>
      )
    })
    setRowTable(table)
  }

  //En esta funcion hook verificamos si hay datos en el estado brands para no llamar nuevamente al servidor por esta solicitud
  //si la vandera es de valor "false" llamaremos nuevamente al servidor para obtener los datos actualizados
  //importante que la badera sea cambiada en aquellos lugares donde sabemos que los datos fueron modificados, creados o eliminados
  //esto para que se pueda nuevamente realizar una recarga de los datos en el estado global de Brands

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (!stateSuppliers.flagSuppliers)
      Connect('suppliers/list', null, 'GET', callBack.bind(this))
    else buildTable(stateSuppliers.allSuppliers)
  }, [stateSuppliers.allSuppliers])

  return (
    <>
      {
        //Utilizamos list si esta es false es por que mostraremos el formulario de Brands si es true mostraremos la tabla de todos los registros de Brands
        list && (
          <Row>
            <Col xs='12' md='12'>
              <Row>
                <Col xs='12' md='12'>
                  <Card>
                    <CardHeader>
                      <Row className='align-items-center'>
                        <Col xs='10' sm='10' md='10'>
                          Listado de Proveedores
                        </Col>
                        <Col xs='2' sm='2' md='2'>
                          <Button
                            size='sm'
                            style={{ fontSize: 'medium' }}
                            onClick={() => {
                              setData({})
                              setList(false)
                            }}
                            block
                            className='float-right btn btn-success active'
                          >
                            Crear
                          </Button>
                        </Col>
                      </Row>
                    </CardHeader>
                    <CardBody>
                      <Row className='align-items-center'>
                        <Table striped>
                          <thead>
                            <tr>
                              <th>Id</th>
                              <th>Estado</th>
                              <th>Nombre</th>
                              <th>Divipola</th>
                              <th>Zipcode</th>
                              <th>Descripción</th>
                            </tr>
                          </thead>
                          <tbody>{rowTable}</tbody>
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
      {
        //Utilizamos list si esta es false es por que mostraremos el formulario de Brands si es true mostraremos la tabla de todos los registros de Brands
        !list && <FormSuppliers setlist={setList.bind(this)} dataRow={data} />
      }

      {
        //aqui llamamos el modulo Modals que nos sirve para verificar una decisión en este caso fue la de borrar algo
      }
      <Modals
        setModal={setModal.bind(this)}
        modal={modal}
        title='Usted quiere eliminar este registro!'
        btons={{ label: 'Eliminar', callBackErase: callBackErase.bind(this) }}
      />
    </>
  )
}
