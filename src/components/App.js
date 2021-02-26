import React, { useState, useEffect } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

const petsUrl = "http://localhost:3001/pets";

function App() {
  
  const [ pets, setPets ] = useState( [] );
  const [ filters, setFilters ] = useState( { type: "all" } );

  function fetchPets() {
    return fetch( petsUrl ).then( response => response.json() );
  }

  function filterPets() {
    return pets.filter( pet => filters.type === "all" ? true : pet.type === filters.type );
  }
  
  useEffect( () => {
    fetchPets().then( setPets )
  }, [] );

  return (
    <div className="ui container" >
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters filters={ filters } setFilters={ setFilters } />
          </div>
          <div className="twelve wide column">
            <PetBrowser petsToDisplay={ filterPets() } />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
