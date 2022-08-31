import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import {Button, Row, Col,  Card, CardHeader, CardBody, FormGroup, Label } from 'reactstrap';
import { Upload } from "../../../../../components/cross/upload";
import { Image, Transformation } from 'cloudinary-react';
import { CloudinaryContext } from "cloudinary-react";
import { useForm } from 'react-hook-form';
import {Connect} from "../../../../../stores/actions/Connect";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { changeFlag } from '../../../../../stores/states/store/Brands';

export const FormFeatures = ({setlist, dataRow}) => {

    const dispatch = useDispatch();
  
    const imgDefault = (tipo) => {
      let urlImg = 'v1659380500/default-product_vmta3h.jpg'
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

    const [struct, setStruct] = useState([]);
    const [structKey, setStructKey] = useState([]);
    const [imgRegistry, setImgRegistry] = useState(imgDefault('img'))
    
    const { register, handleSubmit, control, formState:{errors} } = useForm({
      defaultValues: {
        state: (dataRow.state === undefined)?true:dataRow.state,
    }});
    
    const callBack = (data) => {
        dispatch(changeFlag(false));
        setlist(true);
    }

    const save = (data)=> {

        //let ImgRemove = []
        //if(icoObj.url !== dataRow.urlIcon) ImgRemove.push({source:"brands", url:dataRow.urlIcon})
        //if(imgObj.url !== dataRow.urlImage) ImgRemove.push({source:"brands", url:dataRow.urlImage})

        const body = {
            _id:dataRow._id,
            state:data.state,
            name:data.name,
            description:data.description
        };

        if(!dataRow._id){
          body['_id'] = dataRow._id
          Connect('features/push', body, 'POST', callBack.bind(this))
        }else{
          Connect('features/update', body, 'POST', callBack.bind(this))
        }
    }

    const handleAdd = () => {

      const key = "fe_"+struct.length+1;
      structKey.push(key);

      const val = (
        <Col  key={key} xs="6" sm="6" md="6" className="p-2">
          <Card>
          <CardBody>
          <Row >
              <Col xs="3" sm="3" md="3">
                <FormGroup>
                  <Label>Nombre</Label>
                    <input {...register(key+"_name", { required: true, maxLength: 40 })} defaultValue={dataRow.name} className="form-control"/>
                </FormGroup>
              </Col>
              <Col xs="2" sm="2" md="2">
                <FormGroup>
                  <Label>Color</Label>
                    <input type="color" {...register(key+"_color", { required: true, maxLength: 40 })} defaultValue={dataRow.name} className="form-control"/>
                </FormGroup>
              </Col>
              <Col xs="7" sm="7" md="7">
                <Row>
                  <Col md='4'>{imgRegistry.view}</Col>
                  <Col>
                    <FormGroup>
                      <Upload
                        bName='+ Cargar Imagen'
                        source='feature'
                        setObj={setImgRegistry.bind(this)}
                        vWidth='100'
                        vCrop='scale'
                        mWidth='400'
                        mHeight='400'
                      />
                    </FormGroup>
                  </Col>
                </Row>
              </Col>
          </Row>
          </CardBody>
          </Card>
        </Col>
      );
      setStruct([...struct, val])
    }

    return (
        <Row>
          <Col xs="12" md="12">
            <Row>
              <Col xs="12" md="12">
                <Card>
                  <CardHeader>
                    <Row className="align-items-center">
                      <Col xs="7" sm="7" md="7">Editar o Crear una Marca</Col>
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
                          <Col xs="3" sm="3" md="3">
                              <FormGroup>
                                  <Label>Nombre Marca <span style={{color:"red"}}> * </span> {
                                      (errors.name)
                                      && <span style={{color:"red"}}> Este campo es requerido </span>
                                  }</Label>
                                  <input {...register("name", { required: true, maxLength: 40 })} defaultValue={dataRow.name} className="form-control"/>
                              </FormGroup>
                          </Col>
                          <Col xs="2" sm="2" md="2">
                            <FormGroup>
                              <Label></Label>
                              <Button size="sm" style={{fontSize:"medium"}} onClick={() => handleAdd()} block className="float-right btn btn-success">
                                Adicionar Caracteristica
                              </Button>
                            </FormGroup>
                          </Col>
                      </Row>

                      <Row>          
                        {struct}
                      </Row> 

                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
    )
}