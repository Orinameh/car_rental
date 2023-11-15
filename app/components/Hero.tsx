import {
  FaFacebookF,
  FaInstagram,
  FaApple,
  FaGooglePlay,
} from "react-icons/fa";
import { TiSocialDribbble } from "react-icons/ti";

const data = [
  { value: 222, unit: "KM/H", title: "TOP SPEED" },
  { value: 92, unit: "C", title: "ENGINE TEMP" },
  { value: 65, unit: "HP", title: "POWER CAR" },
];

const borderType: {[key: number]: string} = {
    0: "border-l-0 border-t-0",
    1: "border-r-0 border-b-0",
    2: "border-l-0 border-b-0"
}
const Hero = () => {
  return (
    <div className="bg-dark">
      <div className="flex justify-between py-8 px-16">
        <div className="flex flex-col gap-4">
          <span className="rounded-full w-8 h-8 border border-white inline-flex items-center justify-center">
            <FaFacebookF color="white" />
          </span>
          <span className="rounded-full w-8 h-8 border border-white inline-flex items-center justify-center">
            <FaInstagram color="white" />
          </span>
          <span className="rounded-full w-8 h-8 border border-white inline-flex items-center justify-center">
            <TiSocialDribbble color="white" />
          </span>
        </div>

        <h1 className="text-lightText text-6xl mr-28 text-center leading-[5rem] mt-4">
          Fast And Easy Way to Rent <br />
          <span className="text-primary">A Branded</span> Car
        </h1>
      </div>

      <div className="mb-8 text-center">
        <p className="text-lightText ml-80 leading-7">
          Discover RentalX car rental options in USA with rent a car <br />
          Select from a range of car options and local specials
        </p>
      </div>

      <div className="flex gap-4 justify-center items-center">
        <button className="bg-lightGrey flex items-center rounded w-32 ml-80 px-2">
          <FaApple size={24} />
          <div className="flex flex-col gap-0.5 py-1 px-0.5">
            <span className="text-[10px]">Download on the</span>
            <span className="text-sm">Apple Store</span>
          </div>
        </button>

        <button className="bg-lightGrey flex items-center rounded w-32 px-1">
          <FaGooglePlay size={24} />
          <div className="flex flex-col gap-0.5 py-1 px-0.5">
            <span className="text-[10px]">Download on the</span>
            <span className="text-sm">Google Play</span>
          </div>
        </button>
      </div>

      <div className="flex justify-end items-center gap-8 py-24 mr-52">
        {data.map((item, i) => (
          <span
            key={item.title}
            className="border-2 relative border-white w-20 h-20 rounded-full inline-flex gap-1 items-center flex-col justify-center"
          >
            <span className={`absolute w-20 h-20 rounded-full border-2 ${borderType[i]} border-primary`} />
            <p className="text-white text-xs">{item.value}</p>
            <small className="text-white text-[8px]">{item.unit}</small>
            <p className="text-white text-[10px]">{item.title}</p>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Hero;
