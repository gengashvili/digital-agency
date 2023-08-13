import CustomImage from "@/components/CustomImage";
import Image from "next/image";
import { notFound } from "next/navigation";

async function getData(id) {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return notFound();
  }

  return res.json();
}

const BlogPost = async ({ params }) => {
  const data = await getData(params.id);
  return (
    <main>
      <article>
        <div>
          <h2>{data.title}</h2>
          <p>{data.description}</p>
          <div>
            <CustomImage imageSrc={data.image} />
            <span>{data.username}</span>
          </div>
        </div>
      </article>
      <article>
        <p>{data.content}</p>
      </article>
    </main>
  );
};

export default BlogPost;
