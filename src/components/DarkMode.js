import { useState } from 'react';
import Form from 'react-bootstrap/Form';



function DarkMode() {
    const [darkMode, setDarkMode] = useState(false)
    let htmlElement = document.getElementsByTagName("html")[0];
    const handleSwitch = () => {
        if (darkMode === true) {
            htmlElement.setAttribute("data-bs-theme", "light");
            setDarkMode(false);
        } else {
            htmlElement.setAttribute("data-bs-theme", "dark");
            setDarkMode(true);
        } 
    }
  return (
    <Form>
      <Form.Check // prettier-ignore
        type="switch"
        id="custom-switch"
        label="Dark Mode"
        onChange={()=>handleSwitch()}
      />
    </Form>
  );
}

export default DarkMode;