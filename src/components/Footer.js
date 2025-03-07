import { pageLinks, socialLinks } from "../utils/data"

const Footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        {pageLinks.map((link, i) => {
          return (
            <li key={i}>
              <a href={link.href} className="footer-link" rel="noreferrer">
                {link.text}
              </a>
            </li>
          )
        })}
      </ul>
      <ul className="footer-icons">
        {socialLinks.map((link, i) => {
          return (
            <li key={i}>
              <a
                href={link.href}
                target="_blank"
                className="footer-icon"
                rel="noreferrer"
              >
                <i className={link.icon}></i>
              </a>
            </li>
          )
        })}
      </ul>
      <p className="copyright">
        copyright &copy; Elite voyages tours company
        <span id="date"></span> all rights reserved
      </p>
    </footer>
  )
}

export default Footer
