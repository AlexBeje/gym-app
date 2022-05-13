import { useState } from "react";
import { IoChevronBack } from "react-icons/io5";

function Header({ title }) {
  const [backButton, setBackButton] = useState(false);

  return (
    <div className="bg-dark-900 flex items-center justify-between p-6">
      {backButton && <IoChevronBack size="1.5rem" />}
      <h1 className="font-bold text-3xl text-center w-full">{title}</h1>
      {backButton && <div className="w-6" />}
    </div>
  );
}

export default Header;
