import SettingsIcon from '@material-ui/icons/Settings'
import Storefront from '@material-ui/icons/Storefront'
import ApartmentIcon from '@material-ui/icons/Apartment'
import HomeIcon from '@material-ui/icons/Home'
import Tune from  '@material-ui/icons/Tune'
import CategoryIcon from '@material-ui/icons/Category'
import AppsIcon from '@material-ui/icons/Apps'
import BrokenImageIcon from '@material-ui/icons/BrokenImage'
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar'
import { ListBrands } from '../../layout/component_admin/content/store/brands/ListBrands'
import { ListImagenTmp } from '../../layout/component_admin/content/store/imagentmp/ListImagenTmp'
import { Home } from '../../layout/component_admin/content/store/Home'
import { ListCategories } from '../../layout/component_admin/content/store/categories/ListCategories'
import { ListSuppliers } from '../../layout/component_admin/content/store/suppliers/ListSuppliers'
import { ListFeatures } from '../../layout/component_admin/content/store/features/ListFeatures'
/**
 * Se definien las rutas de navegación y para cada ruta se envía el módulo a cargar para esta ruta
 * languge: es la etiqueta que define el lenguaje de este menu
 * title: este es el titulo generico cuando no hay ningun modulo cargado
 * menus: contine un objeto de todos los menus y los modulos que serán utilizados para cada menu
 * menus{
 *  group: este es el grupo del menu al que pertenece
 *  key: indicador unico para este menu, tener en cuenta que no se podra repetir en ningun menu
 *  label: nombre que se le dara desde el menu
 *  icon: es el icono importado de material que se asignara a este menu
 *  component: si esta etiqueta se llena se define el componente que sera visualizado en el espacio de contenidos
 *  route: es la ruta que cuando se presente en el explorador llevara inmediatamente a este menu
 * }
 *
 */
export const Locals = [
  {
    language: 'es_col',
    title: 'Bienvenidos a Idiky',
    menus: [
      //Menu1 Inicio
      {
        key: 'Menu1',
        title: 'Bienvenidos a Idiky',
        label: 'Inicio',
        module: 'home',
        childs:[],
        icon: <HomeIcon />,
        component: <Home />,
        backgroundColor:'#e3edf9',
        color:'black',
        route: '/admin/home/'
      },
      //Menu2 Inicio
      {
        key: 'Menu2',
        title: 'Tienda',
        childs:[
          {
            key: 'Menu2Sub1',
            title: 'Lista de Marcas',
            label: 'Marcas',
            module: 'brands',
            icon: <AppsIcon />,
            component: <ListBrands />,
            route: '/admin/store/brands',
          },
          {
            key: 'Menu2Sub2',
            title: 'Gestiona las categorias',
            label: 'Categorías',
            module: 'categories',
            icon: <CategoryIcon />,
            component: <ListCategories />,
            route: '/admin/store/categories',
          },
          {
            key: 'Menu2Sub3',
            title: 'Gestiona imagenes huerfanas',
            label: 'Imagenes Tmp',
            module: 'imagentmp',
            icon: <BrokenImageIcon />,
            component: <ListImagenTmp />,
            route: '/admin/store/imagentmp',
          },
          {
            key: 'Menu2Sub4',
            title: 'Lista de Proveedores',
            label: 'Proveedores',
            module: 'suppliers',
            icon: <PermContactCalendarIcon />,
            component: <ListSuppliers />,
            route: '/admin/store/suppliers',
          },
          {
            key: 'Menu2Sub5',
            title: 'Lista de Carcateristicas',
            label: 'Caracteristicas',
            module: 'features',
            icon: <Tune />,
            component: <ListFeatures />,
            route: '/admin/store/features',
          }
        ],
        label: 'Tienda',
        module: 'store',
        icon: <Storefront />,
        component: <Home />,
        route: '/admin/store/',
        backgroundColor:'#e3edf9',
        color:'black'
      },
      //Menu3 Inicio
      {
        key: 'Menu3',
        title: 'Gestiona información de aliados',
        childs:[
          {
            key: 'Menu3Sub1',
            title: 'Lista de Marcas',
            label: 'Residentes',
            module: 'res',
            icon: <SettingsIcon />,
            component: <Home />,
            route: 'board',
          },
          {
            key: 'Menu3Sub2',
            title: 'Lista de Marcas',
            label: 'Colaboradores',
            module: 'col',
            icon: <SettingsIcon />,
            component: <Home />,
            route: 'board',
          },
          {
            key: 'Menu3Sub3',
            title: 'Lista de Marcas',
            label: 'Configuración',
            module: 'settings',
            icon: <SettingsIcon />,
            component: <Home />,
            route: '/admin/settings/:id',
          }
        ],
        module: 'partner',
        label: 'Aliados',
        icon: <ApartmentIcon />,
        component: <Home />,
        route: '/admin/partner/',
        backgroundColor:'#e3edf9',
        color:'black'
      }
    ],
  }
]
