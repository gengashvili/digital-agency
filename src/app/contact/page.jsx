import Image from "next/image";
import Link from "next/link";

export default function Contact() {
  return (
    <main className="container mx-auto">
      <h2 className="text-5xl mb-12 text-center">Let's Keep in Touch</h2>
      <section className="flex flex-col sm:flex-row items-center gap-12">
        <div className="flex-1">
          <Image
            src="/images/Support.png"
            alt="support"
            width={600}
            height={400}
          />
        </div>
        <form className="flex-1 flex flex-col gap-6 p-6  shadow-md rounded-lg border-solid border-white border-2">
          <input
            type="text"
            placeholder="Name"
            className="contact-form-input"
          />
          <input
            type="text"
            placeholder="Email"
            className="contact-form-input"
          />
          <textarea
            placeholder="Message"
            cols="30"
            rows="5"
            className="contact-form-input resize-none"
          ></textarea>
          <button type="submit" className="contact-form-btn">
            Send
          </button>
        </form>
      </section>
    </main>
  );
}
