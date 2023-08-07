"use client";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Dashboard() {
  const session = useSession();
  const router = useRouter();

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, mutate, error, isLoading } = useSWR(
    `/api/posts?username=${session?.data?.user.name}`,
    fetcher
  );

  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  if (session.status === "unauthenticated") {
    router?.push("/dashboard/login");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target[0].value;
    const description = e.target[1].value;
    const img = e.target[2].value;
    const content = e.target[3].value;

    try {
      await fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify({
          title,
          description,
          img,
          content,
          username: session.data.user.name,
        }),
      });
      mutate();
      e.target.reset();
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`/api/posts/${id}`, {
        method: "DELETE",
      });
      mutate();
    } catch (err) {
      console.log(err);
    }
  };

  if (session.status === "authenticated") {
    return (
      <main>
        <section>
          {isLoading
            ? "loading"
            : data?.map((post) => (
                <div key={post._id}>
                  <div>
                    <Image src={post.img} alt="" width={200} height={100} />
                  </div>
                  <h2>{post.title}</h2>
                  <span onClick={() => handleDelete(post._id)}>X</span>
                </div>
              ))}
        </section>
        <form onSubmit={handleSubmit}>
          <h1>Add New Post</h1>
          <input type="text" placeholder="Title" />
          <input type="text" placeholder="description" />
          <input type="text" placeholder="Image" />
          <textarea placeholder="Content" cols="30" rows="10"></textarea>
          <button>Send</button>
        </form>
      </main>
    );
  }
}
