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
        graduation: "",
        expected: false,
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
    /*
    make logic for empty field to be displayed as "None"
    make expected checkbox put a (expected) in bold after the graduation date if it is checked
    make responsibilities text area store the paragraph into an array separaing its sentences by a "."
    add logic to display the responsibilities sentences in bullet points
     */
}

export default App
