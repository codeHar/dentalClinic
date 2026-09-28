import { BlogList, HeaderComp } from "@/components/shared";
import { blogs } from "@/lib/data";

const page = () => {
  return (
    <section className="section-bg">
      <div className="container mx-auto section-container">
        <HeaderComp title="Our Blogs" description="Latest News and Updates" />

        <BlogList blogs={blogs} />
      </div>
    </section>
  );
};

export default page;
