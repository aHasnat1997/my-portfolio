import { TBlog } from "@/types";
import { BlogCard, LoadingBlogCard } from "../../components/sheared/BlogCard";

const LatestBlog = async () => {
  const data = await fetch(`${process.env.BASE_URL}/api/blog`, {
    cache: 'no-store'
  });
  const blogsData = await data.json();
  const totalData = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <section id="blogs" className="max-section py-8">
      <h2 className='text-6xl font-semibold pb-14'>My Latest Blog</h2>
      <div className="grid grid-cols-3 gap-8">
        {
          !blogsData ?
            totalData.map((i) => <LoadingBlogCard key={i} />) :
            blogsData?.data?.slice(0, 3).map((blog: TBlog) => <BlogCard key={blog.id} blog={blog} />)
        }
      </div>
    </section>
  );
};

export default LatestBlog;