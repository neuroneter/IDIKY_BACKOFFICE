import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import {Button, Row, Col,  Card, CardHeader, CardBody, FormGroup, Label } from 'reactstrap';
import { Upload } from "../../../../../components/cross/upload";
import { Image, Transformation } from 'cloudinary-react';
import { CloudinaryContext } from "cloudinary-react";
import { useForm } from 'react-hook-form';
import {Connect} from "../../../../../stores/actions/Connect";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { changeFlagCategories } from '../../../../../stores/states/Categories';

export const FormCategories = ({setlist, dataRow}) => {

    const dispatch = useDispatch();
  
    const imgDefault = (tipo) => {
      let urlImg = 'v1659380500/default-product_vmta3h.jpg'
      if(tipo === 'icon' && dataRow.urlIcon !== undefined) urlImg = dataRow.urlIcon;
      if(tipo === 'img' && dataRow.urlImage !== undefined) urlImg = dataRow.urlImage;
      
      return {
          url: urlImg,
          view:(<CloudinaryContext cloudName="idikydev" uploadPreset="bobSeller">
                  <Image publicId={urlImg} > 
                      <Transformation width="100" crop="scale" /> 
                  </Image>
                </CloudinaryContext>)
        }
    }

    const [imgObj, setImgObj] = useState(imgDefault('icon'));
    const [icoObj, setIcoObj] = useState(imgDefault('img'));
    const { register, handleSubmit, control, formState:{errors} } = useForm();
  
    const callBack = (data) => {
        dispatch(changeFlagCategories(false));
        setlist(true);
    }

    const save = (data)=> {
        const body = {
            id:dataRow._id,
            name:data.name,
            urlIcon: icoObj.url,
            urlImage: imgObj.url,
            description:data.description
        };
        
        (!dataRow._id)? 
          Connect('categories/push', body, 'POST', callBack.bind(this)):
          Connect('categories/update', body, 'POST', callBack.bind(this));
    }

    return (
        <Row>
          <Col xs="12" md="12">
            <Row>
              <Col xs="12" md="12">
                <Card>
                  <CardHeader>
                    <Row className="align-items-center">
                      <Col xs="7" sm="7" md="7">Editar o Crear una Categoría</Col>
                      <Col xs="2" sm="2" md="2">
                        <Button size="sm" style={{fontSize:"medium"}} onClick={() => setlist(true)} block className="float-right btn btn-success">
                          <ArrowBackIcon/> Regresar
                        </Button>
                      </Col>
                      <Col xs="2" sm="2" md="2">
                        <Button size="sm" style={{fontSize:"medium"}} onClick={handleSubmit(save)} block className="float-right btn btn-success">
                          Guardar
                        </Button>
                      </Col>
                    </Row>
                  </CardHeader>
                  <CardBody>
                      <Row className="align-items-center">
                          <Col xs="4" sm="4" md="4">
                              <FormGroup>
                                  <Label>Nombre Categoría <span style={{color:"red"}}> * </span> {
                                      (errors.name)
                                      && <span style={{color:"red"}}> Este campo es requerido </span>
                                  }</Label>
                                  <input {...register("name", { required: true, maxLength: 40 })} defaultValue={dataRow.name} className="form-control"/>
                              </FormGroup>
                          </Col>
                          <Col xs="8" sm="8" md="8">
                              <FormGroup>
                                  <Label>Descripción</Label>
                                  <input type="text" {...register("description", { required: false, maxLength: 100 })} defaultValue={dataRow.description} className="form-control" />
                              </FormGroup>
                          </Col>
                      </Row>

                      <Row>
                          <Col md="3">
                              <FormGroup>
                                  <Label>Icono de la categoría</Label>
                                  <Row className="align-items-center">
                                      <Col md="4" >{icoObj.view}</Col>
                                      <Col><Upload bName="+ Cargar Icono" source="categories" setObj={setIcoObj.bind(this)} vWidth="100" vCrop="scale" mWidth="50" mHeight="50" /></Col>
                                  </Row>
                              </FormGroup>
                          </Col>
                          <Col md="3">
                              <FormGroup>
                                  <Label>Imagen de la categoría</Label>
                                  <Row className="align-items-center">
                                      <Col md="4" >{imgObj.view}</Col>
                                      <Col><Upload bName="+ Cargar Imagen" source="categories" setObj={setImgObj.bind(this)} vWidth="100" vCrop="scale" mWidth="500" mHeight="500" /></Col>
                                  </Row>
                              </FormGroup>
                          </Col>
                      </Row>
                      <Row>
                        
                      </Row>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
    )
}