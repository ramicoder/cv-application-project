import "../styles/general.css";



export default function General({ generalInfo, setGeneralInfo }) {
    return (
        <>
            <form className="general-form">
                <fieldset>
                    <legend>General Information</legend>
                    <label htmlFor="name">Name</label>
                    <input value={generalInfo.name} id="name" minLength={3} maxLength={30}
                           onChange={(e) =>
                               setGeneralInfo({
                                   ...generalInfo,
                                   name: e.target.value
                               })
                           } type="text" aria-labelledby="name" placeholder="John Doe" />
                    <label htmlFor="email">Email</label>
                    <input value={generalInfo.email} id="email" aria-labelledby="email"
                           onChange={(e) =>
                               setGeneralInfo({
                                   ...generalInfo,
                                   email: e.target.value
                               })
                           }
                           type="email" placeholder="johnDoe@gmail.com" />
                    <label htmlFor="phone">Phone Number</label>
                    <input value={generalInfo.phone} id="phone" aria-labelledby="Phone Number"
                           onChange={(e) =>
                               setGeneralInfo({
                                   ...generalInfo,
                                   phone: e.target.value
                               })
                           }
                           type="tel" placeholder="00123456789" minLength={10} maxLength={15} />
                </fieldset>
            </form>
        </>
    )
}