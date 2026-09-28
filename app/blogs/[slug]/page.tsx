import { blogs } from "@/lib/data";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface BlogDetailsPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export default async function BlogDetailsPage({
  params,
}: BlogDetailsPageProps) {
  const { slug } = await params;
  const blog = blogs.find((item) => item.slug === slug);

  console.log("Blog Details Page - Slug:", slug);
  console.log("Blog Details Page - Blog:", blog);

  if (!blog) {
    notFound();
  }

  // Get 2 other related articles
  const relatedBlogs = blogs.filter((b) => b.id !== blog.id).slice(0, 2);

  return (
    <article className="min-h-screen py-10">
      <div className="container mx-auto px-4 sm:px-8 max-w-4xl">
        {/* Back Link */}
        <Link
          href="/#blogs"
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-blue-600 transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blogs
        </Link>

        {/* Title & Metadata */}
        <header className="flex flex-col gap-4 mb-8">
          <span className="text-xs sm:text-sm font-semibold text-blue-600 tracking-wider uppercase">
            Oral Health & Care
          </span>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 leading-tight">
            {blog.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-gray-500 border-b border-gray-100 pb-6">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-gray-400" />
              {new Date(blog.createdDate).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-gray-400" />4 min read
            </span>
          </div>
        </header>

        {/* Hero Image */}
        <div className="relative w-full h-[280px] sm:h-[420px] lg:h-[480px] rounded-2xl overflow-hidden mb-10 shadow-sm">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Blog Body */}
        <div className="prose prose-slate lg:prose-lg max-w-none flex flex-col gap-6 text-gray-700 leading-relaxed">
          {blog.description.split("\n\n").map((paragraph, index) => (
            <p key={index} className="text-base sm:text-lg leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Share & Consultation Box */}
        <div className="my-12 p-6 sm:p-8 bg-blue-50/70 border border-blue-100 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h4 className="font-semibold text-gray-900 text-lg">
              Have questions about your dental health?
            </h4>
            <p className="text-sm text-gray-600 mt-1">
              Visit our clinic or schedule a consultation with our dental team.
            </p>
          </div>
          <Link
            href="/#contact"
            className="shrink-0 rounded-full bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            Book Appointment
          </Link>
        </div>

        {/* Related Articles */}
        {relatedBlogs.length > 0 && (
          <div className="mt-16 border-t border-gray-100 pt-12">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
              Related Articles
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedBlogs.map((item) => (
                <Link
                  key={item.id}
                  href={`/blogs/${item.slug}`}
                  className="group flex flex-col gap-3 rounded-xl border border-gray-100 p-4 hover:shadow-md transition-shadow"
                >
                  <div className="relative w-full h-40 rounded-lg overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {item.title}
                  </h4>
                  <p className="text-xs text-gray-500 line-clamp-2">
                    {item.shortDescription}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
