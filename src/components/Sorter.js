import React from "react";

function Sorter({ handleSorter }) {

    return (
    <select onChange={handleSorter}>
        <option>Default</option>
        <option>Sort by name</option>
        <option>Sort by weight</option>
    </select>
    )
}

export default Sorter