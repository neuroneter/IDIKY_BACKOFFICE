import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  Button,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Label
} from 'reactstrap'
import { useForm } from 'react-hook-form'
import { Connect } from '../../../../../stores/actions/Connect'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import { changeFlagSuppliers } from '../../../../../stores/states/Suppliers';
import {Divipola} from '../../../../../components/cross/divipola';
import Select from 'react-select'

export const FormSuppliers = ({ setlist, dataRow }) => {

  const stateSuppliers = useSelector((state) => state.divipola);

  const dispatch = useDispatch()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      state: dataRow.state === undefined ? true : dataRow.state,
    },
  })

  const callBack = (data) => {
    dispatch(changeFlagSuppliers(false))
    setlist(true)
  }

  const options = [
    {value:'0', label:'NIT'},
    {value:'1', label:'CC'},
    {value:'2', label:'CE'}
  ]

  const save = (data) => {
    const body = {
      id: dataRow._id,
      name: data.name,
      divipola: data.divipola,
      zipCode: data.zipCode,
      description: data.description,
      chamberCom: data.chamberCom, 
      taxRegistry: data.taxRegistry,
      tradeAgree: data.tradeAgree,
      addres: data.addres,
      email: data.email,
      telephone: data.telephone,
      assignedAdvisor: data.assignedAdvisor,
      telephoneAdvisor: data.telephoneAdvisor,
      typeId: data.typeId,
      idNumber: data.idNumber,
      dv: data.dv,
      mercantileRegistration: data.mercantileRegistration,
      responsability: data.responsability,
      economyActivity: data.economyActivity
    }

    !dataRow._id
      ? Connect('supliers/push', body, 'POST', callBack.bind(this))
      : Connect('supliers/update', body, 'POST', callBack.bind(this))
  }

  return (
    <Row>
      <Col xs='12' md='12'>
        <Row>
          <Col xs='12' md='12'>
            <Card>
              <CardHeader>
                <Row className='align-items-center'>
                  <Col xs='8' sm='8' md='8'>
                    Editar o Crear un Proveedor
                  </Col>
                  <Col xs='2' sm='2' md='2'>
                    <Button
                      size='sm'
                      style={{ fontSize: 'medium' }}
                      onClick={() => setlist(true)}
                      block
                      className='float-right btn btn-success'
                    >
                      <ArrowBackIcon /> Regresar
                    </Button>
                  </Col>
                  <Col xs='2' sm='2' md='2'>
                    <Button
                      size='sm'
                      style={{ fontSize: 'medium' }}
                      onClick={handleSubmit(save)}
                      block 
                      className='float-right btn btn-success'
                    >
                      Guardar
                    </Button>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Row className='align-items-center'>
                  <Col xs='3' sm='3' md='3'>
                    <FormGroup>
                      <Label>
                        Nombre del proveedor
                        <span style={{ color: 'red' }}> * </span>
                        {errors.name && (
                          <span style={{ color: 'red' }}>
                            Este campo es requerido
                          </span>
                        )}
                      </Label>
                      <input
                        {...register('name', { required: true, maxLength: 40 })}
                        defaultValue={dataRow.name}
                        className='form-control'
                      />
                    </FormGroup>
                  </Col>

                  <Col xs='6' sm='6' md='6'>
                      <Divipola />
                  </Col>

                  <Col xs='3' sm='3' md='3'>
                    <FormGroup>
                      <Label>zipCode</Label>
                      <input
                        type='text'
                        {...register('zipCode', {
                          required: false,
                          maxLength: 100,
                        })}
                        defaultValue={dataRow.zipCode}
                        className='form-control'
                      />
                    </FormGroup>
                  </Col>
                </Row>

                <Row> 
                  <Col xs='5' sm='5' md='5'>
                    <FormGroup>
                      <Label>Dirección</Label>
                      <input
                        type='text'
                        {...register('addres', {
                          required: false,
                          maxLength: 100,
                        })}
                        defaultValue={dataRow.addres}
                        className='form-control'
                      />
                    </FormGroup>
                  </Col>
                 
                  <Col xs='2' sm='2' md='2'>
                    <FormGroup> 
                    <Label>Tipo de Documento</Label>
                    <Select options={options}
                    {...register('typeId', { required: true, maxLength: 40 })}
                    defaultValue={dataRow.typeId}
                    />
                    </FormGroup>
                  </Col>
                    
                  <Col xs='3' sm ='3' md='3'>
                    <Label>
                      Numero Documento
                      <span style={{ color: 'red' }}> * </span>
                      {errors.idNumber && (
                       <span style={{ color: 'red' }}>
                          Este campo es requerido
                        </span>
                      )}
                      </Label>
                      <input
                      {...register('idNumber', { required: true, maxLength: 40 })}
                      defaultValue={dataRow.idNumber}
                      className='form-control'
                      />
                  </Col>

                  <Col xs='2' sm='2' md='2'>
                    <Label>DV</Label>
                    <input
                    {...register('dv', { required: true, maxLength: 5 })}
                    defaultValue={dataRow.dv}
                    className='form-control'
                    />
                  </Col>
                </Row>
                <Row>
                  <Col xs='2' sm='2' md='2'>
                    <Label>Responsabilidad</Label>
                    <input
                    {...register('responsabilitity', { required: true, maxLength: 10 })}
                    defaultValue={dataRow.responsability}
                    className='form-control'
                    />
                  </Col>

                  <Col xs='3' sm='3' md='3'>
                    <Label>Registro Mercantil</Label>
                    <input
                    {...register('mercantileRegistration', { required: true, maxLength: 20 })}
                    defaultValue={dataRow.mercantileRegistration}
                    className='form-control'
                    />
                  </Col>

                  <Col xs='3' sm='3' md='3'>
                    <Label>Actividad Economica</Label>
                    <input
                    {...register('economyActivity', { required: true, maxLength: 20 })}
                    defaultValue={dataRow.economyActivity}
                    className='form-control'
                    />
                  </Col> 
                </Row>

                <Row> 
                <Col xs='3' sm='3' md='3'>
                    <FormGroup>
                      <Label>Email</Label>
                      <input
                        type='email'
                        {...register('email', {
                          required: false,
                          maxLength: 30,
                        })}
                        defaultValue={dataRow.email}
                        className='form-control'
                      />
                    </FormGroup>
                  </Col>

                  <Col xs='3' sm='3' md='3'>
                    <FormGroup>
                      <Label>Telefono</Label>
                      <input
                        type='text'
                        {...register('telephone', {
                          required: true,
                          maxLength: 100,
                        })}
                        defaultValue={dataRow.telephone}
                        className='form-control'
                      />
                    </FormGroup>
                  </Col>

                  <Col xs='3' sm='3' md='3'>
                    <FormGroup>
                      <Label>Asesor Asignado</Label>
                      <input
                        type='text'
                        {...register('asignedAdvisor', {
                          required: true,
                          maxLength: 100,
                        })}
                        defaultValue={dataRow.asignedAdvisor}
                        className='form-control'
                      />
                    </FormGroup>
                  </Col>

                  <Col xs='3' sm='3' md='3'>
                    <FormGroup>
                      <Label>Telefono Asesor</Label>
                      <input
                        type='text'
                        {...register('telephoneAdvisor', {
                          required: true,
                          maxLength: 100,
                        })}
                        defaultValue={dataRow.telephoneAdvisor}
                        className='form-control'
                      />
                    </FormGroup>
                  </Col>

                </Row>

                <Row> 
                  <Col xs='4' sm='4' md='4'>
                    <FormGroup>
                      <Label>Registro Tributario</Label>
                      <input
                        type='email'
                        {...register('taxRegistry', {
                          required: true,
                          maxLength: 30,
                        })}
                        defaultValue={dataRow.taxRegistry}
                        className='form-control'
                      />
                    </FormGroup>
                  </Col>

                  <Col xs='4' sm='4' md='4'>
                    <FormGroup>
                      <Label>Camara de comercio</Label>
                      <input
                        type='text'
                        {...register('chamberCom', {
                          required: true,
                          maxLength: 100,
                        })}
                        defaultValue={dataRow.chamberCom}
                        className='form-control'
                      />
                    </FormGroup>
                  </Col>

                  <Col xs='4' sm='4' md='4'>
                    <FormGroup>
                      <Label>Acuerdo Comercial</Label>
                      <input
                        type='text'
                        {...register('tradeAgree', {
                          required: true,
                          maxLength: 100,
                        })}
                        defaultValue={dataRow.tradeAgree}
                        className='form-control'
                      />
                    </FormGroup>
                  </Col>

                </Row>

                <Row></Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}
