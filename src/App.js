import React, { useEffect, useState } from "react";
import "./App.css";
import {FetchRandom} from "./fetchData";

//import ApodComp from "./components/apod/ApodComp";
import MyNavbar from "./components/nav/Navbar";
import InputContainer from "./components/userinput/InputContainer";
import 'bootstrap/dist/css/bootstrap.min.css';

import Accordion from 'react-bootstrap/Accordion';



function App() {
  
  const [apiData, setApiData] = useState([]);
  const [InputToShow, setInputToShow] = useState("Random")

  // get data from API with useEffect hook
  useEffect(() => {
    async function fetchData() {
      const dataObj = await FetchRandom();
      setApiData(dataObj);
    }
    fetchData();
  }, []);
  return (
    <div className="App">
      <h1>NASA Astronomy Picture of the Day</h1>
      <MyNavbar setInputToShow = {setInputToShow} />
      <InputContainer InputToShow = {InputToShow} setApiData = {setApiData} />
      
      <Accordion defaultActiveKey={[0]} className="w-75 mx-auto mt-2">
        {
            apiData ?
            apiData.map((item, index) => { 
              return(
              <>
                <Accordion.Item eventKey={index} key={index} >
                  <Accordion.Header>{item.date}</Accordion.Header>
                  <Accordion.Body className="d-flex flex-row gap-3">
                    {<img className="apod-images" alt={item.title} src={item.url} style={{ width:"500px", height:"400px"}}/>}
                    {<div className="text-start"><h1>{item.title}</h1><br></br>{item.explanation}</div>}
                  </Accordion.Body>
                </Accordion.Item>
              </>)
            }
            )
            :
            <p>Loading...</p>
          }
      
      </Accordion>
      {/* <div>
        {
          apiData ?
          apiData.map((item, index) => <ApodComp key={index} apod={item} />)
          :
          <p>Loading...</p>
        }
      </div> */}
    </div>
  );
}

export default App;
