"use client";

import clsx from "clsx";
import { ShieldCheck, Star } from "lucide-react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

export const HeroSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className="flex flex-col gap-5 py-10 sm:py-40 sm:ml-50 relative px-4 sm:px-0"
    >
      <p
        className={clsx(
          "transition-all duration-1000",
          inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20",
        )}
      >
        COMPREHENSIVE CARE
      </p>
      <h1
        className={clsx(
          "transition-all duration-700 delay-300",
          inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20",
        )}
      >
        We Provide <br />
        Dental Care and
        <br /> <span className="text-blue-500">Services</span>
      </h1>

      <div className="relative sm:absolute left-0 sm:left-120 top-0 w-full sm:w-auto">
        <div className="relative w-full sm:w-auto flex justify-center">
          <Image
            src="/doctor.png"
            alt="Hero Image"
            width={500}
            height={300}
            className={clsx(
              "object-cover transition-all ease-linear duration-700 delay-300",
              inView ? "scale-100 opacity-100" : "scale-50 opacity-0",
              "max-w-[300px] sm:max-w-none",
            )}
          />
        </div>
        <div
          className={clsx(
            "absolute right-2 sm:right-0 flex gap-2 bg-blue-500 rounded-2xl py-3 px-4 sm:py-4 sm:px-6 max-w-max text-white transition-all duration-700 delay-500",
            inView ? "opacity-100 top-1/2" : "opacity-0 top-2/3",
          )}
        >
          <ShieldCheck className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-700 p-1.5 sm:p-2 rounded-xl" />
          <div className="flex flex-col gap-0.5 sm:gap-1">
            <p className="text-xs sm:text-base">
              Professional <br />
              Clinic
            </p>
            <div className="flex gap-1 sm:gap-2 items-center">
              <Star className="w-4 h-4 sm:w-5 sm:h-5" />
              <p className="text-xs sm:text-base">
                4.9{" "}
                <span className="text-gray-300 text-[10px] sm:text-sm">
                  (200+ Reviews)
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Buttons */}
      <div
        className={clsx(
          "mt-6 flex flex-col gap-3 sm:flex-row sm:gap-4 transition-all duration-700 delay-500",
          inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
        )}
      >
        <button className="rounded-full bg-blue-600 px-8 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 sm:px-10 sm:py-3.5">
          Book Appointment
        </button>
        <button className="rounded-full border-2 border-blue-600 px-8 py-3 text-sm font-semibold text-blue-600 transition hover:bg-blue-50 sm:px-10 sm:py-3.5">
          Learn More
        </button>
      </div>
    </div>
  );
};
