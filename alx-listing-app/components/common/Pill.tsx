import React from "react";

interface PillProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
}

const Pill: React.FC<PillProps> = ({ label, active, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full border text-sm font-medium transition
        ${active ? "bg-black text-white" : "bg-white text-black border-gray-300"}
      `}
    >
      {label}
    </button>
  );
};

export default Pill;
