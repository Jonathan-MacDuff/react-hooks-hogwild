import React, {useState} from "react";

function Pig(props) {

    const [clickedPig, setClickedPig] = useState(false)
    
    function handleHogClick() {
        if (clickedPig === false) {
        setClickedPig(true)
        } else {
            setClickedPig(false)
        }
	};


    return (
        <div  className="ui eight wide column" style={{marginBottom: "10px", marginTop: "10px"}}>
            <p>{props.hog.name}</p>
            <img 
                src={props.hog.image} 
                onClick={handleHogClick}
                style={{height: "350px", width: "350px"}}
            />
            {clickedPig && (
            <div>
                <p>{props.hog.greased ? "Greased" : "Ungreased"}</p>
		        <p>Highest Medal Achieved: {props.hog.highestmedalachieved}</p>
		        <p>Weight: {props.hog.weight}</p>
		        <p>Specialty: {props.hog.specialty}</p>
            </div>
            )}
        </div>
    )
}

export default Pig