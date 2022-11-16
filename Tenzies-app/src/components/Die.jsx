import React from "react";

function Die(props) {
    const {id , value, selected, selectDice} = props

    return (  
        <div className = {selected ? "die green": 'die'} onClick={() => selectDice()} >
            {value}
        </div>
    );
}

export default Die;