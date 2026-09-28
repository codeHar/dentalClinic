"use client";
import { Button } from "@base-ui/react";
import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
  CardFooter,
} from "../ui/card";
import Image from "next/image";
import Link from "next/link";
import { Blog } from "@/models";
import { useInView } from "react-intersection-observer";
import clsx from "clsx";
import { AnimationInfo } from "@/lib/consts";

type Props = {
  blogs: Blog[];
};

export const BlogList = ({ blogs }: Props) => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: AnimationInfo.triggerOnce,
  });

  return (
    <div
      ref={ref}
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-4"
    >
      {blogs.map((blog, index) => (
        <Card
          key={blog.id}
          style={{
            transitionDelay: inView ? `${index * 150}ms` : "0ms",
          }}
          className={clsx(
            "box-shadow-1 transition-all duration-700 p-0 group",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20",
          )}
        >
          <div className="relative w-full h-[170px] overflow-hidden">
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              className="object-cover transition-transform duration-600 ease-out group-hover:scale-108"
            />
          </div>

          <CardContent className="flex-1">
            <CardTitle className="line-clamp-2 h-[50px] ">
              {blog.title}
            </CardTitle>
            <CardDescription className="line-clamp-5  mt-2">
              {blog.description}
            </CardDescription>
          </CardContent>

          <CardFooter>
            <Link href={`/blogs/${blog.slug}`} className="w-full">
              <Button className="w-full cursor-pointer">Read More...</Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};
