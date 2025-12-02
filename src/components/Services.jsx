import { FaServer, FaPalette, FaChartLine, FaTools } from 'react-icons/fa';
import { MdWeb, MdSpeed, MdSecurity } from 'react-icons/md';
import { TbDeviceMobileCode } from 'react-icons/tb';

const Services = () => {
  const services = [
    {
      icon: <MdWeb className="service-icon" />,
      title: 'Web Development',
      description: 'Building responsive and interactive websites using modern web technologies like React, Next.js, and modern CSS frameworks.'
    },
    {
      icon: <TbDeviceMobileCode className="service-icon" />,
      title: 'Mobile-First Design',
      description: 'Creating websites that work seamlessly across all devices with a focus on mobile users first.'
    },
    {
      icon: <FaServer className="service-icon" />,
      title: 'Backend Development',
      description: 'Developing robust server-side applications with Node.js, Express, and various databases.'
    },
    {
      icon: <FaPalette className="service-icon" />,
      title: 'UI/UX Design',
      description: 'Designing intuitive and beautiful user interfaces that enhance user experience and engagement.'
    },
    {
      icon: <MdSpeed className="service-icon" />,
      title: 'Performance Optimization',
      description: 'Improving website speed and performance for better user experience and SEO rankings.'
    },
    {
      icon: <FaChartLine className="service-icon" />,
      title: 'SEO Optimization',
      description: 'Implementing best practices to improve your website\'s visibility and ranking on search engines.'
    },
    {
      icon: <FaTools className="service-icon" />,
      title: 'Maintenance & Support',
      description: 'Providing ongoing support and maintenance to keep your website up-to-date and secure.'
    },
    {
      icon: <MdSecurity className="service-icon" />,
      title: 'Security Implementation',
      description: 'Ensuring your website is secure from vulnerabilities with best security practices.'
    }
  ];

  return (
    <section id="services" className="services-section">
      <div className="services-container">
        <div className="section-header">
          <h2>My <span>Services</span></h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">I provide a range of professional services to help your business grow online.</p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon-container">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services