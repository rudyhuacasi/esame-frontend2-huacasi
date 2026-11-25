import "../App.css";


const Header = () => {
  return (
    <>
        <header className="header">
        <div>
          <div className="header__brand">Movie App</div>
        </div>
        <nav className="header__nav">
          <a href="index.html">Home / Elenco</a>
        </nav>
      </header>
    </>
  )
}

export default Header