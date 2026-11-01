import "../index.css";
import "../styles/education.css";



export default function Education({ eduInfo, setEduInfo }) {
    function handleSubmit(e) {
        e.preventDefault();
    }
    return (
        <>
            <form className="edu-form" onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Education</legend>
                    <label htmlFor="institution">Institution</label>
                    <input value={eduInfo.institution} id="institution" minLength={2} maxLength={30}
                           onChange={(e) =>
                               setEduInfo({
                                   ...eduInfo,
                                   institution: e.target.value
                               })
                           } type="text" aria-labelledby="institution" placeholder="Concordia University" />
                    <label htmlFor="degree">Degree</label>
                    <input value={eduInfo.degree} id="degree" aria-labelledby="degree"
                           onChange={(e) =>
                               setEduInfo({
                                   ...eduInfo,
                                   degree: e.target.value
                               })
                           }
                           type="text" placeholder="BSc. Software Engineering" minLength={5} maxLength={40}/>
                    <label htmlFor="graduation">Graduation Date</label>
                    <input value={eduInfo.graduation} id="graduation" aria-labelledby="graduation"
                           onChange={(e) =>
                               setEduInfo({
                                   ...eduInfo,
                                   graduation: e.target.value
                               })
                           }
                           type="date"/>
                </fieldset>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}