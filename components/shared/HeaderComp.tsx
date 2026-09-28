"use client";

import { AnimationInfo } from "@/lib/consts";
import clsx from "clsx";
import { useInView } from "react-intersection-observer";

type Props = {
  title: string;
  description: string;
};

export const HeaderComp = ({ title, description }: Props) => {
  const { ref, inView } = useInView({
    threshold: AnimationInfo.threesold,
    triggerOnce: AnimationInfo.triggerOnce,
  });

  return (
    <div
      className="flex flex-col gap-2 sm:gap-4 items-center justify-center text-center"
      ref={ref}
    >
      <p
        className={clsx(
          " tracking-wider uppercase transition-all duration-700",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
        )}
      >
        {title}
      </p>
      <h2
        className={clsx(
          "tracking-tight transition-all duration-700 delay-150",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
        )}
      >
        {description}
      </h2>
    </div>
  );
};
