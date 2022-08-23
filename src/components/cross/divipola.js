import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setDefaultCity } from '../../stores/states/Divipola';
import {Row, Col, FormGroup, Label } from 'reactstrap';
import Select from 'react-select';


export const Divipola = ({defaultCiti}) => {

    const dispatch = useDispatch()
    const stateDivipola = useSelector((state) => state.divipola);

    //Se crean los estados locales que nos permiten cargas las listas de departamentos y ciudades y el los valores que son seleccionados por defecto
    const [statesCountry, setStatesCountry] = useState() //Estado para listas de estados
    const [citiesCountry, setCitiesCountry] = useState() //Estado para listas de ciudades

    const statesList = (dState) => {
        const options = [stateDivipola.defaultState];   
        stateDivipola.allDivipola.map( states => {
          options.push({value:states.code, code:states.code, label:states.name});
        })

        setStatesCountry(<Select 
            defaultValue={dState}
            selectedValue={dState}
            options={options} 
            onChange={stateSelet.bind(this)} 
          />);

    }
    
    const stateSelet = (info, dCity) => {
        
        dispatch(setDefaultCity({
            city:{value:0, code:0, label:'Ciudad'},
            state:{value:info.value, code:info.code, label:info.label}
        }));
        
        if(!dCity.value){
            dCity = {value:'0', code:'0', label:'Ciudad'}
            setCitiesCountry(<></>);
        } 

        const options = [{value:'0', code:'0', label:'Ciudad'}];   
        const allCities = stateDivipola.allDivipola.find(states => states.code === info.code);
        allCities.cities.map( cities => {
            options.push({value:cities.code, code:cities.code, label:cities.name});
        });

        setTimeout(function(){
            setCitiesCountry(
                <Select 
                    defaultValue={ dCity }
                    selectedValue={ dCity }
                    options={options}  
                    onChange={citieSelect.bind(this)} 
                />);
        }, 50);
        
    }
    
    const citieSelect =(info) => {
      console.log({value:info.value, code:info.code, label:info.label})
        dispatch(setDefaultCity({
            city:{value:info.value, code:info.code, label:info.label},
            state:stateDivipola.defaultState
        }));
    }
    
    useEffect(() => {
        
        if(defaultCiti !== undefined) {
            let stateTmp = defaultCiti[0]+defaultCiti[1];
            let stateSelect = stateDivipola.allDivipola.find(states => states.code === stateTmp);
            let citySelect = stateSelect.cities.find(cities => cities.code === defaultCiti);
            dispatch(setDefaultCity({
                state:{value:stateSelect.code, code:stateSelect.code, label:stateSelect.name},
                city:{value:citySelect.code, code:citySelect.code, label:citySelect.name}
            })); 
            statesList({value:stateSelect.code, code:stateSelect.code, label:stateSelect.name});
            stateSelet({value:stateSelect.code, code:stateSelect.code, label:stateSelect.name}, {value:citySelect.code, code:citySelect.code, label:citySelect.name});

        }else statesList(null, null);
    },[])

       
      return (
        <Row>
                <Col>
                    <FormGroup>
                      <Label for="exampleSelect">
                        Departamentos
                      </Label>
                      {statesCountry}
                    </FormGroup>

                  </Col>
                  <Col>

                  <FormGroup>
                    <Label for="exampleSelect">
                      Municipios
                    </Label>
                    {citiesCountry}
                  </FormGroup>

                </Col>
        </Row>
      )
}