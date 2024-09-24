import React from 'react';
import './style.scss';

const servicesData = [
  {
    subtitle: 'Web Development',
    title: 'Web Application',
    description: 'Building responsive and efficient web applications tailored to your business needs.',
    image: 'https://via.placeholder.com/150' // Dummy image URL
  },
  {
    subtitle: 'Mobile Development',
    title: 'Mobile Application',
    description: 'Creating native and cross-platform mobile apps with engaging user experiences.',
    image: 'https://via.placeholder.com/150' // Dummy image URL
  },
  {
    subtitle: 'UI/UX Design',
    title: 'Design Services',
    description: 'Crafting intuitive and user-friendly interfaces with a focus on user experience.',
    image: 'https://via.placeholder.com/150' // Dummy image URL
  }
];

const MyServices = () => {
  return (
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
  );
};

export default MyServices;
