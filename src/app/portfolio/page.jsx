import PortfolioCard from "@/components/PortfolioCard";

export default function Portfolio() {
  return (
    <main className="w-full mx-auto max-w-screen-2xl">
      <h2 className="mb-4 text-3xl font-bold lg:text-7xl lg:mb-12">
        Our Works
      </h2>
      <h3 className="mb-6 text-xl font-semibold lg:text-4xl">
        Choose a gallery
      </h3>
      <section className="grid grid-cols-1 gap-6 md:grid-cols-3">
      
        <PortfolioCard
          imageSrc={"/images/illustration.jpg"}
          category="illustrations"
        />
        <PortfolioCard 
          imageSrc={"/images/websites.jpg"} 
          category="websites"
        />
        <PortfolioCard
          imageSrc={"/images/application.png"}
          category="applications"
        />

      </section>
    </main>
  );
}
