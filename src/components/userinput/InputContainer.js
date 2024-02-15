import React from "react";

import InputRandom from "./InputRandom";
import InputSpecific from "./InputSpecific";
import InputRange from "./InputRange";

const InputContainer = (props) => {
    const { InputToShow, setApiData } = props

    switch(InputToShow) {
        case "Random":
            return <InputRandom setApiData = {setApiData} />
        case "Specific":
            return <InputSpecific setApiData = {setApiData}  />
        case "Range":
            return <InputRange setApiData = {setApiData}  />
        default: 
            return <InputRandom setApiData = {setApiData} />
    }       
}

export default InputContainer;