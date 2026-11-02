import { useState } from 'react'
import General from "./components/general.jsx";
import Education from "./components/education.jsx";
import Experience from "./components/experience.jsx";
import './App.css'

function App() {

    let [generalInfo, setGeneralInfo] = useState({
        name: "",
        email: "",
        phone: ""
    });

    let [eduInfo, setEduInfo] = useState({
        institution: "",
        degree: "",
        graduation: ""
    });

    let [expInfo, setExpInfo] = useState({
        company: "",
        role: "",
        responsibilities: "",
        start: "",
        end: ""
    })

  return (
      <>
        <General generalInfo={generalInfo} setGeneralInfo={setGeneralInfo}></General>
        <Education eduInfo={eduInfo} setEduInfo={setEduInfo} />
        <Experience expInfo={expInfo} setExpInfo={setExpInfo} />

      </>
  )

}

export default App
