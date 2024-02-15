import React, {useState} from "react";

import { FetchRandom } from "../../fetchData";

// import "./userInputs.css"
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

const InputRandom = (props) => {
    const {setApiData} = props;
    const [inputValue, setInputValue] = useState("")
    return (
        <>
            <InputGroup className="mx-auto mt-2 w-25">
                <InputGroup.Text >#</InputGroup.Text>
                <Form.Control
                type="number"
                placeholder="Enter number"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                />
                <Button variant="primary" onClick={ async ()=> setApiData(await FetchRandom(inputValue))} >Show</Button>
            </InputGroup>
        </>
        
        // <div className="input-container">
        //     <input type="number" min="1" placeholder="Enter number" value={inputValue} onChange={e => setInputValue(e.target.value)}/>
        //     <button onClick={ async ()=> setApiData(await FetchRandom(inputValue))} >Show</button>
        // </div>
    )
}

export default InputRandom;