export const Coownership = 
[
  {
    id:"23453645", //Identificador unico de la comunidad residencial 
    name:"Life 72", //Nombre del edificio
    email:"ohernandez83@hotmail.com", //Correo electrónico certificado de la copropiedad
    celPhone:"3004051582", //Número de telefono celular de la copropiedad
    phone:"4356453", //Telefono de la portería
    //Conjunto de imagenes que hacen parte de la zona común 
    picture:[ 
      {
        url:"https://colombiaraiz.com/wp-content/uploads/2019/09/fachada-13.jpg", //Url de la imagen de la zona común.
        access:true, //Si esta imagen puede ser compartidas por fuera de los usuarios de la comunidad
      },
      {
        url:"https://i.ytimg.com/vi/3E9LnP2v_js/maxresdefault.jpg", 
        access:true
      },
      {
        url:"https://images.ctfassets.net/8lc7xdlkm4kt/1weWsJK3p6wyGUZ90l2Jt9/933d30d3e42d8bb028b6c6a8784a56c6/LIFE6.jpg?w=700&q=60", 
        access:true
      },
      {
        url:"https://lahaus.imgix.net/uploads/real_estate_attachment/picture/15492/_proyecto_life-arquitecturay-y-concreto-65.jpg?auto=compress%2Cenhance%2Cformat&q=40&w=750&h=500&fit=crop&crop=edges", 
        access:false
      }
    ],
    //GEO es el conjunto de datos que identifican la ubicación fisica de la comunidad residencial
    geo:{
      address:"Carrera 14 # 71-44", //Dirección de la comunidad residencial
      zipCode:"110231", //Codigo postal de la comunidad residencial
      country:"CO", //Pais de ubicación de la comunidad residencial
      region:"Centro", // Region de ubicación de la comunidad residencial
      state:"05", // Estado, departamento de la comunidad residencial
      city:"234", // Ciudad de la comunidad residencial
      area:"Chapinero", // Area, zona, comuna, distrito de la comunidad residencial
      barrio:"Quinta Camacho", // Area, zona, comuna, distrito de la comunidad residencial
      latitude:"4.6582721", // Valor de la latitud de la comunidad residencial
      logitude:"-74.0624594" // Valor de la longitud de la comunidad residencial
    },
    //Conjunto de datos que permiten dar una clasificación segun potencial de gastos o nivel socioeconómico
    classification:{
      fact:4, //Clasificación del edificio potencial de facturacion
      custome:6, //Clasificación del edificio segun consumos
    },
    //Conjunto de datos que describen un inmueble que hace parte de la comunidad residencial
    units:[
      {
        id:"2342234234", // Identificador unico del inmueble
        hi:"101000001", //Identificación que permite a un usuario compartir información de inmueble
        //Dirección interna de la unidad residencial
        location:{
        latitude:"4.6582721", // Valor de la latitud del inmueble
        logitude:"-74.0624594", // Valor de longitud del inmueble
        //Valores que concatenados conforman la ubicación interna del inmueble
        values:[
          {
            label:"Apartamento", //Identificador del valor ingresado Interior, Bloque, Zona, Sector, Manzana
            value:"1703", //Valor de identificación numerico letras o simbolos
            separator:"" //Valor para mejorar la estetica de la dirección
          }
        ]
        },
        //Conjunto de usuarios del inmueble
        user:[
          {
          id:"623088234", //Identificador unico del usuario
          owner:true, //Valor si es o no es (True, False) dueño del inmueble
          habitant:true, //Valor si es o no residente del inmueble
          visitor:false, //Visitante de la del inmueble
          renter:false, //Si es un arrendatario del inmueble
          employee:false, //Si es empleado dentro del inmueble
          //Conjunto de datos que define la actividad y acceso de los empleados al inmuebles
          position:{
            state:false, //Estado para el acceso a la aplicación como empleados
            occupation:"", //Nombre de la ocupacion que tiene el empleado 
            idCompany:"", //Identificador de la compañía contratante en caso de que sea externo
          },
          accessControl:{
            checking:false, //Si requiere ser anunciado a su llegada
            checkout:false, //Si requiere ser revisado al abandonar el inmueble
            calendar:[
              {
                iniDate:"", //Fecha de inicio de ingreso del empleado
                endDate:"", //Fecha de salida del empleado
                term:[], //Listado del números de días que esta la configuración de acceso al inmueble
              }
            ],
            notes:"", //Notas importantes que se quieren dejar para manejo de acceso
          },
          //Conjunto de reglas que definen el control de acceso y salida por niños del inmueble
          childControl:{
            notify:false, //Requiere una llamada de confirmación para permitir su salida
            notes:"", //Notas importantes que se quieren dejar para manejo de acceso
          },
          pet:false, //Valor si el usuario es un una mascota
          petControl:{
            notify:false, //Requiere una llamada de confirmación para permitir su salida
            notes:"", //Notas importantes que se quieren dejar para manejo de acceso
          }
          }
        ]
      },
      {
        id:"2342234234", // Identificador unico del inmueble
        hi:"101000001", //Identificación que permite a un usuario compartir información de inmueble
        //Dirección interna de la unidad residencial
        location:{
        latitude:"4.6582721", // Valor de la latitud del inmueble
        logitude:"-74.0624594", // Valor de longitud del inmueble
        //Valores que concatenados conforman la ubicación interna del inmueble
        values:[
          {
            label:"Apartamento", //Identificador del valor ingresado Interior, Bloque, Zona, Sector, Manzana
            value:"1401", //Valor de identificación numerico letras o simbolos
            separator:"" //Valor para mejorar la estetica de la dirección
          }
        ]
        },
        //Conjunto de usuarios del inmueble
        user:[
          {
            id:"95664645456", //Identificador unico del usuario
            owner:true, //Valor si es o no es (True, False) dueño del inmueble
            habitant:true, //Valor si es o no residente del inmueble
            visitor:false, //Visitante de la del inmueble
            renter:false, //Si es un arrendatario del inmueble
            employee:false, //Si es empleado dentro del inmueble
            //Conjunto de datos que define la actividad y acceso de los empleados al inmuebles
            position:{
              state:false, //Estado para el acceso a la aplicación como empleados
              occupation:"", //Nombre de la ocupacion que tiene el empleado 
              idCompany:"", //Identificador de la compañía contratante en caso de que sea externo
            },
            accessControl:{
              checking:false, //Si requiere ser anunciado a su llegada
              checkout:false, //Si requiere ser revisado al abandonar el inmueble
              calendar:[
                {
                  iniDate:"", //Fecha de inicio de ingreso del empleado
                  endDate:"", //Fecha de salida del empleado
                  term:[], //Listado del números de días que esta la configuración de acceso al inmueble
                }
              ],
              notes:"", //Notas importantes que se quieren dejar para manejo de acceso
            },
            //Conjunto de reglas que definen el control de acceso y salida por niños del inmueble
            childControl:{
              notify:false, //Requiere una llamada de confirmación para permitir su salida
              notes:"", //Notas importantes que se quieren dejar para manejo de acceso
            },
            pet:false, //Valor si el usuario es un una mascota
            petControl:{
              notify:false, //Requiere una llamada de confirmación para permitir su salida
              notes:"", //Notas importantes que se quieren dejar para manejo de acceso
            }
          }
        ]
      }
    ],
    //Conjunto de datos de las zonas Comunes de la comunidad residencial
    amenities:[
      {
        type:"Piscina", //Tipo que clasifica la zona común
        //Información de localización de la zon común
        location:{
          latitude:"4.6582721", // Valor de la latitud de la zona comun
          logitude:"-74.0624594", // Valor de longitud de la zona comun
          //Valores que concatenados conforman la ubicación interna de la zona comun
          values:[
            {
              label:"Piso", //Identificador del valor ingresado Interior, Bloque, Zona, Sector, Manzana
              value:"19", //Valor de identificación numerico letras o simbolos
              separator:"" //Valor para mejorar la estetica de la dirección
            },
            {
              label:"Terraza", //Identificador del valor ingresado Interior, Bloque, Zona, Sector, Manzana
              value:"19", //Valor de identificación numerico letras o simbolos
              separator:"" //Valor para mejorar la estetica de la dirección
            }
          ],
        },
        //Reglas para el control de acceso a la zona común
        accessControl:{
          reservation:true, //Si requiere o no ser reservada la zona común 
          capacity:10, //Número de personas por hora que pueden compartir la zona común
          calendar:[
            {
              iniTime:"07:00", //Fecha de inicio de ingreso del empleado
              endTime:"17:00", //Fecha de salida del empleado
              term:[1,2,3,4,5], //Listado del números de días que se puede acceder a la zona común
            },{
              iniTime:"07:00", //Fecha de inicio de ingreso del empleado
              endTime:"15:00", //Fecha de salida del empleado
              term:[6,7], //Listado del números de días que se puede acceder a la zona común
            }
          ],
          cost:false, //La zona comun genera costo por reservacion manejo
          //Tabla que define las reglas de tabla de costos para reservaciones de la zona común 
          costTable:[
            {
              value:"", //Valor que se cobrara por la reservacion
              range:"", //Número de horas que aplica la tarfia de reservación
              free:"", //Número de horas al mes que no se cobrara por reservación
              condition:"", //Descripción de la condición 
            }
          ],
          notes:"Los niños tienen que estar acompañados, días festivos no se tendra apertura de la piscina", //Notas importantes que se quieren dejar para manejo de acceso
        },
        internet:{
          user:"lifePxs", //Usuario para conectar a internet en la zona común
          pass:"98761243", //Contraseña para acceder a la zona común.
        },
        picture:[
          {
            url:"https://lahaus.imgix.net/uploads/real_estate_attachment/picture/15492/_proyecto_life-arquitecturay-y-concreto-65.jpg?auto=compress%2Cenhance%2Cformat&q=40&w=750&h=500&fit=crop&crop=edges", //Url de la imagen de la zona común.
          }
        ]
      },
      {
        type:"Coworking 01", //Tipo que clasifica la zona común
        //Información de localización de la zon común
        location:{
          latitude:"4.6582721", // Valor de la latitud de la zona comun
          logitude:"-74.0624594", // Valor de longitud de la zona comun
          //Valores que concatenados conforman la ubicación interna de la zona comun
          values:[
            {
              label:"Piso", //Identificador del valor ingresado Interior, Bloque, Zona, Sector, Manzana
              value:"5", //Valor de identificación numerico letras o simbolos
              separator:"," //Valor para mejorar la estetica de la dirección
            },
            {
              label:"Costado", //Identificador del valor ingresado Interior, Bloque, Zona, Sector, Manzana
              value:"Norte", //Valor de identificación numerico letras o simbolos
              separator:"" //Valor para mejorar la estetica de la dirección
            }
          ],
        },
        //Reglas para el control de acceso a la zona común
        accessControl:{
          reservation:true, //Si requiere o no ser reservada la zona común 
          capacity:20, //Número de personas por hora que pueden compartir la zona común
          calendar:[
            {
              iniTime:"09:00", //Fecha de inicio de ingreso del empleado
              endTime:"17:00", //Fecha de salida del empleado
              term:[1,2,3,4,5], //Listado del números de días que se puede acceder a la zona común
            }
          ],
          cost:true, //La zona comun genera costo por reservacion manejo
          //Tabla que define las reglas de tabla de costos para reservaciones de la zona común 
          costTable:[
            {
              value:10000, //Valor que se cobrara por la reservacion
              range:"3", //Número de horas que aplica la tarfia de reservación
              free:"20", //Número de horas al mes que no se cobrara por reservación
              condition:"Una vez se terminen las horas gratis se factura en la cuenta mensual de administración las horas adicionales", //Descripción de la condición 
            }
          ],
          notes:"Tomar medidas de cuidado con alcohol y tapabocas", //Notas importantes que se quieren dejar para manejo de acceso
        },
        internet:{
          user:"Ofice02", //Usuario para conectar a internet en la zona común
          pass:"Rsdfsd", //Contraseña para acceder a la zona común.
        },
        picture:[
          {
            url:"https://www.coworker.com/mag/wp-content/uploads/2019/12/Potential-Feature-Image-2.png", //Url de la imagen de la zona común.
          }
        ]
      },
      {
        type:"Coworking 02", //Tipo que clasifica la zona común
        //Información de localización de la zon común
        location:{
          latitude:"4.6582721", // Valor de la latitud de la zona comun
          logitude:"-74.0624594", // Valor de longitud de la zona comun
          //Valores que concatenados conforman la ubicación interna de la zona comun
          values:[
            {
              label:"Piso", //Identificador del valor ingresado Interior, Bloque, Zona, Sector, Manzana
              value:"5", //Valor de identificación numerico letras o simbolos
              separator:"," //Valor para mejorar la estetica de la dirección
            },
            {
              label:"Costado", //Identificador del valor ingresado Interior, Bloque, Zona, Sector, Manzana
              value:"Sur", //Valor de identificación numerico letras o simbolos
              separator:"" //Valor para mejorar la estetica de la dirección
            }
          ],
        },
        //Reglas para el control de acceso a la zona común
        accessControl:{
          reservation:true, //Si requiere o no ser reservada la zona común 
          capacity:20, //Número de personas por hora que pueden compartir la zona común
          calendar:[
            {
              iniTime:"09:00", //Fecha de inicio de ingreso del empleado
              endTime:"17:00", //Fecha de salida del empleado
              term:[1,2,3,4,5], //Listado del números de días que se puede acceder a la zona común
            }
          ],
          cost:true, //La zona comun genera costo por reservacion manejo
          //Tabla que define las reglas de tabla de costos para reservaciones de la zona común 
          costTable:[
            {
              value:10000, //Valor que se cobrara por la reservacion
              range:"3", //Número de horas que aplica la tarfia de reservación
              free:"20", //Número de horas al mes que no se cobrara por reservación
              condition:"Una vez se terminen las horas gratis se factura en la cuenta mensual de administración las horas adicionales", //Descripción de la condición 
            }
          ],
          notes:"Tomar medidas de cuidado con alcohol y tapabocas", //Notas importantes que se quieren dejar para manejo de acceso
        },
        internet:{
          user:"Ofice02", //Usuario para conectar a internet en la zona común
          pass:"Rsdfsd", //Contraseña para acceder a la zona común.
        },
        picture:[
          {
            url:"https://www.xtrategik.com/blog_xtrategik/wp-content/uploads/2019/01/Coworking-Ejemplos-de-oficinas-compartidas-Xtrategik-Blog-1024x1024.jpg", //Url de la imagen de la zona común.
          }
        ]
      },
      {
        type:"Sauna", //Tipo que clasifica la zona común
        //Información de localización de la zon común
        location:{
          latitude:"4.6582721", // Valor de la latitud de la zona comun
          logitude:"-74.0624594", // Valor de longitud de la zona comun
          //Valores que concatenados conforman la ubicación interna de la zona comun
          values:[
            {
              label:"Piso", //Identificador del valor ingresado Interior, Bloque, Zona, Sector, Manzana
              value:"5", //Valor de identificación numerico letras o simbolos
              separator:"," //Valor para mejorar la estetica de la dirección
            },
            {
              label:"Costado", //Identificador del valor ingresado Interior, Bloque, Zona, Sector, Manzana
              value:"Norte al fondo", //Valor de identificación numerico letras o simbolos
              separator:"" //Valor para mejorar la estetica de la dirección
            }
          ],
        },
        //Reglas para el control de acceso a la zona común
        accessControl:{
          reservation:true, //Si requiere o no ser reservada la zona común 
          capacity:5, //Número de personas por hora que pueden compartir la zona común
          calendar:[
            {
              iniTime:"09:00", //Fecha de inicio de ingreso del empleado
              endTime:"17:00", //Fecha de salida del empleado
              term:[1,2,3,4,5], //Listado del números de días que se puede acceder a la zona común
            }
          ],
          cost:false, //La zona comun genera costo por reservacion manejo
          //Tabla que define las reglas de tabla de costos para reservaciones de la zona común 
          costTable:[],
          notes:"Tomar medidas de cuidado con alcohol y tapabocas", //Notas importantes que se quieren dejar para manejo de acceso
        },
        internet:{
          user:"Sauna", //Usuario para conectar a internet en la zona común
          pass:"Rsdfsd", //Contraseña para acceder a la zona común.
        },
        picture:[
          {
            url:"https://media.istockphoto.com/photos/interior-of-finnish-sauna-classic-wooden-sauna-picture-id827324092?k=6&m=827324092&s=612x612&w=0&h=cXt7U84X7RUrY6EugXcFufyEPhYy8IoZf6bjLY2XIs8=", //Url de la imagen de la zona común.
          }
        ]
      }
    ],
    //Listado de archivos o documentos compartidos con los usuarios de la comunidad
    documentation:[
      {
        nombre:"Reglamento propiedad", //Nombre del documento
        url:"reglamento.pdf", //Ubicacion donde se encuentra almacenado el documentos
      }
    ],
    //Conjunto de datos que relacionan a empleados de la comunidad
    employees:[
      {
        id:"234234", //Identificador del empleado 
        position:{
          state:true, //Estado para el acceso a la aplicación como empleados
          occupation:5, //Nombre de la ocupacion que tiene el empleado 
          idCompany:null, //Identificador de la compañía contratante en caso de que sea externo
        },
        calendar:[
          {
            iniDate:"5:00", //Fecha en la que el empleado se encuentra dentro de la comunidad
            endDate:"16:00", //Fecha de salida del empleado 
            term:[1,2,3,4], //Listado del números de días que el empleado estara en este periodo de tiempo
          }
        ],
      },
      {
        id:"256543", //Identificador del empleado 
        position:{
          state:true, //Estado para el acceso a la aplicación como empleados
          occupation:5, //Nombre de la ocupacion que tiene el empleado 
          idCompany:null, //Identificador de la compañía contratante en caso de que sea externo
        },
        calendar:[
          {
            iniDate:"5:00", //Fecha en la que el empleado se encuentra dentro de la comunidad
            endDate:"16:00", //Fecha de salida del empleado 
            term:[1,2,3,4], //Listado del números de días que el empleado estara en este periodo de tiempo
          }
        ],
      },
      {
        id:"234256434", //Identificador del empleado 
        position:{
          state:true, //Estado para el acceso a la aplicación como empleados
          occupation:5, //Nombre de la ocupacion que tiene el empleado 
          idCompany:null, //Identificador de la compañía contratante en caso de que sea externo
        },
        calendar:[
          {
            iniDate:"5:00", //Fecha en la que el empleado se encuentra dentro de la comunidad
            endDate:"16:00", //Fecha de salida del empleado 
            term:[5,6], //Listado del números de días que el empleado estara en este periodo de tiempo
          }
        ],
      },
      {
        id:"567567", //Identificador del empleado 
        position:{
          state:true, //Estado para el acceso a la aplicación como empleados
          occupation:3, //Nombre de la ocupacion que tiene el empleado 
          idCompany:null, //Identificador de la compañía contratante en caso de que sea externo
        },
        calendar:[
          {
            iniDate:"5:00", //Fecha en la que el empleado se encuentra dentro de la comunidad
            endDate:"16:00", //Fecha de salida del empleado 
            term:[1,3,5], //Listado del números de días que el empleado estara en este periodo de tiempo
          }
        ],
      },
      {
        id:"85656875", //Identificador del empleado 
        position:{
          state:true, //Estado para el acceso a la aplicación como empleados
          occupation:1, //Nombre de la ocupacion que tiene el empleado 
          idCompany:null, //Identificador de la compañía contratante en caso de que sea externo
        },
        calendar:[
          {
            iniDate:"5:00", //Fecha en la que el empleado se encuentra dentro de la comunidad
            endDate:"16:00", //Fecha de salida del empleado 
            term:[1,3,5], //Listado del números de días que el empleado estara en este periodo de tiempo
          }
        ],
      }
    ]
  },
  {
    id:"98668345", //Identificador unico de la comunidad residencial 
    name:"Fino Mornzaco", //Nombre del edificio
    email:"ohernandez83@hotmail.com", //Correo electrónico certificado de la copropiedad
    celPhone:"3004051582", //Número de telefono celular de la copropiedad
    phone:"4356453", //Telefono de la portería
    //Conjunto de imagenes que hacen parte de la zona común 
    picture:[ 
      {
        url:"https://www.gruposolerium.com/wp-content/uploads/2018/08/fino-mornasco-1.jpg", //Url de la imagen de la zona común.
        access:true, //Si esta imagen puede ser compartidas por fuera de los usuarios de la comunidad
      }
    ],
    //GEO es el conjunto de datos que identifican la ubicación fisica de la comunidad residencial
    geo:{
      address:"Carrera 14 # 71-44", //Dirección de la comunidad residencial
      zipCode:"110231", //Codigo postal de la comunidad residencial
      country:"CO", //Pais de ubicación de la comunidad residencial
      region:"Centro", // Region de ubicación de la comunidad residencial
      state:"05", // Estado, departamento de la comunidad residencial
      city:"234", // Ciudad de la comunidad residencial
      area:"Chapinero", // Area, zona, comuna, distrito de la comunidad residencial
      barrio:"Quinta Camacho", // Area, zona, comuna, distrito de la comunidad residencial
      latitude:"4.6582721", // Valor de la latitud de la comunidad residencial
      logitude:"-74.0624594" // Valor de la longitud de la comunidad residencial
    },
    //Conjunto de datos que permiten dar una clasificación segun potencial de gastos o nivel socioeconómico
    classification:{
      fact:4, //Clasificación del edificio potencial de facturacion
      custome:6, //Clasificación del edificio segun consumos
    },
    //Conjunto de datos que describen un inmueble que hace parte de la comunidad residencial
    units:[
      {
        id:"2342234234", // Identificador unico del inmueble
        hi:"101000001", //Identificación que permite a un usuario compartir información de inmueble
        //Dirección interna de la unidad residencial
        location:{
        latitude:"4.6582721", // Valor de la latitud del inmueble
        logitude:"-74.0624594", // Valor de longitud del inmueble
        //Valores que concatenados conforman la ubicación interna del inmueble
        values:[
          {
            label:"Apartamento", //Identificador del valor ingresado Interior, Bloque, Zona, Sector, Manzana
            value:"1703", //Valor de identificación numerico letras o simbolos
            separator:"" //Valor para mejorar la estetica de la dirección
          }
        ]
        },
        //Conjunto de usuarios del inmueble
        user:[
          {
          id:"623088234", //Identificador unico del usuario
          owner:true, //Valor si es o no es (True, False) dueño del inmueble
          habitant:true, //Valor si es o no residente del inmueble
          visitor:false, //Visitante de la del inmueble
          renter:false, //Si es un arrendatario del inmueble
          employee:false, //Si es empleado dentro del inmueble
          //Conjunto de datos que define la actividad y acceso de los empleados al inmuebles
          position:{
            state:false, //Estado para el acceso a la aplicación como empleados
            occupation:"", //Nombre de la ocupacion que tiene el empleado 
            idCompany:"", //Identificador de la compañía contratante en caso de que sea externo
          },
          accessControl:{
            checking:false, //Si requiere ser anunciado a su llegada
            checkout:false, //Si requiere ser revisado al abandonar el inmueble
            calendar:[
              {
                iniDate:"", //Fecha de inicio de ingreso del empleado
                endDate:"", //Fecha de salida del empleado
                term:[], //Listado del números de días que esta la configuración de acceso al inmueble
              }
            ],
            notes:"", //Notas importantes que se quieren dejar para manejo de acceso
          },
          //Conjunto de reglas que definen el control de acceso y salida por niños del inmueble
          childControl:{
            notify:false, //Requiere una llamada de confirmación para permitir su salida
            notes:"", //Notas importantes que se quieren dejar para manejo de acceso
          },
          pet:false, //Valor si el usuario es un una mascota
          petControl:{
            notify:false, //Requiere una llamada de confirmación para permitir su salida
            notes:"", //Notas importantes que se quieren dejar para manejo de acceso
          }
          }
        ]
      },
      {
        id:"2342234234", // Identificador unico del inmueble
        hi:"101000001", //Identificación que permite a un usuario compartir información de inmueble
        //Dirección interna de la unidad residencial
        location:{
        latitude:"4.6582721", // Valor de la latitud del inmueble
        logitude:"-74.0624594", // Valor de longitud del inmueble
        //Valores que concatenados conforman la ubicación interna del inmueble
        values:[
          {
            label:"Apartamento", //Identificador del valor ingresado Interior, Bloque, Zona, Sector, Manzana
            value:"1401", //Valor de identificación numerico letras o simbolos
            separator:"" //Valor para mejorar la estetica de la dirección
          }
        ]
        },
        //Conjunto de usuarios del inmueble
        user:[
          {
            id:"95664645456", //Identificador unico del usuario
            owner:true, //Valor si es o no es (True, False) dueño del inmueble
            habitant:true, //Valor si es o no residente del inmueble
            visitor:false, //Visitante de la del inmueble
            renter:false, //Si es un arrendatario del inmueble
            employee:false, //Si es empleado dentro del inmueble
            //Conjunto de datos que define la actividad y acceso de los empleados al inmuebles
            position:{
              state:false, //Estado para el acceso a la aplicación como empleados
              occupation:"", //Nombre de la ocupacion que tiene el empleado 
              idCompany:"", //Identificador de la compañía contratante en caso de que sea externo
            },
            accessControl:{
              checking:false, //Si requiere ser anunciado a su llegada
              checkout:false, //Si requiere ser revisado al abandonar el inmueble
              calendar:[
                {
                  iniDate:"", //Fecha de inicio de ingreso del empleado
                  endDate:"", //Fecha de salida del empleado
                  term:[], //Listado del números de días que esta la configuración de acceso al inmueble
                }
              ],
              notes:"", //Notas importantes que se quieren dejar para manejo de acceso
            },
            //Conjunto de reglas que definen el control de acceso y salida por niños del inmueble
            childControl:{
              notify:false, //Requiere una llamada de confirmación para permitir su salida
              notes:"", //Notas importantes que se quieren dejar para manejo de acceso
            },
            pet:false, //Valor si el usuario es un una mascota
            petControl:{
              notify:false, //Requiere una llamada de confirmación para permitir su salida
              notes:"", //Notas importantes que se quieren dejar para manejo de acceso
            }
          }
        ]
      }
    ],
    //Conjunto de datos de las zonas Comunes de la comunidad residencial
    amenities:[
      {
        type:"Piscina", //Tipo que clasifica la zona común
        //Información de localización de la zon común
        location:{
          latitude:"4.6582721", // Valor de la latitud de la zona comun
          logitude:"-74.0624594", // Valor de longitud de la zona comun
          //Valores que concatenados conforman la ubicación interna de la zona comun
          values:[
            {
              label:"Piso", //Identificador del valor ingresado Interior, Bloque, Zona, Sector, Manzana
              value:"19", //Valor de identificación numerico letras o simbolos
              separator:"" //Valor para mejorar la estetica de la dirección
            },
            {
              label:"Terraza", //Identificador del valor ingresado Interior, Bloque, Zona, Sector, Manzana
              value:"19", //Valor de identificación numerico letras o simbolos
              separator:"" //Valor para mejorar la estetica de la dirección
            }
          ],
        },
        //Reglas para el control de acceso a la zona común
        accessControl:{
          reservation:true, //Si requiere o no ser reservada la zona común 
          capacity:10, //Número de personas por hora que pueden compartir la zona común
          calendar:[
            {
              iniTime:"07:00", //Fecha de inicio de ingreso del empleado
              endTime:"17:00", //Fecha de salida del empleado
              term:[1,2,3,4,5], //Listado del números de días que se puede acceder a la zona común
            },{
              iniTime:"07:00", //Fecha de inicio de ingreso del empleado
              endTime:"15:00", //Fecha de salida del empleado
              term:[6,7], //Listado del números de días que se puede acceder a la zona común
            }
          ],
          cost:false, //La zona comun genera costo por reservacion manejo
          //Tabla que define las reglas de tabla de costos para reservaciones de la zona común 
          costTable:[
            {
              value:"", //Valor que se cobrara por la reservacion
              range:"", //Número de horas que aplica la tarfia de reservación
              free:"", //Número de horas al mes que no se cobrara por reservación
              condition:"", //Descripción de la condición 
            }
          ],
          notes:"Los niños tienen que estar acompañados, días festivos no se tendra apertura de la piscina", //Notas importantes que se quieren dejar para manejo de acceso
        },
        internet:{
          user:"lifePxs", //Usuario para conectar a internet en la zona común
          pass:"98761243", //Contraseña para acceder a la zona común.
        },
        picture:[
          {
            url:"https://lahaus.imgix.net/uploads/real_estate_attachment/picture/15492/_proyecto_life-arquitecturay-y-concreto-65.jpg?auto=compress%2Cenhance%2Cformat&q=40&w=750&h=500&fit=crop&crop=edges", //Url de la imagen de la zona común.
          }
        ]
      },
      {
        type:"Coworking 01", //Tipo que clasifica la zona común
        //Información de localización de la zon común
        location:{
          latitude:"4.6582721", // Valor de la latitud de la zona comun
          logitude:"-74.0624594", // Valor de longitud de la zona comun
          //Valores que concatenados conforman la ubicación interna de la zona comun
          values:[
            {
              label:"Piso", //Identificador del valor ingresado Interior, Bloque, Zona, Sector, Manzana
              value:"5", //Valor de identificación numerico letras o simbolos
              separator:"," //Valor para mejorar la estetica de la dirección
            },
            {
              label:"Costado", //Identificador del valor ingresado Interior, Bloque, Zona, Sector, Manzana
              value:"Norte", //Valor de identificación numerico letras o simbolos
              separator:"" //Valor para mejorar la estetica de la dirección
            }
          ],
        },
        //Reglas para el control de acceso a la zona común
        accessControl:{
          reservation:true, //Si requiere o no ser reservada la zona común 
          capacity:20, //Número de personas por hora que pueden compartir la zona común
          calendar:[
            {
              iniTime:"09:00", //Fecha de inicio de ingreso del empleado
              endTime:"17:00", //Fecha de salida del empleado
              term:[1,2,3,4,5], //Listado del números de días que se puede acceder a la zona común
            }
          ],
          cost:true, //La zona comun genera costo por reservacion manejo
          //Tabla que define las reglas de tabla de costos para reservaciones de la zona común 
          costTable:[
            {
              value:10000, //Valor que se cobrara por la reservacion
              range:"3", //Número de horas que aplica la tarfia de reservación
              free:"20", //Número de horas al mes que no se cobrara por reservación
              condition:"Una vez se terminen las horas gratis se factura en la cuenta mensual de administración las horas adicionales", //Descripción de la condición 
            }
          ],
          notes:"Tomar medidas de cuidado con alcohol y tapabocas", //Notas importantes que se quieren dejar para manejo de acceso
        },
        internet:{
          user:"Ofice02", //Usuario para conectar a internet en la zona común
          pass:"Rsdfsd", //Contraseña para acceder a la zona común.
        },
        picture:[
          {
            url:"https://www.coworker.com/mag/wp-content/uploads/2019/12/Potential-Feature-Image-2.png", //Url de la imagen de la zona común.
          }
        ]
      },
      {
        type:"Coworking 02", //Tipo que clasifica la zona común
        //Información de localización de la zon común
        location:{
          latitude:"4.6582721", // Valor de la latitud de la zona comun
          logitude:"-74.0624594", // Valor de longitud de la zona comun
          //Valores que concatenados conforman la ubicación interna de la zona comun
          values:[
            {
              label:"Piso", //Identificador del valor ingresado Interior, Bloque, Zona, Sector, Manzana
              value:"5", //Valor de identificación numerico letras o simbolos
              separator:"," //Valor para mejorar la estetica de la dirección
            },
            {
              label:"Costado", //Identificador del valor ingresado Interior, Bloque, Zona, Sector, Manzana
              value:"Sur", //Valor de identificación numerico letras o simbolos
              separator:"" //Valor para mejorar la estetica de la dirección
            }
          ],
        },
        //Reglas para el control de acceso a la zona común
        accessControl:{
          reservation:true, //Si requiere o no ser reservada la zona común 
          capacity:20, //Número de personas por hora que pueden compartir la zona común
          calendar:[
            {
              iniTime:"09:00", //Fecha de inicio de ingreso del empleado
              endTime:"17:00", //Fecha de salida del empleado
              term:[1,2,3,4,5], //Listado del números de días que se puede acceder a la zona común
            }
          ],
          cost:true, //La zona comun genera costo por reservacion manejo
          //Tabla que define las reglas de tabla de costos para reservaciones de la zona común 
          costTable:[
            {
              value:10000, //Valor que se cobrara por la reservacion
              range:"3", //Número de horas que aplica la tarfia de reservación
              free:"20", //Número de horas al mes que no se cobrara por reservación
              condition:"Una vez se terminen las horas gratis se factura en la cuenta mensual de administración las horas adicionales", //Descripción de la condición 
            }
          ],
          notes:"Tomar medidas de cuidado con alcohol y tapabocas", //Notas importantes que se quieren dejar para manejo de acceso
        },
        internet:{
          user:"Ofice02", //Usuario para conectar a internet en la zona común
          pass:"Rsdfsd", //Contraseña para acceder a la zona común.
        },
        picture:[
          {
            url:"https://www.xtrategik.com/blog_xtrategik/wp-content/uploads/2019/01/Coworking-Ejemplos-de-oficinas-compartidas-Xtrategik-Blog-1024x1024.jpg", //Url de la imagen de la zona común.
          }
        ]
      },
      {
        type:"Sauna", //Tipo que clasifica la zona común
        //Información de localización de la zon común
        location:{
          latitude:"4.6582721", // Valor de la latitud de la zona comun
          logitude:"-74.0624594", // Valor de longitud de la zona comun
          //Valores que concatenados conforman la ubicación interna de la zona comun
          values:[
            {
              label:"Piso", //Identificador del valor ingresado Interior, Bloque, Zona, Sector, Manzana
              value:"5", //Valor de identificación numerico letras o simbolos
              separator:"," //Valor para mejorar la estetica de la dirección
            },
            {
              label:"Costado", //Identificador del valor ingresado Interior, Bloque, Zona, Sector, Manzana
              value:"Norte al fondo", //Valor de identificación numerico letras o simbolos
              separator:"" //Valor para mejorar la estetica de la dirección
            }
          ],
        },
        //Reglas para el control de acceso a la zona común
        accessControl:{
          reservation:true, //Si requiere o no ser reservada la zona común 
          capacity:5, //Número de personas por hora que pueden compartir la zona común
          calendar:[
            {
              iniTime:"09:00", //Fecha de inicio de ingreso del empleado
              endTime:"17:00", //Fecha de salida del empleado
              term:[1,2,3,4,5], //Listado del números de días que se puede acceder a la zona común
            }
          ],
          cost:false, //La zona comun genera costo por reservacion manejo
          //Tabla que define las reglas de tabla de costos para reservaciones de la zona común 
          costTable:[],
          notes:"Tomar medidas de cuidado con alcohol y tapabocas", //Notas importantes que se quieren dejar para manejo de acceso
        },
        internet:{
          user:"Sauna", //Usuario para conectar a internet en la zona común
          pass:"Rsdfsd", //Contraseña para acceder a la zona común.
        },
        picture:[
          {
            url:"https://media.istockphoto.com/photos/interior-of-finnish-sauna-classic-wooden-sauna-picture-id827324092?k=6&m=827324092&s=612x612&w=0&h=cXt7U84X7RUrY6EugXcFufyEPhYy8IoZf6bjLY2XIs8=", //Url de la imagen de la zona común.
          }
        ]
      }
    ],
    //Listado de archivos o documentos compartidos con los usuarios de la comunidad
    documentation:[
      {
        nombre:"Reglamento propiedad", //Nombre del documento
        url:"reglamento.pdf", //Ubicacion donde se encuentra almacenado el documentos
      }
    ],
    //Conjunto de datos que relacionan a empleados de la comunidad
    employees:[
      {
        id:"234234", //Identificador del empleado 
        position:{
          state:true, //Estado para el acceso a la aplicación como empleados
          occupation:5, //Nombre de la ocupacion que tiene el empleado 
          idCompany:null, //Identificador de la compañía contratante en caso de que sea externo
        },
        calendar:[
          {
            iniDate:"5:00", //Fecha en la que el empleado se encuentra dentro de la comunidad
            endDate:"16:00", //Fecha de salida del empleado 
            term:[1,2,3,4], //Listado del números de días que el empleado estara en este periodo de tiempo
          }
        ],
      },
      {
        id:"256543", //Identificador del empleado 
        position:{
          state:true, //Estado para el acceso a la aplicación como empleados
          occupation:5, //Nombre de la ocupacion que tiene el empleado 
          idCompany:null, //Identificador de la compañía contratante en caso de que sea externo
        },
        calendar:[
          {
            iniDate:"5:00", //Fecha en la que el empleado se encuentra dentro de la comunidad
            endDate:"16:00", //Fecha de salida del empleado 
            term:[1,2,3,4], //Listado del números de días que el empleado estara en este periodo de tiempo
          }
        ],
      },
      {
        id:"234256434", //Identificador del empleado 
        position:{
          state:true, //Estado para el acceso a la aplicación como empleados
          occupation:5, //Nombre de la ocupacion que tiene el empleado 
          idCompany:null, //Identificador de la compañía contratante en caso de que sea externo
        },
        calendar:[
          {
            iniDate:"5:00", //Fecha en la que el empleado se encuentra dentro de la comunidad
            endDate:"16:00", //Fecha de salida del empleado 
            term:[5,6], //Listado del números de días que el empleado estara en este periodo de tiempo
          }
        ],
      },
      {
        id:"567567", //Identificador del empleado 
        position:{
          state:true, //Estado para el acceso a la aplicación como empleados
          occupation:3, //Nombre de la ocupacion que tiene el empleado 
          idCompany:null, //Identificador de la compañía contratante en caso de que sea externo
        },
        calendar:[
          {
            iniDate:"5:00", //Fecha en la que el empleado se encuentra dentro de la comunidad
            endDate:"16:00", //Fecha de salida del empleado 
            term:[1,3,5], //Listado del números de días que el empleado estara en este periodo de tiempo
          }
        ],
      },
      {
        id:"85656875", //Identificador del empleado 
        position:{
          state:true, //Estado para el acceso a la aplicación como empleados
          occupation:1, //Nombre de la ocupacion que tiene el empleado 
          idCompany:null, //Identificador de la compañía contratante en caso de que sea externo
        },
        calendar:[
          {
            iniDate:"5:00", //Fecha en la que el empleado se encuentra dentro de la comunidad
            endDate:"16:00", //Fecha de salida del empleado 
            term:[1,3,5], //Listado del números de días que el empleado estara en este periodo de tiempo
          }
        ],
      }
    ]
  }
]