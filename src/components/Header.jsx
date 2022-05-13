import { IoChevronBack } from "react-icons/io5";

function Header({ title }) {
  return (
    <div className="bg-dark-900 flex items-center justify-between p-6">
      <p>
        <IoChevronBack size="1.5rem" />
      </p>
      <h1 className="font-bold text-3xl">{title}</h1>
      <div className="w-6"/>
    </div>
  );
}

export default Header;
