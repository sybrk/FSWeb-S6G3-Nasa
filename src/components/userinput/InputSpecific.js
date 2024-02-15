import React, {useState} from "react";
import { FetchSpecific } from "../../fetchData";
//import "./userInputs.css"
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

const InputSpecific = (props) => {
    const {setApiData} = props;
    const [inputValue, setInputValue] = useState("")
    return (
        <>
            <InputGroup className="mx-auto mt-2 w-50">
                <InputGroup.Text >Specific</InputGroup.Text>
                <Form.Control
                type="date"
                placeholder="Enter date"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                />
                <Button variant="primary" onClick={ async ()=> setApiData(await FetchSpecific(inputValue))} >Show</Button>
            </InputGroup>
        
        </>


        // <div className="input-container">
        //     <input type="date" placeholder="Choose a specific date" value={inputValue} onChange={e => setInputValue(e.target.value)}/>
        //     <button onClick={ async ()=> setApiData(await FetchSpecific(inputValue))} >Show</button>
        // </div>
    )
}

export default InputSpecific