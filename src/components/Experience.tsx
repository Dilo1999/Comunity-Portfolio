import { useState, useEffect, useRef } from 'react'

interface ExperienceDetail {
  heading: string
  points: string[]
}

interface Experience {
  title: string
  company: string
  period: string
  technologies: string[]
  details: ExperienceDetail[]
}

const Experience = () => {
  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set([0]))
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set())
  const experienceRefs = useRef<(HTMLDivElement | null)[]>([])

  const experiences: Experience[] = [
    {
      title: 'Junior Software Developer',
      company: 'M Data Zone SA (Pvt) Ltd',
      period: 'Jul 2025 – Present',
      technologies: ['Next.js', 'Payload CMS', 'WordPress', 'PHP', 'JWT', 'REST API', 'JavaScript', 'TypeScript'],
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
      technologies: ['Laravel', 'React Native', 'PHP', 'JavaScript', 'MySQL', 'REST API'],
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

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observers = experienceRefs.current.map((ref, index) => {
      if (!ref) return null

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleItems((prev) => new Set([...prev, index]))
            }
          })
        },
        { threshold: 0.1 }
      )

      observer.observe(ref)
      return observer
    })

    return () => {
      observers.forEach((observer) => observer?.disconnect())
    }
  }, [])

  const toggleExpand = (index: number) => {
    setExpandedItems((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(index)) {
        newSet.delete(index)
      } else {
        newSet.add(index)
      }
      return newSet
    })
  }

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>

        {/* Experience Timeline */}
        <div className="experience-timeline">
          {experiences.map((experience, index) => {
              const isExpanded = expandedItems.has(index)
              const isVisible = visibleItems.has(index)

              return (
                <div
                  key={index}
                  ref={(el) => {
                    experienceRefs.current[index] = el
                  }}
                  className={`experience-card ${isVisible ? 'visible' : ''} ${isExpanded ? 'expanded' : ''}`}
                >
                  <div className="timeline-marker"></div>
                  <div className="experience-content">
                    <div className="experience-header">
                      <div className="experience-title-row">
                        <h3>{experience.title}</h3>
                        <button
                          onClick={() => toggleExpand(index)}
                          className="expand-toggle"
                          aria-label={isExpanded ? 'Collapse' : 'Expand'}
                        >
                          <span className={`expand-icon ${isExpanded ? 'expanded' : ''}`}>▼</span>
                        </button>
                      </div>
                      <span className="company">{experience.company}</span>
                      <span className="period">
                        <span className="period-icon">📅</span>
                        {experience.period}
                      </span>
                    </div>

                    {/* Technology Tags */}
                    <div className="experience-technologies">
                      {experience.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag">{tech}</span>
                      ))}
                    </div>

                    {/* Expandable Details */}
                    <div className={`experience-details ${isExpanded ? 'show' : ''}`}>
                      {experience.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="detail-section">
                          <h4>
                            <span className="detail-icon">▸</span>
                            {detail.heading}
                          </h4>
                          <ul>
                            {detail.points.map((point, pointIndex) => (
                              <li key={pointIndex}>
                                <span className="bullet-point"></span>
                                {point}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
        </div>
      </div>
    </section>
  )
}

export default Experience

