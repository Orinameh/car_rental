import { CiUser, CiDollar  } from "react-icons/ci";
import { MdAccessTime } from "react-icons/md";
import { LuMessageCircle } from "react-icons/lu";
import car from "@/public/assets/car2.png";
import Image from "next/image";

export const ChooseUs = () => {
  return (
    <div className="mx-32 py-16">
      <p className="text-center font-light text-dark text-sm mb-4">
        Why Choose Us
      </p>
      <h1 className="text-center font-semibold text-dark text-2xl">
        We offer the best experience <br /> with our rental deals
      </h1>
      <div className="flex items-center mt-16 gap-8">
        <Image
          src={car}
          alt="car"
          priority
          style={{ objectFit: "contain", width: "700px", height: "auto" }}
        />

        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-4">
            <span className="bg-primary rounded w-8 h-8 inline-flex items-center justify-center">
              <CiUser color="white" size={20} />
            </span>
            <div>
              <p className="font-semibold">Experience driver</p>
              <p className="text-sm font-light">
                Don&rsquo;t have a driver?Don&rsquo;t worry <br/> we have many
                experience drivers for you
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="bg-primary rounded w-8 h-8 inline-flex items-center justify-center">
              <CiDollar color="white" size={20} />
            </span>
            <div>
              <p className="font-semibold">Best price guaranteed</p>
              <p className="text-sm font-light">
                Don&rsquo;t have a driver?Don&rsquo;t worry <br/> we have many
                experience drivers for you
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="bg-primary rounded w-8 h-8 inline-flex items-center justify-center">
              <MdAccessTime color="white" size={20} />
            </span>
            <div>
              <p className="font-semibold">24-hour car delivery</p>
              <p className="text-sm font-light">
                Don&rsquo;t have a driver?Don&rsquo;t worry <br/> we have many
                experience drivers for you
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="bg-primary rounded w-8 h-8 inline-flex items-center justify-center">
              <LuMessageCircle  color="white" size={20} />
            </span>
            <div>
              <p className="font-semibold">24/7 technical support</p>
              <p className="text-sm font-light">
                Don&rsquo;t have a driver?Don&rsquo;t worry <br/> we have many
                experience drivers for you
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
