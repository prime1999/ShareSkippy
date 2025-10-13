import Link from "next/link";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <nav className="fixed z-100 w-full">
      <div className="w-11/12 flex items-center justify-between mx-auto rounded-3xl mt-8 p-4 glassmorphism md:w-9/12">
        {" "}
        <Logo />
        <ul className="hidden items-center justify-between gap-4 font-roboto text-sm font-semibold md:flex">
          <li className="duration-500 hover:text-black/60">
            <Link href="#howItWorks">How It Works</Link>
          </li>
          <li className="duration-500 hover:text-black/60">
            <Link href="#whySkippy">Why Skippy</Link>
          </li>
          <li className="duration-500 hover:text-black/60">
            <Link href="#testimonials">Testimonials</Link>
          </li>
        </ul>
        <Link
          href="/signIn"
          className="relative inline-block overflow-hidden rounded-xl bg-blue-600 shadow-md text-white font-roboto px-6 py-2 group"
        >
          <div className="absolute top-0 left-[-100%] w-full h-full bg-blue-700 transition-all duration-300 ease-out group-hover:left-0 z-0"></div>

          <span className="relative z-10 font-semibold text-md">Join Now</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
