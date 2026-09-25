"use client";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

export const AboutAppointmentSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className="flex flex-col gap-8 sm:gap-12 py-12">
      {/* Header section */}
      <div className="flex flex-col gap-2 max-w-2xl">
        <p
          className={clsx(
            " tracking-wider uppercase transition-all duration-700",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
          )}
        >
          DON&apos;T HESITATE
        </p>
        <h2
          className={clsx(
            "tracking-tight transition-all duration-700 delay-150",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
          )}
        >
          Book an Appointment to Get <br className="hidden sm:inline" />
          Quality Dental Services
        </h2>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Side: Image with Floating Gradient Badge */}
        <div className="relative lg:col-span-7">
          <div
            className={clsx(
              "relative overflow-hidden rounded-2xl transition-all duration-700 delay-300",
              inView ? "opacity-100 scale-100" : "opacity-0 scale-95",
            )}
          >
            <Image
              src="/dentist-procedure.jpg"
              alt="Dentist performing checkup"
              width={700}
              height={450}
              className="w-full h-[320px] sm:h-[400px] lg:h-[440px] object-cover rounded-2xl"
              priority
            />
          </div>

          {/* Floating Gradient Card */}
          <div
            className={clsx(
              "static sm:absolute -bottom-6 -right-6 lg:-bottom-8 lg:-right-8 mt-4 sm:mt-0",
              "bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-500",
              "text-white p-6 sm:p-8 rounded-2xl shadow-xl max-w-md transition-all duration-700 delay-500",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
            )}
          >
            <h4 className="">Welcoming You to Modern, Pain-Free Dental Care</h4>
          </div>
        </div>

        {/* Right Side: Text & Read More */}
        <div
          className={clsx(
            "lg:col-span-5 flex flex-col gap-5 sm:gap-6 lg:pl-8 transition-all duration-700 delay-500",
            inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12",
          )}
        >
          <p className="">
            Committed to world-class oral healthcare in Nepal, we combine
            state-of-the-art dental technology with gentle, personalized care
            for individuals and families alike.
          </p>

          <p className="">
            From routine checkups and digital dental x-rays to advanced cosmetic
            restorations and pain-free treatments, our experienced Nepal Medical
            Council (NMC) certified specialists are here to brighten your smile.
          </p>

          <div className="pt-2">
            <Link
              href="#learn-more"
              className="inline-block text-sm sm:text-base font-bold text-gray-900 border-b-2 border-gray-900 pb-0.5 hover:text-blue-600 hover:border-blue-600 transition-colors"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
