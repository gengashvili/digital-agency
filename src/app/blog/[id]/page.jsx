import React from "react";
import styles from "./page.module.css";
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

export async function generateMetadata({ params }) {
  const post = await getData(params.id);
  return {
    title: post.title,
    description: post.description,
  };
}

export default async function ({ params }) {
  const data = await getData(params.id);
  return (
    <div>
      <div>
        <div>
          <h2>{data.title}</h2>
          <p>{data.description}</p>
          <div>
            <Image src={data.img} alt="" width={40} height={40} />
            <span>{data.author}</span>
          </div>
        </div>
        <div>
          <Image src={data.img} alt="" fill={true} />
        </div>
      </div>
      <div>
        <p>{data.content}</p>
      </div>
    </div>
  );
}
