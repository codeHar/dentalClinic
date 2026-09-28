"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { testimonials } from "@/lib/data";
import clsx from "clsx";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import Autoplay from "embla-carousel-autoplay";
import { AnimationInfo } from "@/lib/consts";

export function TestimonialSection() {
  const { ref, inView } = useInView({
    threshold: AnimationInfo.threesold,
    triggerOnce: AnimationInfo.triggerOnce,
  });

  return (
    <section ref={ref} className="section-bg overflow-x-hidden ">
      <div className="container mx-auto section-container">
        <div className="flex flex-col gap-2 sm:gap-4 items-center justify-center text-center">
          <p
            className={clsx(
              " tracking-wider uppercase transition-all duration-700",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
            )}
          >
            Testimonials
          </p>
          <h2
            className={clsx(
              "tracking-tight transition-all duration-700 delay-150",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
            )}
          >
            What Our Client Says
          </h2>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 5000,
            }),
          ]}
          className="w-full cursor-pointer"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem
                key={testimonial.id}
                className="sm:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1">
                  <Card
                    style={{
                      transitionDelay: inView ? `${index * 150}ms` : "0ms",
                    }}
                    className={clsx(
                      "box-shadow-1 transition-all duration-700 group",
                      inView
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-20",
                    )}
                  >
                    <CardHeader className="flex flex-col items-center gap-2 p-6">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={100}
                        height={100}
                        className="group-hover:scale-125 transition-transform duration-500 ease-in-out"
                      />
                    </CardHeader>

                    <CardContent className="px-6 select-none">
                      <p className="text-center">{testimonial.testimonial}</p>
                      <span className="flex justify-center mt-5">
                        {Array.from({ length: testimonial.rating }).map(
                          (_, index) => (
                            <svg
                              key={index}
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-5 h-5 text-yellow-400"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.026a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.026a.563.563 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                              />
                            </svg>
                          ),
                        )}
                      </span>
                      <h6 className="text-center mt-2">{testimonial.name}</h6>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0 sm:-left-12" />
          <CarouselNext className="right-0 sm:-right-12" />
        </Carousel>
      </div>
    </section>
  );
}
