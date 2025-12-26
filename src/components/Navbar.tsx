import { scrollToSection } from '../utils/helpers'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">Dilshan Senanayaka</div>
        <div className="nav-links">
          <button onClick={() => scrollToSection('services')}>Services</button>
          <button onClick={() => scrollToSection('skills')}>Skills</button>
          <button onClick={() => scrollToSection('experience')}>Experience</button>
          <button onClick={() => scrollToSection('contact')}>Contact</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

