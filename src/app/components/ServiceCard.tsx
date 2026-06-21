import React from "react";
import { FaDollarSign } from "react-icons/fa";

type ServiceCardProps = {
  name: string;
  description: string;
  price: string[];
  tags: string[];
  fiverrHref: string;
  labelAnchorFiverrr: string;
};

const ServiceCard: React.FC<ServiceCardProps> = ({
  name,
  description,
  price,
  tags,
  fiverrHref,
  labelAnchorFiverrr,
}) => {
  return (
    <article
      className="m-4 flex max-w-fit flex-col items-center justify-center space-y-6 justify-self-center rounded-2xl border border-stone-900/50 px-4 py-8 text-white backdrop-blur-sm sm:space-y-10 sm:px-6 sm:py-10"
      role="region"
      aria-label={`Service: ${name}`}
    >
      <h2 className="tracking-tigh text-2xl font-light sm:text-6xl">{name}</h2>
      <div className="grid grid-rows-1 items-center gap-6 text-sm opacity-80 sm:flex">
        <div className="flex items-center gap-2">
          <span>
            {price[0]}$-&nbsp;{price[1]}$
          </span>
        </div>
      </div>
      <div>
        {/* Tags */}
        <div className="flex flex-wrap gap-3">
          {tags.map((tag, i) => (
            <React.Fragment key={i}>
              <span className="text-[0.6rem] tracking-wide uppercase opacity-70 sm:text-xs">
                {tag}
              </span>

              {i !== tags.length - 1 && <div className="h-4 w-px bg-white/20"></div>}
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className="col-start-2 grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
        <p className="max-w-lg text-sm leading-relaxed opacity-70 sm:text-lg">{description}</p>
        <div className="mt-5 flex flex-row items-center justify-center space-x-6">
          <span className="hidden text-xl opacity-70 lg:block">More about&nbsp;</span>
          <a
            key={labelAnchorFiverrr}
            href={fiverrHref}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:bg-accent flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-lg backdrop-blur-sm transition-colors hover:text-(--color-card) sm:h-12 sm:w-12"
            aria-label={labelAnchorFiverrr}
          >
            <FaDollarSign />
          </a>
        </div>
      </div>
    </article>
  );
};

export default ServiceCard;
