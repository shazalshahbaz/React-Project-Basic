import { MoveUpRight } from "lucide-react";
import AudienceCard from "./AudienceCard";
import { audienceData } from "./audienceData";

const Audience = () => {
  return (
    <section className="w-full bg-white py-20">
      <div className="mx-auto flex max-w-7xl flex-col gap-14 px-6 lg:flex-row lg:items-start">

        {/* Left Side */}
        <div className="lg:w-[30%]">

          {/* Badge */}
          <span className="rounded-full bg-black px-4 py-2 text-xs font-semibold uppercase tracking-[3px] text-white">
            Target Audience
          </span>

          {/* Heading */}
          <h2 className="mt-8 text-4xl font-bold leading-tight text-black md:text-5xl">
            Prospective <br />
            customer <br />
            segmentation
          </h2>

          {/* Description */}
          <p className="mt-6 text-gray-500 leading-8">
            Depending on customer satisfaction and access to banking products,
            potential target audience can be divided into three groups.
          </p>

          {/* Arrow */}
          <div className="mt-14">
            <button className="flex h-16 w-16 items-center justify-center rounded-full border border-black transition duration-300 hover:bg-black hover:text-white">
              <MoveUpRight size={30} />
            </button>
          </div>

        </div>

        {/* Right Side */}
        <div className="grid flex-1 grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">

          {audienceData.map((item) => (
            <AudienceCard
              key={item.id}
              image={item.image}
              number={item.number}
              title={item.title}
              status={item.status}
              color={item.color}
            />
          ))}

        </div>

      </div>
    </section>
  );
};

export default Audience;