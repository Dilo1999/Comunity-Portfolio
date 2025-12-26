import { downloadResume } from '../utils/helpers'
import profileImage from '../assets/abc.jpg'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-image-wrapper">
          <img src={profileImage} alt="Dilshan Senanayaka" className="hero-image" />
        </div>
        <h1 className="hero-name">Dilshan Senanayaka</h1>
        <p className="hero-title">Client Operations Associate | Technical Support | Digital Assets & FinTech  | Web Developer </p>
        <p className="hero-location">Colombo, Sri Lanka</p>
        <div className="hero-buttons">
          <a href="mailto:nimeshdilshan440@gmail.com" className="btn btn-primary">Hire me</a>
          <button onClick={downloadResume} className="btn btn-secondary">Download Resume</button>
        </div>
      </div>
    </section>
  )
}

export default Hero

