import React from "react";

import ServiceCard from "./ServiceCard";

const Services = () => {
  const servicesSection = [
    {
      title: "Automation Scripts",
      description:
        "A custom script that removes repetitive manual work, such as organizing files, processing data, or connecting everyday tools. You receive the script, setup instructions, and a tested example for your workflow.",
      priceLabel: "Starting at $10",
      tags: ["automation", "scripting", "productivity", "custom workflow"],
      label: "View service: Automation Scripts",
      href: "https://fiverr.com/viktor_srhk/gig/automatisation_scripts/",
    },
    {
      title: "Landing Page",
      description:
        "A responsive custom landing page that presents your business, product, or event clearly. You receive the page, mobile-friendly styling, and deployment-ready source code.",
      priceLabel: "Starting at $75",
      tags: ["landing page", "responsive", "custom design", "deployment ready"],
      label: "View service: Landing Page",
      href: "https://fiverr.com/viktor_srhk/gig/landing_page/",
    },
  ];

  return (
    <section
      id="services"
      className="grid grid-cols-1 gap-8 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-2"
    >
      {servicesSection.map(section => (
        <ServiceCard
          key={section.title}
          name={section.title}
          description={section.description}
          priceLabel={section.priceLabel}
          tags={section.tags}
          fiverrHref={section.href}
          serviceLabel={section.label}
        />
      ))}
    </section>
  );
};

export default Services;
