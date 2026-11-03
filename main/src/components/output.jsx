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
                    {eduInfo.institution === "" ? "" : `Degree: {eduInfo.degree}`} <br></br>
                    {eduInfo.institution === "" ? "" :  `Graduation Date: ${eduInfo.graduation}`} <br></br>

                </p>
            </section>
            <section className="exp-section">
                <h1>Experience</h1>
                <p>
                    Company: {expInfo.company} <br></br>
                    Role: {expInfo.role} <br></br>
                    Responsibilities: {expInfo.responsibilities} <br></br>
                    Start Date: {expInfo.start} <br></br>
                    End Date: {expInfo.end} <br></br>
                </p>
            </section>
        </div>
    )
}