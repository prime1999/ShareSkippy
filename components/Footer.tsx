import { legal, quickLinks } from "@/lib/utils/constants";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-16 py-16 font-inter bg-blue-700 text-white/90">
      <div className="w-10/12 mx-auto flex flex-col items-center justify-between gap-8 md:flex-row md:items-start">
        <div className="w-96 max-sm:text-center">
          <h6 className="font-kanit text-3xl font-semibold">ShareSkippy</h6>
          <p className="my-4 text-sm">
            Connecting dog lovers with dog owners for free, community-based dog
            sharing experiences.
          </p>
          <p className="text-sm font-semibold">
            © 2025 ShareSkippy. All rights reserved.
          </p>
        </div>
        <div>
          <ul className="flex flex-col items-center gap-2">
            <li className="font-semibold">Quick Links</li>
            {quickLinks.map((link: any, i: number) => (
              <Link
                href={`${link.link}`}
                className="text-sm duration-500 hover:text-white/60"
              >
                {link.name}
              </Link>
            ))}
          </ul>
        </div>
        <div>
          <ul className="flex flex-col items-center gap-2">
            <li className="font-semibold">Legal</li>
            {legal.map((link: any, i: number) => (
              <Link
                href={`${link.link}`}
                className="text-sm duration-500 hover:text-white/60"
              >
                {link.name}
              </Link>
            ))}
          </ul>
        </div>
      </div>
      <hr className="w-11/12 mx-auto border border-t border-white/40 mt-12" />
      <div className="w-11/12 mx-auto flex flex-col gap-4 items-center justify-between text-sm mt-8 max-sm:text-center md:flex-row">
        <div className="max-sm:w-10/12 max-sm:mx-auto flex flex-col gap-4">
          <h6 className="font-semibold">
            ShareSkippy is a free marketplace platform. Users are responsible
            for their own safety and interactions.
          </h6>
          <p className="font-normal text-xs">
            ShareSkippy is a community program of ShareVita, a California
            nonprofit public benefit corporation (501(c)(3) determination
            pending).
          </p>
        </div>
        <p className="font-semibold">Made with ❤️ for dog lovers</p>
      </div>
    </footer>
  );
};

export default Footer;
