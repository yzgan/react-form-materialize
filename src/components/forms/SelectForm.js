import React from 'react'
import {
  Select,
} from "react-materialize";

const defaultOptions = {
  1: "option 1",
  2: "option 2",
  3: "option 3"
}

const SelectForm = ({name, options}) => {
  const selectOptions = options ? options : defaultOptions

  return (
    <Select label={name} s={12} defaultValue="">
      <option value="" disabled>Choose your option</option>      
      {
        Object.keys(selectOptions).map((key) =>
          <option value={key.toString()} s={12} key={key}>
            {selectOptions[key]}
          </option>
        )
      }
    </Select>
  )
}

export default SelectForm
