import React from 'react';

const services = [
  {
    title: 'SEO Services',
    icon: 'bi-search',
    description: 'This is a wider card with supporting text below as a natural content.',
  },
  {
    title: 'Social Content',
    icon: 'bi-chat-square-dots',
    description: 'This is a wider card with supporting text below as a natural content.',
  },
  {
    title: 'Creative ads',
    icon: 'bi-badge-ad',
    description: 'This is a wider card with supporting text below as a natural content.',
  },
  {
    title: 'Brand Identity',
    icon: 'bi-card-checklist',
    description: 'This is a wider card with supporting text below as a natural content.',
  },
  {
    title: 'Budget & Marketing',
    icon: 'bi-wallet2',
    description: 'This is a wider card with supporting text below as a natural content.',
  },
  {
    title: 'Optimize conversions',
    icon: 'bi-funnel',
    description: 'This is a wider card with supporting text below as a natural content.',
  },
];

const Services = () => {
  return (
    <div id="services" className="section relative pt-20 pb-8 md:pt-16 md:pb-0 bg-white">
      <div className="container xl:max-w-6xl mx-auto px-4">
        <header className="text-center mx-auto mb-12 lg:px-20">
          <h2 className="text-2xl leading-normal mb-2 font-bold text-black">What We Do</h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 100 60"
            style={{ margin: '0 auto', height: '35px' }}
            xmlSpace="preserve"
          >
            <circle
              cx="50.1"
              cy="30.4"
              r="5"
              className="stroke-primary"
              style={{ fill: 'transparent', strokeWidth: 2, strokeMiterlimit: 10 }}
            ></circle>
            <line
              x1="55.1"
              y1="30.4"
              x2="100"
              y2="30.4"
              className="stroke-primary"
              style={{ strokeWidth: 2, strokeMiterlimit: 10 }}
            ></line>
            <line
              x1="45.1"
              y1="30.4"
              x2="0"
              y2="30.4"
              className="stroke-primary"
              style={{ strokeWidth: 2, strokeMiterlimit: 10 }}
            ></line>
          </svg>
          <p className="text-gray-500 leading-relaxed font-light text-xl mx-auto pb-2">
            Save time managing advertising & Content for your business.
          </p>
        </header>
        <div className="flex flex-wrap flex-row -mx-4 text-center">
          {services.map((service, index) => (
            <div
              key={index}
              className={`flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp ${
                index % 2 === 1 ? 'data-wow-delay=".1s"' : 'data-wow-delay=".3s"'
              }`}
              style={{ visibility: 'visible', animationDuration: '1s', animationName: 'fadeInUp' }}
            >
              <div className="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                <div className="inline-block text-gray-900 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" className={`bi ${service.icon}`} viewBox="0 0 16 16">
                    {/* Icon path here */}
                  </svg>
                </div>
                <h3 className="text-lg leading-normal mb-2 font-semibold text-black">{service.title}</h3>
                <p className="text-gray-500">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
