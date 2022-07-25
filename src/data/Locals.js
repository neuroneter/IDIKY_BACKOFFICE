import SettingsIcon from '@material-ui/icons/Settings';
import Storefront from '@material-ui/icons/Storefront';
import { Settings } from '../layout/component_admin/content/Settings';

export const Locals = [
  {
      language:'es_col',
      title:"Sistema de información",
      titleStore:"Gestiona la tienda",
      titleCoownerShip:"Tus Coopropiedades",
      titles:[
        {layout:"home", title:"Sistema de información"},
        {layout:"store", title:"Gestiona la tienda"},
        {layout:"board", title:"Gestiona información de aliados"}
      ],
      menus:[
          {group:'menu1', key:'1', name:'store', label:'Tienda', icon:<Storefront/>, layout:'/admin/store/'},
          {group:'menu1', key:'2', name:'board', label:'Aliados', icon:<SettingsIcon/>, layout:'/admin/board/'},
          {group:'menu2', key:'3', name:'res', label:'Residentes', icon:<SettingsIcon/>, layout:'board'}, 
          {group:'menu2', key:'4', name:'col', label:'Colaboradores', icon:<SettingsIcon/>, layout:'board'},
          {group:'menu2', key:'5', name:'cob', label:'Cobros', icon:<SettingsIcon/>, layout:'board'},
          {group:'menu2', key:'6', name:'zo', label:'Zonas Comunes', icon:<SettingsIcon/>, layout:'board'}, 
          {group:'menu2', key:'7', name:'reu', label:'Reuniones', icon:<SettingsIcon/>, layout:'board'}, 
          {group:'menu2', key:'8', name:'cal', label:'Calendario', icon:<SettingsIcon/>, layout:'board'}, 
          {group:'menu2', key:'9', name:'seg', label:'Seguridad', icon:<SettingsIcon/>, layout:'board'},  
          {group:'menu2', key:'10', name:'inc', label:'Incentivos', icon:<SettingsIcon/>, layout:'board'}, 
          {group:'menu2', key:'11', name:'doc', label:'Documentos', icon:<SettingsIcon/>, layout:'board'},
          {group:'menu2', key:'12', name:'cota', label:'Votaciones', icon:<SettingsIcon/>, layout:'board'}, 
          {group:'menu2', key:'13', name:'settings', component:<Settings/>, label:'Configuración', icon:<SettingsIcon/>, layout:'/admin/settings/:id'},
          {group:'menu3', key:'14', name:'reda', label:'Redactar', icon:<SettingsIcon/>, layout:'board'},
          {group:'menu3', key:'15', name:'mens', label:'Mensajes', icon:<SettingsIcon/>, layout:'board'}, 
          {group:'menu3', key:'16', name:'clea', label:'Eliminados', icon:<SettingsIcon/>, layout:'board'}
      ]
  },
  {
      language:'en_eus',
      title:"Administration your Cownership",
      titleCoownerShip:"Your Cownership",
      menus:{
        m1:['Inicio'],
        m2:[
          'Residentes', 
          'Colaboradores', 
          'Cobros', 
          'Zonas Comunes', 
          'Reuniones', 
          'Calendario', 
          'Seguridad', 
          'Incentivos', 
          'Documentos', 
          'Votaciones', 
          'Configuración'
        ],
        m3:[
          'Redactar', 
          'Mensajes', 
          'Eliminados'
        ]
      }
  }
]