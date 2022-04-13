import React, { useState, useEffect } from 'react';


function useFetch() {
  const API_URL = 'https://pokeapi.co/api/v2/pokemon/ditto'

    const { data, loading, error } = useFetch(API_URL);

    id (loading) return <h1>LOADING...</h1>
  return (

  );
}

export default useFetch;
/* A hook is a component in react but the difference is in a hook you dont return jsx, you only return data and state  */