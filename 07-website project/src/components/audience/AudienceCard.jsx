import { ArrowRight } from "lucide-react";

const AudienceCard = ({ image, number, title, status, color }) => {
  return (
    <div className="group relative h-[520px] overflow-hidden rounded-[30px] cursor-pointer">
      {/* Background Image */}
      <img
        src={image}
        alt={status}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/45"></div>

      {/* Number Badge */}
      <div className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white text-sm font-bold text-black shadow-lg">
        {number}
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6">
        <p className="mb-6 text-lg font-medium leading-8 text-white">
          {title}
        </p>

        {/* Status Button */}
        <button
          className={`${color} flex w-full items-center justify-between rounded-full px-5 py-3 text-sm font-semibold transition-all duration-300 group-hover:scale-105`}
        >
          <span>{status}</span>

          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-black">
            <ArrowRight size={18} />
          </span>
        </button>
      </div>
    </div>
  );
};

export default AudienceCard;