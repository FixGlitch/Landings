import Image from "next/image";
import Link from "next/link";

interface SpotCardProps {
  imageSrc: string;
  href: string;
  title: string;
  subTitle: string;
}

const SpotCardEcommerce = ({
  imageSrc,
  href,
  title,
  subTitle,
}: SpotCardProps) => {
  return (
    <div>
      <Link href={href} className="relative block w-full h-100 mb-4">
        <Image
          src={imageSrc}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="object-top"
        />
      </Link>
      <div className="px-4 pb-4">
        <div className="flex flex-col justify-between items-center">
          <h3 className="font-bold text-md mb-2 text-black">{title}</h3>
          <span className="font-bold text-md text-black">{subTitle}</span>
        </div>
      </div>
    </div>
  );
};

export default SpotCardEcommerce;
