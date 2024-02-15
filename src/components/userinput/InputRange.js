import React, {useState} from "react";
import { FetchRange } from "../../fetchData";
//import "./userInputs.css"
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

const InputRange = (props) => {
    const {setApiData} = props;
    const [startDate, setstartDate] = useState("")
    const [endDate, setEndDate] = useState("")
    return (
        <>
            <InputGroup className="mx-auto mt-2 w-50">
                <InputGroup.Text >Range</InputGroup.Text>
                <Form.Control
                type="date"
                placeholder="Start Date"
                value={startDate}
                onChange={e => setstartDate(e.target.value)}
                />
                <Form.Control
                type="date"
                placeholder="End Date"
                value={endDate}
                onChange={e => setEndDate(e.target.value)}
                />
                <Button variant="primary" onClick={ async ()=> setApiData(await FetchRange(startDate, endDate))} >Show</Button>
            </InputGroup>
        </>

        // <div className="input-container">
        //     <input type="date" placeholder="Choose start date" value={startDate} onChange={e => setstartDate(e.target.value)} />
        //     <input type="date" placeholder="Choose end date" value={endDate} onChange={e => setEndDate(e.target.value)} />
        //     <button onClick={ async ()=> setApiData(await FetchRange(startDate, endDate))} >Show</button>
        // </div>
    )
}

export default InputRange