import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full mt-10 py-6 border-t text-center text-gray-500 text-sm">
      <p>&copy; {new Date().getFullYear()} StayFinder. All rights reserved.</p>

      <div className="flex justify-center gap-6 mt-3">
        <span className="cursor-pointer hover:text-blue-600">Privacy Policy</span>
        <span className="cursor-pointer hover:text-blue-600">Terms of Service</span>
        <span className="cursor-pointer hover:text-blue-600">Support</span>
      </div>
    </footer>
  );
};

export default Footer;
