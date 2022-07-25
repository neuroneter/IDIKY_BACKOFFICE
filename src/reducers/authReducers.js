import { TypesReducers } from '../data/TypesReducers';

export const authReducers = (state = {}, action) => {
    switch (action.type) {
        case TypesReducers.login:
                return{
                    uid:action.payload.uid,
                    name:action.payload.displayName
                }
        case TypesReducers.logout:
                return{ }
        default:
            return state;
    }
}
