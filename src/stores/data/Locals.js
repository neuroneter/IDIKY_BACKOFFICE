import SettingsIcon from '@material-ui/icons/Settings'
import Storefront from '@material-ui/icons/Storefront'
import ApartmentIcon from '@material-ui/icons/Apartment'
import HomeIcon from '@material-ui/icons/Home'
import CategoryIcon from '@material-ui/icons/Category'
import AppsIcon from '@material-ui/icons/Apps'
import BrokenImageIcon from '@material-ui/icons/BrokenImage'
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar'
import { ListBrands } from '../../layout/component_admin/content/store/brands/ListBrands'
import { ListImagenTmp } from '../../layout/component_admin/content/store/imagentmp/ListImagenTmp'
import { Board } from '../../layout/component_admin/content/Board'
import { ListCategories } from '../../layout/component_admin/content/store/categories/ListCategories'
import { ListSuppliers } from '../../layout/component_admin/content/store/suppliers/ListSuppliers'
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
      {
        group: 'menu1',
        key: '1',
        title: 'Bienvenidos a Idiky',
        label: 'Inicio',
        module: 'board',
        icon: <HomeIcon />,
        component: <Board />,
        route: '/admin',
      },
      {
        group: 'menu1',
        key: '2',
        title: 'Tienda',
        child: 'menu3',
        label: 'Tienda',
        module: 'store',
        icon: <Storefront />,
        component: <Board />,
        route: '/admin/store/',
      },
      {
        group: 'menu3',
        key: '3',
        title: 'Lista de Marcas',
        label: 'Marcas',
        module: 'brands',
        icon: <AppsIcon />,
        component: <ListBrands />,
        route: '/admin/store/brands',
      },
      {
        group: 'menu3',
        key: '4',
        title: 'Gestiona las categorias',
        label: 'Categorías',
        module: 'categories',
        icon: <CategoryIcon />,
        component: <ListCategories />,
        route: '/admin/store/categories',
      },

      {
        group: 'menu3',
        key: '5',
        title: 'Gestiona imagenes huerfanas',
        label: 'Imagenes Tmp',
        module: 'imagentmp',
        icon: <BrokenImageIcon />,
        component: <ListImagenTmp />,
        route: '/admin/store/imagentmp',
      },

      {
        group: 'menu1',
        key: '6',
        title: 'Gestiona información de aliados',
        child: 'menu2',
        module: 'board',
        label: 'Aliados',
        icon: <ApartmentIcon />,
        component: <Board />,
        route: '/admin/partner/',
      },

      {
        group: 'menu2',
        key: '7',
        title: 'Lista de Marcas',
        label: 'Residentes',
        module: 'res',
        icon: <SettingsIcon />,
        component: <Board />,
        route: 'board',
      },
      {
        group: 'menu2',
        key: '8',
        title: 'Lista de Marcas',
        label: 'Colaboradores',
        module: 'col',
        icon: <SettingsIcon />,
        component: <Board />,
        route: 'board',
      },
      {
        group: 'menu2',
        key: '9',
        title: 'Lista de Marcas',
        label: 'Configuración',
        module: 'settings',
        icon: <SettingsIcon />,
        component: <Board />,
        route: '/admin/settings/:id',
      },
      {
        group: 'menu3',
        key: '10',
        title: 'lista de Proveedores',
        label: 'Proveedores',
        module: 'suppliers',
        icon: <PermContactCalendarIcon />,
        component: <ListSuppliers />,
        route: '/admin/store/suppliers',
      },
    ],
  },
  {
    language: 'en_eus',
    title: 'Sistema de información',
    menus: [
      {
        group: 'menu1',
        key: '1',
        title: 'Tienda',
        child: 'menu3',
        label: 'Tienda',
        module: 'store',
        icon: <SettingsIcon />,
        component: <Board />,
        route: '/admin/store/',
      },
    ],
  },
]
