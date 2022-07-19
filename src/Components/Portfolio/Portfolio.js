import "../../index.css"
import "./Portfolio.scss"
import portfolio1 from "../../Images/portfolio1.png";
import portfolio2 from "../../Images/portfolio2.png";
import portfolio3 from "../../Images/portfolio3.png";

function Portfolio() {
    return(
        <main className="portfolio">
            <p className="portfolio__title">Portfolio</p>
                 <div className="portfolio__item portfolio-item">
                    <img className="portfolio-item__photo" src={portfolio1} />
                    <p className="portfolio-item__name">Online fashion store - Homepage</p>
                 </div>
                 <div className="portfolio__item portfolio-item">
                    <img className="portfolio-item__photo" src={portfolio2} />
                    <p className="portfolio-item__name">Reebok Store - Concept</p>
                 </div>
                 <div className="portfolio__item portfolio-item">
                    <img className="portfolio-item__photo" src={portfolio3} />
                    <p className="portfolio-item__name">Braun Landing Page - Concept</p>
                 </div>
        </main>
    )
}
export default Portfolio;