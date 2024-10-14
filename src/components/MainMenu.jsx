import { useState } from "react";

export default function MainMenu() {
  const [isOpen, setIsOpen] = useState(false);


  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative">
      {/* Sidebar Container */}
      <div
      className={`fixed top-0 left-0 h-full bg-black text-white z-40
      ${isOpen ? "w-64" : "w-16"} transition-all duration-300 ease-in-out opacity-100`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Menu Button */}
      <div className="cursor-pointer flex items-center justify-center p-4 ">
        <i className="fas fa-bars"></i>
      </div>
        <div className="flex flex-col gap-4 mt-4">
          <MenuItem
            icon={"/assets/images/icons/Search.png"}
            label="Search"
            isOpen={isOpen}
          />
          <MenuItem
            icon={"/assets/images/icons/Home.png"}
            label="Home"
            isOpen={isOpen}
          />
          <MenuItem
            icon={"/assets/images/icons/Film.png"}
            label="TV Shows"
            isOpen={isOpen}
          />
          <MenuItem
            icon={"/assets/images/icons/List.png"}
            label="Movies"
            isOpen={isOpen}
          />
          <MenuItem
            icon={"/assets/images/icons/Mask.png"}
            label="Genres"
            isOpen={isOpen}
          />
          <MenuItem
            icon={"/assets/images/icons/Sync.png"}
            label="Watch Later"
            isOpen={isOpen}
          />
        </div>

        <div className="absolute bottom-10 w-full">
        <MenuItem label="Language" isOpen={isOpen} />
        <MenuItem label="Get Help" isOpen={isOpen} />
        <MenuItem label="Exit" isOpen={isOpen} />
        </div>
      </div>
    </div>
  );
}

const MenuItem = ({ icon, label, isOpen }) => (
  <div className="flex items-center gap-2 p-4 hover:bg-gray-700 cursor-pointer rounded-full">
    <img src={icon} className="object-cover w-25 h-25" />
    <span
      className={`transition-all duration-800 ease-in-out ${
        isOpen ? "opacity-100" : "opacity-0 w-0"
      }`}
    >
      {label}
    </span>
  </div>
);
 