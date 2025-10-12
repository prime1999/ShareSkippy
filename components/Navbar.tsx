import Link from "next/link";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <nav className="fixed z-100 w-full">
      <div className="w-11/12 flex items-center justify-between mx-auto rounded-3xl mt-8 p-4 glassmorphism md:w-9/12">
        {" "}
        <Logo />
        <Link
          href="/signIn"
          className="relative inline-block overflow-hidden rounded-xl bg-blue-600 text-white font-roboto px-6 py-2 group"
        >
          <div className="absolute top-0 left-[-100%] w-full h-full bg-blue-700 transition-all duration-300 ease-out group-hover:left-0 z-0"></div>

          <span className="relative z-10 font-semibold text-md">Join Now</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
