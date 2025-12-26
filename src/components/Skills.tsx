const Skills = () => {
  const skills = [
    'Technical Client Support',
    'API Troubleshooting',
    'Authentication & Security',
    'Next.js',
    'React.js',
    'Laravel',
    'WordPress',
    'WooCommerce',
    'React Native',
    'JavaScript',
    'TypeScript',
    'PHP',
    'Python',
    'Java',
    'MySQL',
    'Firebase',
    'Payload CMS',
    'JWT',
    'REST API',
    'Git',
    'GitHub',
    'Postman',
    'Client Communication',
    'Incident Management',
    'Documentation'
  ]

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-list">
          {skills.map((skill, index) => (
            <span key={index} className="skill-tag">{skill}</span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

