import CustomImage from "@/components/CustomImage";
import Link from "next/link";

const serverApi = "http://localhost:3000/api";

async function getData() {
  const res = await fetch(`${serverApi}/posts`, { next: { revalidate: 20 } });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Blog() {
  const data = await getData();

  return (
    <main>
      <section>
        {data.map((item) => {
          return (
            <Link href={`/blog/${item._id}`} key={item._id}>
              <CustomImage imageSrc={item.image} />
              <div>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
            </Link>
          );
        })}
      </section>
    </main>
  );
}
