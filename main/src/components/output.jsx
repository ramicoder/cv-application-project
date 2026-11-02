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
                    Email: {generalInfo.email} <br></br>
                    Phone: {generalInfo.phone} <br></br>
                </p>
            </section>
            <section className="edu-section">
                <h1>Education</h1>
                <p>
                    Institution: {eduInfo.institution} <br></br>
                    Degree: {eduInfo.degree} <br></br>
                    Graduation Date: {eduInfo.graduation} <br></br>
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