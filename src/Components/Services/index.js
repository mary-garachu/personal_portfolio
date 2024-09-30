import React from 'react';
import './style.scss';

const servicesData = [
  {
    subtitle: 'Web Development',
    title: 'Web Application',
    description: 'Building responsive and efficient web applications tailored to your business needs.',
    image: '/Assets/logo/developer.png' 
  },
  {
    subtitle: 'Application Maintenance',
    title: 'Technical Support',
    description: 'Providing technical assistance and troubleshooting to ensure the smooth operation of software, systems, and networks.',
    image: '/Assets/logo/customer-service.png'
  },
  {
    subtitle: 'UI/UX Design',
    title: 'Design Services',
    description: 'Crafting intuitive and user-friendly interfaces with a focus on user experience.',
    image: '/Assets/logo/developer.png' 
  }
];

const MyServices = () => {
  return (
    < div className='services'>
      <div>
        <h2 className='services-header'> Services </h2>
      </div>
      <div className="my-services">
        {servicesData.map((service, index) => (
          <div key={index} className="service-item">
            <h4>{service.subtitle}</h4>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
            <div className="service-image">
              <img src={service.image} alt={service.title} />
            </div>
          </div>
        ))}
      </div>
    </ div>
  );
};

export default MyServices;
