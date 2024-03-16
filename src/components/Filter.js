import React from "react";

function Filter({ handleFilter }) {

  return (
    <select onChange={handleFilter}>
        <option>Default</option>
        <option>Greased</option>
        <option>Ungreased</option>
    </select>
  )
}

export default Filter