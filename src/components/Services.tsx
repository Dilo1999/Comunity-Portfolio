const Services = () => {
  const services = [
    {
      title: 'Technical Client Support',
      description: 'Providing expert technical support for production web platforms, diagnosing and resolving frontend, backend, and API-related issues. Ensuring timely resolution under tight deadlines with SLA-driven support.'
    },
    {
      title: 'Web & Backend Development',
      description: 'Developing and maintaining secure, responsive web applications using Next.js, React, and Laravel. Building robust authentication systems, APIs, and ensuring high availability for 24/7 operations.'
    },
    {
      title: 'API Integration & Troubleshooting',
      description: 'Expert in API troubleshooting, integration support, and ensuring seamless communication between systems. Working with REST APIs, authentication mechanisms, and distributed systems.'
    },
    {
      title: 'Security & Authentication',
      description: 'Implementing robust security measures including JWT (bearer & self-signed), refresh tokens, OTP-based authentication, federated tokens, and API tokens for secure web platforms.'
    }
  ]

  return (
    <section id="services" className="services">
      <div className="container">
        <h2 className="section-title">Services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

