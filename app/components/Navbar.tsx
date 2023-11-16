import { IoIosSearch } from "react-icons/io";
import { Button } from "./Button";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-dark px-14 py-5 flex justify-between items-center fixed w-full">
      <Link href="/" className="text-primary">Automobile</Link>
      <ul className="flex gap-x-12 list-none">
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
        <Button text="Log in" />
      </div>
    </nav>
  );
};

export default Navbar;
