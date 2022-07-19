import "../../index.css"
import "./Hero.scss"
import face from "../../Images/BSPP2266.png"

function Hero() {
    return(
        <main className="container hero">
            <div className="hero__main hero-main">
                <p className="hero-main__name">Denis <br /> Novik</p>
                <p className="hero-main__about">UX &#124; UI designer <br /> 24 years old, Minsk</p>
                <p className="hero-main__langs">RU &#124; ENG</p>
            </div>
            <div className="hero__photo">
                <img src={face} />
            </div>
        </main>
    )
}
export default Hero;