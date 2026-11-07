import "../index.css";
import "../styles/education.css";
import {useState} from "react";



export default function Education({ eduInfo, setEduInfo, dataSubmitted, setDataSubmitted, setDisplayed }) {

    const [disabled, setDisabled] = useState(false);
    return (
        <>
            <form className="edu-form" onSubmit={(e) => {
                e.preventDefault();
                setDisabled(true);
                setDataSubmitted(dataSubmitted + 1);
                setDisplayed(false);
            }}>
                <fieldset>
                    <legend>Education</legend>

                    <div className={"duo"}>
                        <label htmlFor="institution">Institution:</label>
                        <input value={eduInfo.institution} id="institution" minLength={2} maxLength={30}
                               onChange={(e) =>
                                   setEduInfo({
                                       ...eduInfo,
                                       institution: e.target.value
                                   })
                               } disabled={disabled} type="text" aria-labelledby="institution" placeholder="Concordia University" />
                    </div>
                    <div className={"duo"}>
                        <label htmlFor="degree">Degree:</label>
                        <input value={eduInfo.degree} id="degree" aria-labelledby="degree"
                               onChange={(e) =>
                                   setEduInfo({
                                       ...eduInfo,
                                       degree: e.target.value
                                   })
                               }
                               disabled={disabled} type="text" placeholder="BSc. Software Engineering" minLength={5} maxLength={40}/>
                    </div>
                    <div className={"duo"}>
                        <label htmlFor="graduation">Graduation Date:</label>
                        <input value={eduInfo.graduation} id="graduation" aria-labelledby="graduation"
                               onChange={(e) =>
                                   setEduInfo({
                                       ...eduInfo,
                                       graduation: e.target.value
                                   })
                               }
                               disabled={disabled} type="month"/>
                    </div>
                    <div className={"duo"}>
                        <label htmlFor="expected">Expected</label>
                        <input type="checkbox" checked={eduInfo.expected} disabled={disabled} id="expected" aria-labelledby="expected graduation date"
                               onChange={(e) => setEduInfo({
                                   ...eduInfo,
                                   expected: e.target.checked
                               })}/>
                    </div>
                </fieldset>
                <div className={"buttons"}>
                    <button type="submit" className={"submit-btn"} disabled={disabled} >Submit</button>
                    <button type="button" onClick={() => {
                        setDisabled(false);
                        setDataSubmitted(dataSubmitted - 1);
                        setDisplayed(false);
                    }} >Edit</button>
                </div>
            </form>
        </>
    )
}