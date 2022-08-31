import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
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
import { Upload } from '../../../../../components/cross/upload'
import { Image, Transformation } from 'cloudinary-react'
import { CloudinaryContext } from 'cloudinary-react'
import { useForm } from 'react-hook-form'
import { changeFlagSuppliers } from '../../../../../stores/states/store/Suppliers'
import { Divipola } from '../../../../../components/cross/divipola'
import { Connect } from '../../../../../stores/actions/Connect'
import Select from 'react-select'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'

export const FormSuppliers = ({ setlist, dataRow }) => {
  console.log(dataRow)
  const stateDivipola = useSelector((state) => state.divipola)

  const dispatch = useDispatch()
  const imgDefault = (tipo) => {
    let urlImg = 'v1659380500/default-product_vmta3h.jpg'
    if (tipo === 'img' && dataRow.urlCommerce !== undefined)
      urlImg = dataRow.urlCommerce
    if (tipo === 'img' && dataRow.urlRegistry !== undefined)
      urlImg = dataRow.urlRegistry
    if (tipo === 'img' && dataRow.urlTradeAgree !== undefined)
      urlImg = dataRow.urlTradeAgree

    return {
      url: urlImg,
      view: (
        <CloudinaryContext cloudName='idikydev' uploadPreset='bobSeller'>
          <Image publicId={urlImg}>
            <Transformation width='100' crop='scale' />
          </Image>
        </CloudinaryContext>
      ),
    }
  }

  const [imgCommerce, setImgCommerce] = useState(imgDefault('img'))
  const [imgRegistry, setImgRegistry] = useState(imgDefault('img'))
  const [imgTradeAgree, setImgTradeAgree] = useState(imgDefault('img'))

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      state: dataRow.state === undefined ? true : dataRow.state,
    },
  })

  const [typeDoc, setTypeDoc] = useState(dataRow.typeDoc)

  const callBack = (data) => {
    dispatch(changeFlagSuppliers(false))
    setlist(true)
  }

  const options = [
    { value: '0', label: 'NIT' },
    { value: '1', label: 'CC' },
    { value: '2', label: 'CE' },
  ]

  const save = (data) => {

    let ImgRemove = []
    if(imgCommerce.url !== dataRow.urlCommerce) ImgRemove.push({source:"suppliers", url:dataRow.urlCommerce})
    if(imgRegistry.url !== dataRow.urlRegistry) ImgRemove.push({source:"suppliers", url:dataRow.urlRegistry})
    if(imgTradeAgree.url !== dataRow.urlTradeAgree) ImgRemove.push({source:"suppliers", url:dataRow.urlTradeAgree})


    const body = {
      name: data.name,
      divipola: stateDivipola.defaultCity.code,
      zipCode: data.zipCode,
      urlCommerce: imgCommerce.url,
      urlRegistry: imgRegistry.url,
      urlTradeAgree: imgTradeAgree.url,
      addres: data.addres,
      email: data.email,
      celPhone: data.celPhone,
      advisor: data.advisor,
      celPhoneAdvisor: data.celPhoneAdvisor,
      typeDoc: typeDoc,
      document: data.document,
      dv: data.dv,
      mercantileRegistration: data.mercantileRegistration,
      responsability: data.responsability,
      economyActivity: data.economyActivity,
      ImgRemove
    }
    if(!dataRow._id){
      body['_id'] = dataRow._id
      Connect('suppliers/push', body, 'POST', callBack.bind(this))
    }else{
      Connect('suppliers/update', body, 'POST', callBack.bind(this))
    }
    console.log(body)
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
                    <Divipola  defaultCiti={dataRow.divipola} />
                  </Col>

                  <Col xs='3' sm='3' md='3'>
                    <FormGroup>
                      <Label>zipCode</Label>
                      <input
                        type='text'
                        {...register('zipCode', {
                          required: true,
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
                          required: true,
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
                      <Select
                        defaultValue={dataRow.typeDoc}
                        selectedValue={typeDoc}
                        options={options}
                        onChange={(e) => setTypeDoc(e.value)}
                      />
                    </FormGroup>
                  </Col>


                  <Col xs='3' sm='3' md='3'>
                    <Label>
                      Numero Documento
                      <span style={{ color: 'red' }}> * </span>
                      {errors.document && (
                        <span style={{ color: 'red' }}>
                          Este campo es requerido
                        </span>
                      )}
                    </Label>
                    
                    <input
                      type='number'
                      {...register('document', {
                        required: true,
                        maxLength: 11,
                        minLength: 8,
                      })}
                      defaultValue={dataRow.document}
                      className='form-control'
                    />
                  </Col>

                  <Col xs='2' sm='2' md='2'>
                    <Label>
                      DV
                      <span style={{ color: 'red' }}> * </span>
                      {errors.dv && (
                        <span style={{ color: 'red' }}>
                          Solo un digito, ¡por favor!
                        </span>
                      )}
                    </Label>
                    <input
                      type='number'
                      {...register('dv', {
                        required: true,
                        maxLength: 1,
                      })}
                      defaultValue={dataRow.dv}
                      className='form-control'
                    />
                  </Col>
                </Row>

                <Row>
                  <Col xs='2' sm='2' md='2'>
                    <Label>Responsabilidad</Label>
                    <input
                      {...register('responsability', {
                        required: true,
                        maxLength: 10,
                      })}
                      defaultValue={dataRow.responsability}
                      className='form-control'
                    />
                  </Col>

                  <Col xs='3' sm='3' md='3'>
                    <Label>Registro Mercantil</Label>
                    <input
                      {...register('mercantileRegistration', {
                        required: true,
                        maxLength: 20,
                      })}
                      defaultValue={dataRow.mercantileRegistration}
                      className='form-control'
                    />
                  </Col>

                  <Col xs='3' sm='3' md='3'>
                    <Label>Actividad Economica</Label>
                    <input
                      {...register('economyActivity', {
                        required: true,
                        maxLength: 20,
                      })}
                      defaultValue={dataRow.economyActivity}
                      className='form-control'
                    />
                  </Col>
                </Row>

                <Row>
                  <Col xs='3' sm='3' md='3'>
                    <Label>
                      Email
                      <span style={{ color: 'red' }}> * </span>
                      {errors.email && (
                        <span style={{ color: 'red' }}>
                          Email es incorrecto
                        </span>
                      )}
                    </Label>
                    <input
                      type='email'
                      placeholder='user@example.dom'
                      {...register('email', {
                        required: true,
                        maxLength: 35,
                        pattern:
                          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
                      })}
                      defaultValue={dataRow.email}
                      className='form-control'
                    />
                  </Col>

                  <Col xs='3' sm='3' md='3'>
                    <Label>
                      Telefono
                      <span style={{ color: 'red' }}> * </span>
                      {errors.celPhone && (
                        <span style={{ color: 'red' }}>
                          Numero de celular es incorrecto
                        </span>
                      )}
                    </Label>
                    <input
                      type='number'
                      placeholder='3001112222'
                      {...register('celPhone', {
                        required: true,
                        maxLength: 10,
                        minLength: 10,
                        pattern: /[3]([0-9]{4})/,
                      })}
                      defaultValue={dataRow.celPhone}
                      className='form-control'
                    />
                  </Col>

                  <Col xs='3' sm='3' md='3'>
                    <Label>Asesor Asignado</Label>
                    <input
                      type='text'
                      {...register('advisor', {
                        required: true,
                        maxLength: 50,
                      })}
                      defaultValue={dataRow.advisor}
                      className='form-control'
                    />
                  </Col>

                  <Col xs='3' sm='3' md='3'>
                    <Label>
                      Telefono Asesor
                      <span style={{ color: 'red' }}> * </span>
                      {errors.celPhoneAdvisor && (
                        <span style={{ color: 'red' }}>
                          Numero de celular es incorrecto
                        </span>
                      )}
                    </Label>
                    <input
                      type='number'
                      placeholder='3001112222'
                      {...register('celPhoneAdvisor', {
                        required: true,
                        maxLength: 10,
                        minLength: 10,
                        pattern: /[3]([0-9]{4})/,
                      })}
                      defaultValue={dataRow.celPhoneAdvisor}
                      className='form-control'
                    />
                  </Col>
                </Row>

                <Row>
                  <Col xs='4' sm='4' md='4'>
                    <Label>Registro Tributario</Label>
                    <Row className='align-items-center'>
                      <Col md='4'>{imgRegistry.view}</Col>
                      <Col>
                        <Upload
                          bName='+ Cargar Imagen'
                          source='suppliers'
                          setObj={setImgRegistry.bind(this)}
                          vWidth='100'
                          vCrop='scale'
                          mWidth='400'
                          mHeight='400'
                        />
                      </Col>
                    </Row>
                  </Col>

                  <Col xs='4' sm='4' md='4'>
                    <Label>Camara de comercio</Label>
                    <Row className='align-items-center'>
                      <Col md='4'>{imgCommerce.view}</Col>
                      <Col>
                        <Upload
                          bName='+ Cargar Imagen'
                          source='suppliers'
                          setObj={setImgCommerce.bind(this)}
                          vWidth='100'
                          vCrop='scale'
                          mWidth='400'
                          mHeight='400'
                        />
                      </Col>
                    </Row>
                  </Col>

                  <Col xs='4' sm='4' md='4'>
                    <Label>Acuerdo Comercial</Label>
                    <Row className='align-items-center'>
                      <Col md='4'>{imgTradeAgree.view}</Col>
                      <Col>
                        <Upload
                          bName='+ Cargar Imagen'
                          source='suppliers'
                          setObj={setImgTradeAgree.bind(this)}
                          vWidth='100'
                          vCrop='scale'
                          mWidth='400'
                          mHeight='400'
                        />
                      </Col>
                    </Row>
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
