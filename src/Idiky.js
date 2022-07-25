import React from 'react';
import { Main } from './routers/Main';
import { Provider } from 'react-redux';
import {store} from './stores/store';

export const Idiky = (props) => {
    return(
        <Provider store={store}>
            <Main histoy={props.history}/>
        </Provider>
        
    )
  };
  
