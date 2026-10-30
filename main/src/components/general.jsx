import "../styles/general.css";



export default function General() {
    return (
        <>
            <form className="general-form">
                <fieldset>
                    <legend>General Information</legend>
                    <label for="name"></label>
                    <input id="name" minLength={3} maxLength={30} type="text" aria-labeledby="name" placeholder="John Doe" />
                    <label for="email"></label>
                    <input id="email" aria-labeledby="email" type="email" placeholder="johnDoe@gmail.com" />
                    <label for="phone"></label>
                    <input id="phone" aria-labelledby="Phone Number" type="tel" placeholder="00123456789" minLength={10} maxLength={15} />
                </fieldset>
            </form>
        </>
    )
}