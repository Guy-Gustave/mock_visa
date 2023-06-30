import React from "react";

const SearchContainer = () => {
  return (
    <div>
      <h1>searching container</h1>

      <div className="input-section">
        <select name="visa" id="visa-select">
          <option value="">--Please choose an option--</option>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
          <option value="hamster">Hamster</option>
          <option value="parrot">Parrot</option>
          <option value="spider">Spider</option>
          <option value="goldfish">Goldfish</option>
        </select>
      </div>
    </div>
  );
};

export default SearchContainer;
