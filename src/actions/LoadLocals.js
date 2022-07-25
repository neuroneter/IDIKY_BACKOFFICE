import { Locals } from '../data/Locals';
import { TypesReducers } from '../data/TypesReducers';

export const LoadLocals = () => {
    //la constante Language se define como es_col pero esta tiene que ser recuperada del perfil del usuario
    //ya que es en este lugar donde se configura el lenguage y geo localizacion del mismo. 
    const language = 'es_col';
    const locals = Locals.filter(local => local.language === language)[0];
    return ({
        type:TypesReducers.locals,
        payload:{
            language:language,
            locals:locals
        }
    });
}