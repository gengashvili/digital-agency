import Image from "next/image";
import items from "./data.js";
import { notFound } from "next/navigation";

const getData = (category) => {
  const data = items[category];

  if (data) {
    return data;
  }

  return notFound();
};

export default function Category({ params }) {
  const data = getData(params.category);
  return (
    <main className="mx-auto max-w-screen-xl">
      <h2 className="text-green-500 text-4xl font-bold md:mt-6 md:text-5xl">
        our works {">"} {params.category}
      </h2>

      {data.map((item, index) => (
        <section
          className={`flex flex-col gap-8 mt-8 mb-16 ${
            index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
          }`}
          key={item.id}
        >
          <div className="md:flex-1 h-80 relative">
            <Image
              className="object-cover w-full h-full"
              src={item.image}
              alt=""
              layout="fill"
            />
          </div>
          <article className="flex-1 flex flex-col gap-4 justify-center">
            <h3 className="text-2xl font-bold">{item.title}</h3>
            <p className="text-base">{item.desc}</p>
            <button className="px-4 py-2 bg-green-500 text-white">
              See More
            </button>
          </article>
        </section>
      ))}
    </main>
  );
}
