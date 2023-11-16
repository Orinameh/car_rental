import car from "@/public/assets/car.png";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { CiCalendarDate, CiLocationOn } from "react-icons/ci";
import { FaCaretDown } from "react-icons/fa";
import { FaCarRear } from "react-icons/fa6";
import { LuFuel } from "react-icons/lu";
import { MdOutlineDateRange } from "react-icons/md";
import { getListCars, getPopularCars } from "../data";
import { formatAmount } from "../util";
import { Button } from "./Button";

export const Explore = async ({ page }: { page: number }) => {
  const { makeList, pagination } = await getPopularCars();
  const { result } = await getListCars({ page });
  return (
    <div className="bg-ash pt-48 pb-12">
      <Image
        width={700}
        height={700}
        className="absolute top-[16rem] -left-8"
        src={car}
        alt="car"
        priority
        style={{ objectFit: "contain", width: "700px", height: "700px" }}
      />

      {/* Search bar */}
      <div className="bg-white shadow-custom flex justify-between items-center mx-96 mt-16 rounded py-4 px-16">
        <div className="flex items-center gap-2">
          <CiLocationOn />
          <p className="text-sm">Location</p>
          <FaCaretDown />
        </div>
        <div className="flex items-center gap-2">
          <CiCalendarDate />
          <p className="text-sm">Pick Up Date</p>
          <FaCaretDown />
        </div>
        <div className="flex items-center gap-2">
          <MdOutlineDateRange />
          <p className="text-sm">Return Date</p>
          <FaCaretDown />
        </div>
        <Button
          text="Search"
          isPrimary
          extraClass="w-20 text-center text-white font-bold"
        />
      </div>

      {/* Best services */}
      <div className="flex justify-center items-center flex-col my-20">
        <p className="font-light">Best Services</p>
        <h1 className="font-semibold text-2xl text-center my-4">
          Explore our Top Deal <br />
          From Top Rated Dealers
        </h1>

        <Suspense fallback={<p>Loading...</p>}>
          <div className="flex items-center gap-6 mt-4">
            {makeList
              ?.slice(0, 5)
              .map((make: { [key: string]: any }, i: number) => (
                <Button
                  text={make.name}
                  isPrimary={i === 0}
                  key={make.id}
                  icon={make.imageUrl}
                />
              ))}

            <Button
              text={`Explore ${pagination.total - 5}+`}
              isPrimary={false}
            />
          </div>
        </Suspense>
      </div>

      {/* List of Cars */}
      <Suspense fallback={<p>Loading...</p>}>
        <div className="flex flex-wrap items-center justify-start mx-32 gap-12">
          {result?.map((car: {[key: string]: any}) => (
            <Link
              href={`/car/${car.id}`}
              key={car.id}
              className="p-2 rounded bg-white"
            >
              {/*image */}
              <div className="flex items-center p-4 justify-center bg-imgBackground rounded">
                <Image
                  className="rounded"
                  src={car.imageUrl}
                  alt="car"
                  priority
                  width={200}
                  height={200}
                  style={{
                    objectFit: "cover",
                    width: "200px",
                    height: "200px",
                  }}
                />
              </div>
              <span className="mt-4 font-light text-xs flex items-center gap-2">
                <FaCarRear /> {car.mileage.toLocaleString()} {car.mileageUnit}
              </span>
              <p className="text-sm font-semibold my-2">
                {car.title} {car.year}
              </p>
              <div className="flex justify-between items-center">
                <span className="flex text-sm items-center gap-2">
                  <LuFuel /> {car.fuelType}
                </span>
                <div className="flex flex-col gap-1 items-center">
                  <span className="flex text-xs items-center gap-2">
                    {formatAmount(car.marketplacePrice)}
                  </span>

                  <span className="flex text-xs items-center gap-2 line-through text-grey">
                    {formatAmount(car.marketplaceOldPrice)}
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-center my-2">
                <p className="font-light text-xs">
                  Available: {car.sold ? "No" : "Yes"}
                </p>
                <Button text="Buy now" isPrimary />
              </div>
            </Link>
          ))}
        </div>
      </Suspense>

      <div className="flex justify-center items-center gap-4 mt-16">
        <Link
          className={`bg-white outline-none text-xs py-2 px-4 rounded flex items-center gap-2 ${
            page <= 1 ? "pointer-events-none opacity-60 cursor-not-allowed" : ""
          }`}
          href={`/?page=${+page - 1}`}
        >
          Previous
        </Link>
        <Link
          className="bg-white outline-none text-xs py-2 px-4 rounded flex items-center gap-2"
          href={`/?page=${+page + 1}`}
        >
          Next
        </Link>
      </div>
    </div>
  );
};
