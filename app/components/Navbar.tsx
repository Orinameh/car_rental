import { IoIosSearch } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="bg-dark px-14 py-5 flex justify-between items-center">
      <p className="text-primary">Automobile</p>
      <ul className="flex gap-x-12">
        <li className="text-lightText text-sm">Home</li>
        <li className="text-lightText text-sm">About</li>
        <li className="text-lightText text-sm">Cars</li>
        <li className="text-lightText text-sm">Pricing</li>
        <li className="text-lightText text-sm">Contact</li>
      </ul>
      <div className="flex gap-2">
        <span className="bg-white inline-flex w-8 h-8 rounded-sm items-center justify-center">
          <IoIosSearch size={24} />
        </span>
        <button className="bg-primary text-lightText outline-none text-xs w-20 rounded-sm">
          Log in
        </button>
      </div>
    </div>
  );
};

export default Navbar;
