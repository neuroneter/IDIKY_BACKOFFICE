import React from 'react'
import {Button} from 'reactstrap';
import { Image, Transformation } from 'cloudinary-react';
import { CloudinaryContext } from "cloudinary-react";
import { openUploadWidget } from "./cloudinary";
import {Connect} from "../../stores/actions/Connect"

/**
 * Funcion flecha que integra a Cloudinary para hacer la carga de un recurso
 * bName: Esta variable recibe el nombre del boton cargar imagen
 * source: Esta varibale recibe el origen que se convertira en una carpeta dentro de Cloudinary
 * setObje: Esta es una funcion de tipo stado que sera llamada una vez la imagen sea cargada, retornando un objeto 
 *          {
 *            url: Es el nombre del la ruta donde se almaceno la imagen
 *            view: Es el html que carga una imagen previsualizada
 *          }
 * vWidth: Este sera el tamaño del ancho de la imagen a previsualizar
 * vCrop: Variable que permite si o no realizar por cloudinary recortes de la imagen solo para mostrar no en la carga imag
 * mWidth: Ancho minimo que se le permite al usuario cargar de una imagen al servidor
 * mHeight: Alto minimo que se le permite al usuario cargar de una imagen al servidor
 */
export const Upload = ({bName, source, setObj, vWidth, vCrop, mWidth, mHeight}) => {

    /**
     * Esta funcion se envia en el momento de registrar la url de imagen en la tabla temporal de imagenes
     * permitiendo que si esta imagen no es instanciada por un registro posterior la tendremos identificada en esta tabla "TmpImg"
     * de esta manera podremos borrar posteriormente estas imagenes huerfanas
     * Una vez la imagen es instanciada el callback responde a quien llamo al modulo y informa la url y un objeto con la miniatura de la imagen 
     */
    const callBack = (data) => {
      setObj({
        url:data.url,
        view:(<CloudinaryContext cloudName="idikydev" uploadPreset="bobSeller">
                <Image publicId={data.url+".jpg"} > <Transformation width={vWidth} crop={vCrop} /> </Image>
              </CloudinaryContext>
              )
      });
    }

    /**
     * Esta funcion se llama con el fin de implementar la carga de un archivo al servidor de cloudinary
     * para esto crea un nombre unico y utiliza los datos del servidor para la conexión,
     * una vez se carga la imagen, llamamos a almacenar la ruta de la imagen en la tabla temporal "TmpImg"
     */
    const beginUpload = (tag) => {

        var date = new Date();
        var name = date.getSeconds()+""+(date.getMinutes()+date.getHours())+""+(date.getMonth()+date.getFullYear())+"_"+Math.floor(Math.random() * 50);
      
        const uploadOptions = {
          cloudName:'idikydev',
          uploadPreset:'bobSeller',
          sources:['local','url'],
          cropping:true,
          showSkipCropButton:true,
          croppingShowDimensions:true,
          croppingShowBackButton:true,
          minImageWidth:mWidth,
          minImageHeight:mHeight,
          showPoweredBy:false,
          language:'es',
          folder:'store/'+source,
          public_id:name
        };
        
        //Metodo que se dispara una vez la imagen fue o no cargada
        openUploadWidget(uploadOptions, async (error, photos) => {
          if (!error) {
            if(photos.event === 'success'){
              Connect('tmpimg/push', {source:source, url:photos.info.public_id}, 'POST', callBack.bind(this) );
            }
          } else {
            console.log(error);
          }
        })
        
    }

    return (
        <CloudinaryContext cloudName='dotcom-group-sas' uploadPreset='bobSeller'>
            <Button onClick={beginUpload.bind(this)} size="sm" className="btn btn-success active">
                {bName}
            </Button>
        </CloudinaryContext>
    )

}


