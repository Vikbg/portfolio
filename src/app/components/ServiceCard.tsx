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
    <div
      className="
      text-white px-6 py-10 space-y-10 
      rounded-2xl backdrop-blur-sm flex justify-center items-center justify-self-center flex-col border border-stone-900/50 max-w-fit m-4"
    >
      <h2 className="sm:text-6xl text-2xl font-light tracking-tigh">{name}</h2>
      <div className="grid grid-rows-1 sm:flex items-center gap-6 text-sm opacity-80">
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
              <span className="sm:text-xs text-[0.6rem] uppercase tracking-wide opacity-70">
                {tag}
              </span>

              {i !== tags.length - 1 && (
                <div className="w-px h-4 bg-white/20"></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start col-start-2">
        <p className="opacity-70 leading-relaxed text-sm sm:text-lg max-w-lg">
          {description}
        </p>
        <div className="mt-5 flex flex-row space-x-6 justify-center items-center">
            <span className="hidden lg:block text-xl opacity-70">More about&nbsp;</span>
          <a
            key={labelAnchorFiverrr}
            href={fiverrHref}
            target="_blank"
            rel="noopener noreferrer"
            className="sm:w-12 sm:h-12 w-10 h-10 rounded-lg flex items-center justify-center bg-white/10 backdrop-blur-sm hover:bg-accent hover:text-(--color-card) transition-colors text-lg"
            aria-label={labelAnchorFiverrr}
          >
            
            <FaDollarSign />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
