import React from 'react'
import { useDispatch } from 'react-redux'
import {
  Button,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Label,
} from 'reactstrap'

import { useForm } from 'react-hook-form'
import { Connect } from '../../../../../stores/actions/Connect'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import { changeFlagSuppliers } from '../../../../../stores/states/Suppliers'

/**
 * En este modulo construimos el formulario para insertar o editar una marca
 * este modulo recibe los parametros
 * setList: este es una fucion que actualiza el estado local creado en "ListBrands" y recordemos que lo usamos como switch
 * para cambiar entre la vista de la tabla o del formulario
 * dataRow: este trae los datos de la Marca a editar si no trae datos es por que el formulario sera utilizado para crear un registro nuevo
 */
export const FormSuppliers = ({ setlist, dataRow }) => {
  //Creamos una instacia a la funcion Dispatch que nos permita modificar datos de los estados globales
  const dispatch = useDispatch()
  //Utilizarmos UseForm como un hook de proveedor externo, nos ayuda a capturar de forma facíl los datos que se registran
  //en el formulario para de esta manera poderlos tener facilmente disponibles datos
  //register: es el objeto que nos permite acceder a estos datos
  //handleSubmit: es la funcion que se dispara cada que existe un cambio en algun campo del formulario
  //control: se usa para un componente de tipo check requerido en este formulatio
  //formState: nos reporta si existe algun error en un campo al cual se le pase una validación un que sea obligatorio
  //Seteamos los valores por defetco con defaultValues
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      state: dataRow.state === undefined ? true : dataRow.state,
    },
  })

  //Esta funcion callBack se envia en el Connect que solicita crear un nuevo registro o editar un registro
  //una vez esta solicitud sea completada por "Connect" desde la funcion flecha "save" el conect llama a esta función
  //aqui utilizamos el dispatcha para cambiar la bandera que informara que hay un cambio por lo que quien escuche esta bandera en este caso el modulo
  //padre "ListBrands" tiene que solicitar al servidor nuevamente el listado actualizado de las marcas
  //tambien en este punto seteamos a "setList" que es una funcion que llega del "ListBrands" y es usada como switche para cambiar del listado a formulario y viseversa
  const callBack = (data) => {
    dispatch(changeFlagSuppliers(false))
    setlist(true)
  }

  //Esta funcion flecha recibe los datos del formulario y construye estos en un objeto Body para enviar al servidor bien sea para
  //crear un registro o editarlo
  //savemos si estamos creando un registro nuevo cuando dataRow no tiene ningun valor, y actualizar cuando este campo tiene los valores del registro a editar
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
                  <Col xs='7' sm='7' md='7'>
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
                        Nombre del proveedor{' '}
                        <span style={{ color: 'red' }}> * </span>{' '}
                        {errors.name && (
                          <span style={{ color: 'red' }}>
                            {' '}
                            Este campo es requerido{' '}
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

                  <Col xs='3' sm='3' md='3'>
                    <FormGroup>
                      <Label>lugar de origen</Label>
                      <input
                        type='text'
                        {...register('divipola', {
                          required: false,
                          maxLength: 100,
                        })}
                        defaultValue={dataRow.divipola}
                        className='form-control'
                      />
                    </FormGroup>
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
