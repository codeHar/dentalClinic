import { blogs } from "@/lib/data";
import { BlogList, HeaderComp } from "../../shared";

export const Blogs = () => {
  const displayingBlogs = blogs.filter((blog) => blog.id <= 3);
  return (
    <section id="blogs" className="container mx-auto section-container">
      <HeaderComp title="Our Blogs" description="Latest News and Updates" />

      <BlogList blogs={displayingBlogs} />
    </section>
  );
};
