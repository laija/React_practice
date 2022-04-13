
import useFetch from "./useFetch";
import { useStateValue, useStateUpdate } from './ThemeContext'
import React from 'react';
import BasicDatePicker from "./components/mdp/dataDisplay/BasicDatePicker"
import Almanac from "./components/mdp/dataDisplay/Almanac"
import moment from 'moment'

const pokemonArray = ['blastoise', 'snorlax', 'ninetales', 'squirtle', 'dragonite', 'eevee', 'bulbasaur', 'arcanine', 'gengar', 'charizard'];

function FetchPokemon() {

  const pokemonUnit = JSON.stringify(1 + Math.floor(Math.random()*pokemonArray.length))
  const { data: response, loading, error, refetch } = useFetch(   
    "https://pokeapi.co/api/v2/pokemon/" + pokemonUnit
    );

  const toggleTheme = useStateUpdate();
  const stateValue = useStateValue();

  const themeStyles = {
      padding: '2rem',
      margin: '2rem',
      backgroundColor: stateValue ? '#333' : '#CCC',
      color: stateValue ? '#CCC' : '#333',
  }



  const currrentDate = moment().add(1, 'days')
  return (
      <div style={themeStyles}>
            <button onClick={() => {
                refetch(); 
                localStorage.setItem('Pokemon', JSON.stringify(response)); 
                toggleTheme()
              }
            }>Load Random Pokemon</button>
            <div>
              <span>Pokemon Name = {response?.name}</span>
              <img src={response?.sprites.front_default} />
            </div>
            <BasicDatePicker
              allowClear
              bordered
              datePickerSize="default"
              defaultPickerValue={currrentDate}
              format="YYYY/MM/DD"
              pickerFormat="week"
            />
            
            <Almanac
            customHeader
              defaultValue={currrentDate}
              endDisableDays={30}
              header={response?.name}
              mode="month"
              startDisabledDays={0}
            />
      </div>
  );
}

export default FetchPokemon;
