import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-4 px-6">
      <div className="flex items-center">
        <Image
          src="/frame_prod.jpg"
          alt="FrameProd Logo"
          width={120}
          height={60}
          className="mr-4"
        />
      </div>
      <ul className="flex space-x-6">
        {["Home", "Services", "Portfolio", "About", "Contact"].map((item) => (
          <li key={item}>
            <Link
              href={`#${item.toLowerCase()}`}
              className="text-orange-500 hover:text-orange-300 transition-colors"
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
