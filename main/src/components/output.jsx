import "../styles/output.css";

export default function Output({ generalInfo, eduInfo, expInfo }) {
    return (
        <div className="output">
            <h3>Resume</h3>
            <hr></hr>
            <section className="general-section">
                <h1>General</h1>
                <p>
                    Name: {generalInfo.name} <br></br>
                    {generalInfo.email === "" ? "Email: None" : `Email: ${generalInfo.email}`}<br></br>
                    {generalInfo.phone === ""? "Phone: None" : `Phone: ${generalInfo.phone}`} <br></br>
                </p>
            </section>
            <section className="edu-section">
                <h1>{eduInfo.institution === "" ? "Education: None" : "Education"}</h1>
                <p>
                    {eduInfo.institution === "" ? "" : `Institution: ${eduInfo.institution}`}<br></br>
                    {eduInfo.degree === "" ? "" : `Degree: ${eduInfo.degree}`} <br></br>
                    {eduInfo.graduation === "" ? "" :  `Graduation Date: ${eduInfo.graduation}`}
                    {eduInfo.graduation && (eduInfo.expected ? <b> (Expected)</b> : "")}
                    <br></br>
                </p>
            </section>
            <section className="exp-section">
                <h1>{expInfo.company === "" ? "Experience: None" : "Experience"}</h1>
                <p>
                    {expInfo.company === "" ? "" : `Company: ${expInfo.company}`} <br></br>
                    {expInfo.role === "" ? "" : `Role: ${expInfo.role}`} <br></br>
                    {expInfo.responsibilities.length === 0 ? "" :
                        <>Responsibilities:
                            <ul>
                                {expInfo.responsibilities.split('.').slice(0, -1).map((responsibility, index) => <li key={index}> {responsibility}<br></br></li>)}
                            </ul>
                        </>
                    }
                    {expInfo.start === "" ? "" : `Start Date: ${expInfo.start}`} <br></br>
                    {expInfo.end === "" ? "" : `End Date: ${expInfo.end}`} <br></br>
                </p>
            </section>
        </div>
    )
}