import React from 'react'

import ServiceCard from './ServiceCard'

const Services = () => {

    const servicesSection = [
        {
            title: "Automatisation scripts",
            description: "You need to automaticaly delete your history from your browser on 4pm or add a task on your agenda more simple ? I'm here for you.",
            price: ["10.00", "+50.00"],
            tags: ["autamatisation", "script", "usefull", "cheap"],
            label: "Automatisation scripts on viktor_srhk's fiverr page.",
            href: "https://fiverr.com/viktor_srhk/gig/automatisation_scripts/"
        },
        {
            title: "Landing Page",
            description: "You need more visibility ? What's more better for a commerce or a society than a custom Landing Page to attract more people and finnaly get more place in the game !",
            price: ["75", "+1250"],
            tags: ["landing page", "custome", "more views", "better choice"],
            label: "Landing page on viktor_srhk's fiverr page.",
            href: "https://fiverr.com/viktor_srhk/gig/landing_page/"
        }
    ]

  return (
    <section id="services" className='grid grid-rows-2 grid-cols-1 items-center justify-center'>
        {servicesSection.map((section, index) => (
        <ServiceCard 
        key={index}
        name={section.title}
        description={section.description}
        price={section.price}
        tags={section.tags}
        fiverrHref={section.href}
        labelAnchorFiverrr={section.label}
        
        />
      ))}
    </section>
  )
}

export default Services