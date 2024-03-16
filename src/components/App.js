import React, {useState} from "react";
import Nav from "./Nav";
import Pig from "./Pig";
import Filter from "./Filter";
import Sorter from "./Sorter";

import hogs from "../porkers_data";

function App() {

	const [displayPigs, setDisplayPigs] = useState(hogs);

	function handleFilter(event) {
        const pigsToDisplay = hogs.filter((hog) => {
			if (event.target.value === "Ungreased") {
				return !hog.greased
			} else if (event.target.value === "Greased") {
				return hog.greased
			} else return true
		})
		setDisplayPigs(pigsToDisplay);
	};

	function handleSorter(event) {
        if (event.target.value === "Sort by name") {
			const reorderedPigs = [...displayPigs].sort((a, b) => {
				return a.name.localeCompare(b.name);
			})
			setDisplayPigs(reorderedPigs)
 
		} else if (event.target.value === "Sort by weight") {
			const reorderedPigs = [...displayPigs].sort((a, b) => {
			    return a.weight - b.weight;
		    })
			setDisplayPigs(reorderedPigs)
		}
	};

	return (
		<div className="App">
			<Nav />
			<div>
			    <Filter handleFilter={handleFilter}/>
			    <Sorter handleSorter={handleSorter}/>
			</div>
			<div className="ui grid container">
			{displayPigs.map((hog) => 
				<Pig hog={hog} key={hog.name}/>
			)}
			</div>
		</div>
	);
}

export default App;
