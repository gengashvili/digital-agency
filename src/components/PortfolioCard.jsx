import Link from "next/link";
import Image from "next/image";


export default function PortfolioCard({ imageSrc, category }) {
  return (
    <article className="portfolio-card">
      <div className="relative w-2/3 h-48">
        <Image
          src={imageSrc}
          alt=""
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="rounded-lg"
        />
      </div>
      <Link href={`/portfolio/${category}`} className="hover:underline">
        {category} {" ==>"}
      </Link>
    </article>
  );
}
