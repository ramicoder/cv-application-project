import "../styles/output.css";

export default function Output({ generalInfo, eduInfo, expInfo }) {
    return (
        <div className="output">
            <h3>Résumé</h3>
            <hr></hr>
            <section className="general-section">
                <h1>General</h1>
                    <span>Name: {generalInfo.name}</span> <br></br>
                    <span>{generalInfo.email === "" ? "Email: None" : `Email: ${generalInfo.email}`}</span><br></br>
                    <span>{generalInfo.phone === ""? "Phone: None" : `Phone: ${generalInfo.phone}`}</span><br></br>
            </section>
            <hr></hr>
            <section className="edu-section">
                <h1>{eduInfo.institution === "" ? "Education: None" : "Education"}</h1>

                    <span>{eduInfo.institution === "" ? "" : `Institution: ${eduInfo.institution}`}</span><br></br>
                    <span>{eduInfo.degree === "" ? "" : `Degree: ${eduInfo.degree}`}</span><br></br>
                    <span>{eduInfo.graduation === "" ? "" :  `Graduation Date: ${eduInfo.graduation}`}</span>
                    <span>{eduInfo.graduation && (eduInfo.expected ? <b>&ensp;(Expected)</b> : "")}</span>
                    <br></br>
            </section>
            <hr></hr>
            <section className="exp-section">
                <h1>{expInfo.company === "" ? "Experience: None" : "Experience"}</h1>
                    <span>{expInfo.company === "" ? "" : `Company: ${expInfo.company}`}</span><br></br>
                    <span>{expInfo.role === "" ? "" : `Role: ${expInfo.role}`}</span><br></br>
                <span>{expInfo.responsibilities.length === 0 ? "" :
                    <>Responsibilities:
                        <ul>
                            {expInfo.responsibilities.split('.').slice(0, -1).map((responsibility, index) => <li key={index}> {responsibility}<br></br></li>)}
                        </ul>
                    </>
                }</span>
                <br></br>
                <span>{expInfo.start === "" ? "" : `Start Date: ${expInfo.start}`}</span><br></br>
                <span>{expInfo.end === "" ? "" : `End Date: ${expInfo.end}`}</span><br></br>
            </section>
        </div>
    )
}