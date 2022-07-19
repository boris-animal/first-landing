import "../../index.css"
import "./Skills.scss"
import ps from "../../Images/ps-logo.png"
import ai from "../../Images/Ai-logo.png"
import ae from "../../Images/Ae-logo.png"
import figma from "../../Images/Figma-logo.png"
import blackstar from "../../Images/blackstar.png"
import star from "../../Images/Star.png"

function Skills() {
    return(
        <main className="container skills">
            <p className="skills__title">Skills</p>
            <p className="skills__about">I work in such programs as</p>
            <div className="skills__items skills-items">
                <div className="skills-items">
                    <img className="skills-items__logo" src={ps} />
                    <p className="skills-items__name">
                        Adobe<br />
                    Photoshop
                    </p>
                    <div className="skills-items__star">
                        <img src={blackstar} />
                        <img src={blackstar} />
                        <img src={blackstar} />
                        <img src={blackstar} />
                        <img src={star} />
                    </div>
                </div>
                <div className="skills-items">
                    <img className="skills-items__logo" src={ai} />
                    <p className="skills-items__name">
                        Adobe<br />
                        Illustrator
                    </p>
                    <div className="skills-items__star">
                        <img src={blackstar} />
                        <img src={blackstar} />
                        <img src={blackstar} />
                        <img src={star} />
                        <img src={star} />
                    </div>
                </div>
                <div className="skills-items">
                    <img className="skills-items__logo" src={ae} />
                    <p className="skills-items__name">
                        Adobe<br />
                    After Effects
                    </p>
                    <div className="skills-item__star">
                        <img src={blackstar} />
                        <img src={blackstar} />
                        <img src={blackstar} />
                        <img src={blackstar} />
                        <img src={star} />
                    </div>
                </div>
                <div className="skills-items">
                    <img className="skills-items__logo" src={figma} />
                    <p className="skills-items__name">
                        Figma<br />
                        &nbsp;
                    </p>
                    <div className="skills-items__star">
                        <img src={blackstar} />
                        <img src={blackstar} />
                        <img src={blackstar} />
                        <img src={blackstar} />
                        <img src={star} alt=""/>
                    </div>
                </div>
            </div>
        </main>
    )
}
export default Skills;