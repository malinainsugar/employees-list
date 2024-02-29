import "./Header.css";
import logo from "../../assets/logo.svg";

const Header = ({ toggleTheme, isDarkTheme }) => {
    return (
    <header className="header-section">
        <img className="logo" src={logo} width="101" alt="Логотип компании 66bit"/>
        <div className="header-contacts">
            <a className="contact-tel" href="tel:+73432908476">+7 343 290 84 76</a>
            <a className="contact-email" href="mailto:info@66bit.ru">info@66bit.ru</a>
        </div>
        <div className="theme-switch">
            <input
                className="theme-switch-checkbox"
                type="checkbox"
                id="theme-switch"
                checked={isDarkTheme}
                onChange={toggleTheme}
            />
            <label className="theme-switch-label" for="theme-switch"></label>
        </div>
    </header>
  );
}

export default Header;

