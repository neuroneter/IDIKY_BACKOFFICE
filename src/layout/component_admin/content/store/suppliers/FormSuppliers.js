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
import {Divipola} from '../../../../../components/cross/divipola'

export const FormSuppliers = ({ setlist, dataRow }) => {

  const stateDivipola = useSelector((state) => state.divipola);

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

  const save = (data) => {
    const body = {
      id: dataRow._id,
      name: data.name,
      divipola: data.divipola,
      zipCode: data.zipCode,
      description: data.description,
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
                      <Divipola defaultCiti="08141"/>
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

                  <Col xs='8' sm='8' md='8'>
                    <FormGroup>
                      <Label>Descripción</Label>
                      <input
                        type='text'
                        {...register('description', {
                          required: false,
                          maxLength: 100,
                        })}
                        defaultValue={dataRow.description}
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
