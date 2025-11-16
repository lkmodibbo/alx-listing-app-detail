import { FILTERS } from "@/constants/filters";
import { PROPERTYLISTINGSAMPLE } from "@/constants/index";
import Pill from "@/components/common/Pill";
import PropertyCard from "@/components/common/PropertyCard";
import { useState } from "react";

export default function Home() {
  const [activeFilter, setActiveFilter] = useState<string>("");

  return (
    <div className="px-6 py-10">

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Filter Properties</h2>

        <div className="flex flex-wrap gap-3">
          {FILTERS.map((filter) => (
            <Pill
              key={filter}
              label={filter}
              active={activeFilter === filter}
              onClick={() => setActiveFilter(filter)}
            />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Popular Listings</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {PROPERTYLISTINGSAMPLE.map((property, index) => (
            <PropertyCard key={index} {...property} />
          ))}
        </div>
      </section>
    </div>
  );
}
