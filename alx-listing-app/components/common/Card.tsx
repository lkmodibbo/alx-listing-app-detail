import React from "react";
import Button from "./Button";

interface CardProps {
    title: string;
    description: string;
    imageUrl: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl }) => {
    return (
        <div className="border rounded-lg shadow-md p-4 w-full max-w-sm">
            <img src={imageUrl} alt={title} className="rounded-md mb-3" />
            <h2 className="text-lg font-semibold">{title}</h2>
            <p className="text-gray-600 mb-4">{description}</p>
            <Button label="Book Now"/>
        </div>
    )
}
export default Card