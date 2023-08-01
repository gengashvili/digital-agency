import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="flex flex-col md:flex-row md:items-center md:space-x-8 max-w-screen-2xl mx-auto">
        <div className="md:w-1/2 flex flex-col gap-9">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white dark:text-gray-100">
            Better design for your digital products
          </h2>
          <p className="text-white dark:text-gray-200 text-xl">
            Turning your idea into reality. We bring together the teams from the
            global tech industry.
          </p>
          <Link href="/portfolio">
            <button className="link-btn ">See Our Works</button>
          </Link>
        </div>
        <div className="md:w-1/2">
          <Image
            src="/images/chatbot.png"
            alt="chatbot"
            width={900}
            height={700}
            // layout="responsive"
          />
        </div>
      </section>
    </main>
  );
}