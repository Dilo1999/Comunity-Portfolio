const Experience = () => {
  const experiences = [
    {
      title: 'Junior Software Developer',
      company: 'M Data Zone SA (Pvt) Ltd',
      period: 'Jul 2025 – Present',
      details: [
        {
          heading: 'Client-Focused Web & Backend Systems Support',
          points: [
            'Provided ongoing technical support for production web platforms, diagnosing and resolving frontend, backend, and API-related issues',
            'Acted as a primary technical point of contact for internal stakeholders, ensuring timely resolution under tight deadlines',
            'Monitored system performance, authentication flows, and API integrations to ensure reliability and security'
          ]
        },
        {
          heading: 'Secure Web Platform Development (Next.js & Payload CMS)',
          points: [
            'Developed and maintained a fully responsive business website using Next.js with high performance and SEO optimisation',
            'Built secure backend communication using Payload CMS and custom APIs',
            'Implemented robust authentication mechanisms including JWT, refresh tokens, OTP-based authentication, and API tokens'
          ]
        },
        {
          heading: 'WordPress Backend & Plugin Development',
          points: [
            'Refactored complex backend logic into modular, reusable custom WordPress plugins using PHP',
            'Improved system maintainability, performance, and security in line with industry best practices'
          ]
        }
      ]
    },
    {
      title: 'Software Engineering Intern',
      company: 'Sri Lanka Export Development Board (EDB)',
      period: 'May 2024 – Nov 2025',
      details: [
        {
          heading: 'Enterprise Web Application Support (Laravel)',
          points: [
            'Supported and enhanced enterprise-level web applications, addressing user-reported issues and improving account management features',
            'Worked closely with internal users to understand operational requirements and translate them into technical solutions'
          ]
        },
        {
          heading: 'CRM & Mobile Application Support (React Native)',
          points: [
            'Developed and supported a React Native mobile application mirroring a CRM web system',
            'Ensured feature parity, stability, and smooth user experience across platforms'
          ]
        },
        {
          heading: 'Internal Systems Development',
          points: [
            'Designed and implemented secure backend functionalities including user access control and role-based permissions'
          ]
        }
      ]
    }
  ]

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="experience-list">
          {experiences.map((experience, index) => (
            <div key={index} className="experience-item">
              <div className="experience-header">
                <h3>{experience.title}</h3>
                <span className="company">{experience.company}</span>
                <span className="period">{experience.period}</span>
              </div>
              <div className="experience-details">
                {experience.details.map((detail, detailIndex) => (
                  <div key={detailIndex}>
                    <h4>{detail.heading}</h4>
                    <ul>
                      {detail.points.map((point, pointIndex) => (
                        <li key={pointIndex}>{point}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience

