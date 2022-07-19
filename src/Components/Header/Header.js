import "../../index.css"
import "./Header.scss"

function Header() {
    return(
        <header className="container header">
            <nav className="header__nav header-nav">
                <a href="#" className="header-nav__item">Home</a>
                <a href="#" className="header-nav__item">About me</a>
                <a href="#" className="header-nav__item">Skills</a>
                <a href="#" className="header-nav__item">Portfolio</a>
                <a href="#" className="header-nav__item">Contact</a>
            </nav>
        </header>
    )
}
export default Header;