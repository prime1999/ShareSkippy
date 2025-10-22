import Image from "next/image";
import logIn from "../public/assets/icons/login.png";
import Link from "next/link";
import Logo from "./Logo";
import MobileDrawer from "./MobileDrawer";

const Navbar = () => {
  return (
    <nav className="fixed z-100 w-full">
      <div className="w-full glassmorphism">
        <div className="w-11/12 flex items-center justify-between mx-auto p-4 lg:w-9/12">
          <Logo />
          <ul className="hidden items-center justify-between gap-4 font-roboto text-sm font-semibold lg:flex">
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

          <div className="hidden items-center gap-4 lg:gap-6 lg:flex">
            <span className="flex items-center gap-1 cursor-pointer duration-500 hover:gap-2">
              <h6 className="font-signika text-md font-semibold">Sign In</h6>
              <Image src={logIn} alt="login icon" width={20} height={20} />
            </span>
            <Link
              href="/signIn"
              className="relative inline-block overflow-hidden rounded-xl bg-blue-600 shadow-md text-white font-roboto px-6 py-2 group"
            >
              <div className="absolute top-0 left-[-100%] w-full h-full bg-blue-700 transition-all duration-300 ease-out group-hover:left-0 z-0"></div>

              <span className="relative z-10 font-semibold text-md">
                Join Now
              </span>
            </Link>
          </div>
          <MobileDrawer />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
