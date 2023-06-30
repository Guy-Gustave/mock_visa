import React, { useState, useMemo } from 'react'
import Select from 'react-select'
import countryList from 'react-select-country-list'

const SearchContainer = () => {
  const [value, setValue] = useState('')
  const options = useMemo(() => countryList().getData(), [])
  console.log("object", options)

  const changeHandler = value => {
    setValue(value)
  }
  return (
    <div>
      <h1>searching container</h1>
      <Select options={options} value={value} onChange={changeHandler} />
      {/* <div className="input-section">
        <select name="visa" id="visa-select">
          <option value="">--Please choose an option--</option>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
          <option value="hamster">Hamster</option>
          <option value="parrot">Parrot</option>
          <option value="spider">Spider</option>
          <option value="goldfish">Goldfish</option>
        </select>
      </div> */}
    </div>
  );
};

export default SearchContainer;
