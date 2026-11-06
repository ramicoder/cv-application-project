import "../index.css";
import "../styles/general.css";
import {useState} from "react";



export default function General({ generalInfo, setGeneralInfo, dataSubmitted, setDataSubmitted, setDisplayed }) {

    const [disabled, setDisabled] = useState(false);
    return (
        <>
            <form className="general-form" onSubmit={(e) => {
                e.preventDefault();
                setDisabled(true);
                setDataSubmitted(dataSubmitted + 1);
                setDisplayed(false);
            }}>
                <fieldset>
                    <legend>General Information</legend>
                    <label htmlFor="name">Name</label>
                    <input value={generalInfo.name} id="name" minLength={2} maxLength={30}
                           onChange={(e) =>
                               setGeneralInfo({
                                   ...generalInfo,
                                   name: e.target.value
                               })
                           }
                           disabled={disabled}
                           type="text" aria-labelledby="name" placeholder="John Doe" required/>
                    <label htmlFor="email">Email</label>
                    <input value={generalInfo.email} id="email" aria-labelledby="email"
                           onChange={(e) =>
                               setGeneralInfo({
                                   ...generalInfo,
                                   email: e.target.value
                               })
                           }
                           disabled={disabled}
                           type="email" placeholder="johnDoe@gmail.com" />
                    <label htmlFor="phone">Phone Number</label>
                    <input value={generalInfo.phone} id="phone" aria-labelledby="Phone Number"
                           onChange={(e) =>
                               setGeneralInfo({
                                   ...generalInfo,
                                   phone: e.target.value
                               })
                           }
                           disabled={disabled}
                           type="tel" placeholder="00123456789" minLength={10} maxLength={15} />
                </fieldset>
                <button type="submit"
                disabled={disabled} >Submit</button>
                <button type="button" onClick={() => {
                    setDisabled(false);
                    setDataSubmitted(dataSubmitted - 1);
                    setDisplayed(false);
                }} >Edit</button>
            </form>
        </>
    )
}