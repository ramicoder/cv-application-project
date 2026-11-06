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
                    <label htmlFor="institution">Institution</label>
                    <input value={eduInfo.institution} id="institution" minLength={2} maxLength={30}
                           onChange={(e) =>
                               setEduInfo({
                                   ...eduInfo,
                                   institution: e.target.value
                               })
                           } disabled={disabled} type="text" aria-labelledby="institution" placeholder="Concordia University" />
                    <label htmlFor="degree">Degree</label>
                    <input value={eduInfo.degree} id="degree" aria-labelledby="degree"
                           onChange={(e) =>
                               setEduInfo({
                                   ...eduInfo,
                                   degree: e.target.value
                               })
                           }
                           disabled={disabled} type="text" placeholder="BSc. Software Engineering" minLength={5} maxLength={40}/>
                    <label htmlFor="graduation">Graduation Date</label>
                    <input value={eduInfo.graduation} id="graduation" aria-labelledby="graduation"
                           onChange={(e) =>
                               setEduInfo({
                                   ...eduInfo,
                                   graduation: e.target.value
                               })
                           }
                           disabled={disabled} type="month"/>
                    <label htmlFor="expected">Expected</label>
                    <input type="checkbox" value={eduInfo.expected} id="expected" aria-labelledby="expected graduation date"
                    onChange={(e) => setEduInfo({
                        ...eduInfo,
                        expected: e.target.value
                    })}/>
                </fieldset>
                <button type="submit"  disabled={disabled} >Submit</button>
                <button type="button" onClick={() => {
                    setDisabled(false);
                    setDataSubmitted(dataSubmitted - 1);
                    setDisplayed(false);
                }} >Edit</button>
            </form>
        </>
    )
}