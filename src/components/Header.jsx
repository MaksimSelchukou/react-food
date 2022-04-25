import { Link } from "react-router-dom"

export const Header = () => {
    return (
        <nav>
            <div className="nav-wrapper">
                <Link to={'/'} className="brand-logo right">React Food</Link>
                <ul id="nav-mobile" className="left hide-on-med-and-down">
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/contact'}>Contact</Link></li>
                    <li><Link to={'/about'}>About</Link></li>
                </ul>
            </div>
        </nav>
    )
}