import "../index.css";
import "../styles/experience.css";



export default function Experience({ expInfo, setExpInfo }) {
    function handleSubmit(e) {
        e.preventDefault();
    }
    return (
        <>
            <form className="exp-form" onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Experience</legend>
                    <label htmlFor="company">Company</label>
                    <input value={expInfo.company} id="company" minLength={2} maxLength={30}
                           onChange={(e) =>
                               setExpInfo({
                                   ...expInfo,
                                   company: e.target.value
                               })
                           } type="text" aria-labelledby="company" placeholder="Amazon" />
                    <label htmlFor="role">Role</label>
                    <input value={expInfo.role} id="role" aria-labelledby="role"
                           onChange={(e) =>
                               setExpInfo({
                                   ...expInfo,
                                   role: e.target.value
                               })
                           }
                           type="text" placeholder="Junior Backend Software Engineer" minLength={2} maxLength={50}/>
                    <label htmlFor="responsibilities">Responsibilities</label>
                    <input value={expInfo.responsibilities} id="responsibilities" aria-labelledby="responsibilities"
                           onChange={(e) =>
                               setExpInfo({
                                   ...expInfo,
                                   responsibilities: e.target.value
                               })
                           }
                           type="text" minLength={10} maxLength={200}/>
                    <input value={expInfo.start} id="start-date" aria-labelledby="starting date"
                           onChange={(e) =>
                               setExpInfo({
                                   ...expInfo,
                                   start: e.target.value
                               })
                           }
                           type="month"/>
                    <input value={expInfo.end} id="end-date" aria-labelledby="ending date"
                           onChange={(e) =>
                               setExpInfo({
                                   ...expInfo,
                                   end: e.target.value
                               })
                           }
                           type="month"/>
                </fieldset>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}