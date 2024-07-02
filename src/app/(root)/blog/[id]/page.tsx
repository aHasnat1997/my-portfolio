import Image from "next/image";
import parse from 'html-react-parser';
import DOMPurify from "isomorphic-dompurify";

const SingleBlog = async ({ params }: { params: { id: string } }) => {
  const result = await fetch(`${process.env.BASE_URL}/api/blog/${params.id}`, {
    cache: 'force-cache'
  });
  const blogData = await result.json();
  const cleanContent = DOMPurify.sanitize(blogData?.data?.content);

  return (
    <section className="pb-16">
      <div className="max-section">
        <Image
          src={blogData?.data?.imageUrl}
          alt="Hero Image"
          className="w-full h-[40rem] rounded-2xl"
          width={500}
          height={500}
        />
      </div>
      <h1 className="max-section text-6xl my-8 font-bold text-center">{blogData?.data?.title}</h1>
      <div className="max-section mt-20 text-2xl text-justify flex flex-col gap-8">
        {
          parse(cleanContent)
        }
      </div>
    </section>
  );
};

export default SingleBlog;