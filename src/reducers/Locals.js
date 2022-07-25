import { TypesReducers } from '../data/TypesReducers';

export const Locals = (state = {}, action) => {
    switch (action.type) {
        case TypesReducers.locals:
            return{
                language:action.payload.language,
                locals:action.payload.locals
            }
        default:
            return state;
    }
}