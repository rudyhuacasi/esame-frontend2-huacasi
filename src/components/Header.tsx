import { NavLink } from "react-router";
import "../App.css";


const Header = () => {
  return (
    <>
        <header className="header">
        <div>
          <div className="header__brand">Movie App</div>
        </div>
        <nav className="header__nav">
          <NavLink to="/" >Home / Elenco</NavLink>
        </nav>
      </header>
    </>
  )
}

export default Header