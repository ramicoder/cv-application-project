import { useState } from 'react'
import General from "./components/general.jsx";
import Education from "./components/education.jsx";
import Experience from "./components/experience.jsx";
import Output from "./components/output.jsx";
import './App.css'

function App() {

    let [generalInfo, setGeneralInfo] = useState({
        name: "",
        email: "",
        phone: ""
    });
    let [dataSubmitted, setDataSubmitted] = useState(0);

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
    });

    let [displayed, setDisplayed] = useState(false);

  return (
      <>
        <General generalInfo={generalInfo} setGeneralInfo={setGeneralInfo} dataSubmitted={dataSubmitted} setDataSubmitted={setDataSubmitted} displayed={displayed} setDisplayed={setDisplayed}></General>
        <Education eduInfo={eduInfo} setEduInfo={setEduInfo} dataSubmitted={dataSubmitted} setDataSubmitted={setDataSubmitted} displayed={displayed} setDisplayed={setDisplayed} />
        <Experience expInfo={expInfo} setExpInfo={setExpInfo} dataSubmitted={dataSubmitted} setDataSubmitted={setDataSubmitted} displayed={displayed} setDisplayed={setDisplayed}/>
        <button onClick={() => setDisplayed(true)}>Generate CV</button>

        {displayed && (dataSubmitted===3) && <Output generalInfo={generalInfo} eduInfo={eduInfo} expInfo={expInfo}/>}
      </>
  )

}

export default App
