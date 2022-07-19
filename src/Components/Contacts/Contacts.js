import "../../index.css"
import "./Contacts.scss"
import sendmessagebutton from "../../Images/sendmessagebutton.png"
import inlogo from "../../Images/in-logo.png"
import instlogo from "../../Images/inst-logo.png"
import behancelogo from "../../Images/behance-logo.png"
import dribblelogo from "../../Images/dribble-logo.png"

function Contacts() {
    return (
        <main className="container contacts">
            <p className="contacts__title">Contacts</p>
            <p className="contacts__about">Want to know more or just chat?<br />
                You are welcome!</p>
            <img className="contacts__button" src={sendmessagebutton} />
            <div className="contacts__icon">
                <img src={inlogo} alt=" " />
                <img src={instlogo} alt=" " />
                <img src={behancelogo} alt=" " />
                <img src={dribblelogo} alt=" " />
            </div>
            <p className="contacts__footer">Like me on<br />
                LinkedIn, Instagram, Behance, Dribble</p>
        </main>
    )
}
export default Contacts;