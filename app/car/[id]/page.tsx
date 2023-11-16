import { getCar } from "@/app/data";
import Image from "next/image";
import { CiLocationOn } from "react-icons/ci";
import { LuFuel } from "react-icons/lu";
import { PiEngine } from "react-icons/pi";
import { FaCarRear } from "react-icons/fa6";
import Link from "next/link";
import { formatAmount } from "@/app/util";
import { IoChevronBack } from "react-icons/io5";

const CarItem = async ({ params }: { params: { id: string } }) => {
  const result = await getCar(params.id);
  return (
    <div className="pt-32 px-48 flex justify-between">
      <div>
        <Link href="/" passHref className="flex gap-2 items-center">
          <IoChevronBack /> Back
        </Link>
        <div className="p-2 mt-4 bg-imgBackground w-[400px] h-[350px] rounded">
          <div className="flex flex-col">
            <Image
              width={400}
              height={300}
              src={result.imageUrl}
              className="rounded"
              alt="car"
              priority
              style={{ objectFit: "cover", width: "400px", height: "300px" }}
            />
          </div>
        </div>

        <div className="mt-4">
          <p>Inspection</p>
          {result?.damageMedia?.map((dam: { [key: string]: any }) => (
            <div
              key={dam.name}
              className="flex items-center gap-4  border-b border-grey py-4"
            >
              <span className="font-light text-sm uppercase">{dam.name}</span> -
              <span className="font-light text-sm">{dam.comment}</span>
            </div>
          ))}
        </div>
        <Link
          className={`bg-primary text-lightGrey outline-none text-xs py-3 px-4 mt-8 rounded flex items-center justify-center gap-2`}
          href={result.websiteUrl}
        >
          Pay Now
        </Link>
      </div>

      <div className="flex flex-col">
        <p className="font-semibold text-2xl my-2">{result.carName}</p>
        <hr className="border-b-0.5 border-grey" />

        <div className="flex gap-4 flex-col border-b border-grey py-4">
          <p className="font-semibold">
            {formatAmount(result.marketplacePrice)}
          </p>

          <p className="flex font-semibold items-center line-through text-grey">
            {formatAmount(result.marketplaceOldPrice)}
          </p>
        </div>
        <div className="flex items-center gap-4  border-b border-grey py-4">
          <CiLocationOn />
          <p className="font-light text-sm">
            {result.city}, {result.state}, {result.country}
          </p>
        </div>
        <div className="flex items-center gap-4  border-b border-grey py-4">
          <p className="font-light text-sm">
            Condition : <b>{result.sellingCondition}</b>
          </p>
        </div>
        <div className="flex items-center gap-4  border-b border-grey py-4">
          <p className="font-light text-sm">
            Owner : <b>{result.ownerType}</b>
          </p>
        </div>
        <div className="flex items-center gap-4  border-b border-grey py-4">
          <p className="font-light text-sm">
            Has financing : <b>{result.hasFinancing ? "Yes" : "No"}</b>
          </p>
        </div>
        <div className="flex items-center gap-4  border-b border-grey py-4">
          <p className="font-light text-sm">
            Has warranty : <b>{result.hasWarranty ? "Yes" : "No"}</b>
          </p>
        </div>

        <div className="flex items-center gap-4  border-b border-grey py-4">
          <p className="font-light text-sm">
            Transmission : <b>{result.transmission}</b>
          </p>
        </div>

        <div className="flex items-center gap-4  border-b border-grey py-4">
          <p className="font-light text-sm">
            Available: <b>{result.sold ? "No" : "Yes"}</b>
          </p>
        </div>
        <div className="flex items-center gap-4  border-b border-grey py-4">
          <LuFuel />
          <p className="font-light text-sm">{result.fuelType}</p>
        </div>

        <div className="flex items-center gap-4  border-b border-grey py-4">
          <p className="font-light text-sm">
            Interior: <b>{result.interiorColor}</b>
          </p>
        </div>
        <div className="flex items-center gap-4  border-b border-grey py-4">
          <p className="font-light text-sm">
            Exterior: <b>{result.exteriorColor}</b>
          </p>
        </div>

        <div className="flex items-center gap-4  border-b border-grey py-4">
          <PiEngine />
          <p className="font-light text-sm">{result.engineType}</p>
        </div>

        <div className="flex items-center gap-4  border-b border-grey py-4">
          <FaCarRear />
          <p className="font-light text-sm">
            {result.mileage.toLocaleString()} {result.mileageUnit}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CarItem;
