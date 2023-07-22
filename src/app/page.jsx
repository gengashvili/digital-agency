import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <section className="flex flex-col md:flex-row md:items-center md:space-x-8 max-w-screen-2xl mx-auto">
        <div className="md:w-1/2 flex flex-col gap-9">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white dark:text-gray-100">
            Better design for your digital products
          </h2>
          <p className="text-white dark:text-gray-200">
            Turning your idea into reality. We bring together the teams from the
            global tech industry.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-fit">
            See Our Works
          </button>
        </div>
        <div className="md:w-1/2">
          <Image
            src={"/images/chatbot.png"}
            alt=""
            width={500}
            height={500}
            layout="responsive"
          />
        </div>
      </section>
    </main>
  );
}
