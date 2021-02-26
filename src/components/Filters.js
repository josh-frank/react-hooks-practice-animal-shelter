import { useState } from "react";

function Filters( { filters, setFilters } ) {

  const [ currentFilter, changeCurrentFilter ] = useState( "all" );

  function updateFilters() {
    const updatedFilters = { ...filters };
    updatedFilters.type = currentFilter;
    setFilters( updatedFilters );
  }

  return (
    <div className="ui form">
      <h3>Animal type</h3>
      <div className="field">
        <select name="type" id="type" onChange={ ( changeEvent ) => changeCurrentFilter( changeEvent.target.value ) }>
          <option value="all">All</option>
          <option value="cat">Cats</option>
          <option value="dog">Dogs</option>
          <option value="micropig">Micropigs</option>
        </select>
      </div>

      <div className="field">
        <button className="ui secondary button" onClick={ updateFilters }>Find pets</button>
      </div>
    </div>
  );
  
}

export default Filters;
