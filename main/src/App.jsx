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
      <div className="app">

        <div className="forms">
            <General generalInfo={generalInfo} setGeneralInfo={setGeneralInfo} dataSubmitted={dataSubmitted} setDataSubmitted={setDataSubmitted} displayed={displayed} setDisplayed={setDisplayed}></General>
            <Education eduInfo={eduInfo} setEduInfo={setEduInfo} dataSubmitted={dataSubmitted} setDataSubmitted={setDataSubmitted} displayed={displayed} setDisplayed={setDisplayed} />
            <Experience expInfo={expInfo} setExpInfo={setExpInfo} dataSubmitted={dataSubmitted} setDataSubmitted={setDataSubmitted} displayed={displayed} setDisplayed={setDisplayed}/>
        </div>

          <div className="output-stuff">
              {displayed && <Output generalInfo={generalInfo} eduInfo={eduInfo} expInfo={expInfo}/>}
              <button className={"generate-btn"} onClick={() => {
                  if (dataSubmitted === 3) {
                      setDisplayed(true);
                  } else {
                      alert("Please submit all forms");
                  }
              }}>Generate CV</button>
          </div>
      </div>
  )
}

export default App