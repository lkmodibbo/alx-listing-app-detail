import { PropertyProps } from "@/interfaces";
import Image from "next/image";

const PropertyCard = ({ name, price, rating, image }: PropertyProps) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition">
      <div className="relative w-full h-48">
        <Image src={image} alt={name} fill className="object-cover" />
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold">{name}</h3>
        
        <p className="text-sm text-gray-500 mb-2">⭐ {rating}</p>

        <p className="text-xl font-bold">₦{price.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default PropertyCard;
