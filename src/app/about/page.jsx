import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function About() {
  return (
    <main className="max-w-screen-2xl mx-auto">
      <section className="w-full relative lg:w-1/2 h-80 mx-auto">
        <Image src="/images/about-cover.jpeg" alt="about cover" fill={true}/>
        <div className="bg-green-500 py-1 px-2 text-white absolute bottom-4 sm:left-4">
          <h2 className="text-xl font-bold">Digital Storytellers</h2>
          <h3 className="text-lg">
            Handcrafting award-winning digital experiences
          </h3>
        </div>
      </section>
      <section className="flex flex-col gap-5 md:flex-row md:gap-10 lg:gap-20 mt-8">
        <article className="flex-1">
          <h2 className="text-2xl font-bold">Who Are We?</h2>
          <p className="text-base font-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae. A
            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ducimus quae dolor, optio voluptatibus magnam iure esse tempora
            beatae, a suscipit eos. Animi quibusdam cum omnis officiis
            <br />
            <br />
            voluptatum quo ea eveniet? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ducimus quae dolor, optio voluptatibus magnam iure
            esse tempora beatae, a suscipit eos. Animi quibusdam cum omnis
            officiis voluptatum quo ea eveniet?
          </p>
        </article>
        <article className="flex-1">
          <h2 className="text-2xl font-bold">What We Do?</h2>
          <p className="text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae, a
            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. -
            Creative Illustrations
            <br />
            <br /> - Dynamic Websites
            <br />
            <br /> - Fast and Handy
            <br />
            <br /> - Mobile Apps
          </p>
          <Link href="/contact">
            <button className="link-btn mt-4">contact us</button>
          </Link>
        </article>
      </section>
    </main>
  );
}
