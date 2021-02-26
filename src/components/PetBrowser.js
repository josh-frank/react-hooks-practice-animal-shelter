import React from "react";

import Pet from "./Pet";

function PetBrowser( { petsToDisplay } ) {
  
  const petsArray = petsToDisplay.map( pet => 
    <Pet key={ pet.id } type={ pet.type } gender={ pet.gender } age={ pet.age } weight={ pet.weight } name={ pet.name } isAdopted={ pet.isAdopted } />
  );

  return (
    <div className="ui cards">
      { petsArray }
    </div>
  );

}

export default PetBrowser;
