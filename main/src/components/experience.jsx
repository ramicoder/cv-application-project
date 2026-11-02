import "../index.css";
import "../styles/experience.css";
import {useState} from "react";



export default function Experience({ expInfo, setExpInfo }) {
    const [disabled, setDisabled] = useState(false);
    return (
        <>
            <form className="exp-form" onSubmit={(e) => e.preventDefault()}>
                <fieldset>
                    <legend>Experience</legend>
                    <label htmlFor="company">Company</label>
                    <input value={expInfo.company} id="company" minLength={2} maxLength={30}
                           onChange={(e) =>
                               setExpInfo({
                                   ...expInfo,
                                   company: e.target.value
                               })
                           } disabled={disabled} type="text" aria-labelledby="company" placeholder="Amazon" />
                    <label htmlFor="role">Role</label>
                    <input value={expInfo.role} id="role" aria-labelledby="role"
                           onChange={(e) =>
                               setExpInfo({
                                   ...expInfo,
                                   role: e.target.value
                               })
                           }
                           disabled={disabled} type="text" placeholder="Junior Backend Software Engineer" minLength={2} maxLength={50}/>
                    <label htmlFor="responsibilities">Responsibilities</label>
                    <input value={expInfo.responsibilities} id="responsibilities" aria-labelledby="responsibilities"
                           onChange={(e) =>
                               setExpInfo({
                                   ...expInfo,
                                   responsibilities: e.target.value
                               })
                           }
                           disabled={disabled} type="text" minLength={10} maxLength={200}/>
                    <label htmlFor="start-date">Start date</label>
                    <input value={expInfo.start} id="start-date" aria-labelledby="starting date"
                           onChange={(e) =>
                               setExpInfo({
                                   ...expInfo,
                                   start: e.target.value
                               })
                           }
                           disabled={disabled} type="month"/>
                    <label htmlFor="end-date">End date</label>
                    <input value={expInfo.end} id="end-date" aria-labelledby="ending date"
                           onChange={(e) =>
                               setExpInfo({
                                   ...expInfo,
                                   end: e.target.value
                               })
                           }
                           disabled={disabled} type="month"/>
                </fieldset>
                <button type="submit" onClick={() => setDisabled(true)} disabled={disabled} >Submit</button>
                <button onClick={() => setDisabled(false)} >Edit</button>
            </form>
        </>
    )
}