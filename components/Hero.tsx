"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import Image from "next/image";
import woman from "../public/assets/images/woman4.jpg";
import dog1 from "../public/assets/images/dog1.jpg";
import dog2 from "../public/assets/images/dog2.jpg";
import dog3 from "../public/assets/images/dog3.jpg";

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      "#heading",
      { opacity: 0, xPercent: -50 },
      { opacity: 1, xPercent: 0, duration: 1.5, ease: "power1.inOut" }
    );
    gsap.fromTo(
      "#main-heading",
      { opacity: 0, xPercent: 50 },
      { opacity: 1, xPercent: 0, duration: 1.5, ease: "power1.inOut" }
    );
    gsap.fromTo(
      "#sub-heading",
      { opacity: 0, yPercent: 50 },
      { opacity: 1, yPercent: 0, duration: 1.5, ease: "power1.inOut" }
    );
    gsap.fromTo(
      "#para",
      { opacity: 0, xPercent: -50 },
      { opacity: 1, xPercent: 0, delay: 1, duration: 1.5, ease: "power1.inOut" }
    );
    gsap.fromTo(
      "#btn",
      { opacity: 0 },
      { opacity: 1, delay: 2, duration: 1.5, ease: "power1.inOut" }
    );
  }, []);

  return (
    <main
      className="bg-fixed bg-center relative px-4 pt-32 pb-16 flex items-center justify-between gap-4 w-full h-[700px] mx-auto mb-8 font-signika md:px-16 md:py-32"
      style={{ backgroundImage: `url(${woman.src})`, backgroundSize: "cover" }}
    >
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{ backgroundColor: "rgba(0,0,0,0.3)" }}
      ></div>
      <div className="w-full text-center flex flex-col justify-center items-center relative">
        <h6
          className="mt-2 text-white/90 font-normal text-lg max-lg:text-center max-lg:mt-8 lg:mt-0"
          id="heading"
        >
          Where Dog Owners and Dog Lovers Connect
        </h6>
        <h1
          className="mb-2 text-5xl font-semibold text-white my-2 max-lg:text-center max-lg:mb-4 lg:mb-0"
          id="main-heading"
        >
          Connect with Local Dog Lovers.
        </h1>
        <h2
          className="mb-2 text-3xl font-semibold text-blue-600 max-lg:text-center max-lg:mb-8 lg:mb-0"
          id="sub-heading"
        >
          Build a Happier Neighborhood Together
        </h2>
        <p
          className="text-sm w-11/12 text-white font-roboto max-lg:text-center"
          id="para"
        >
          ShareSkippy connects dog owners with verified dog lovers in your
          neighborhood for free walks, playdates, and adventures.
        </p>
        <div className="w-full flex items-center justify-center lg:block">
          <Link
            href="/signIn"
            className="relative inline-block overflow-hidden rounded-full bg-blue-500 text-white font-roboto mt-8 px-8 py-4 shadow-lg group"
            id="btn"
          >
            <div className="absolute top-0 left-[-100%] w-full h-full bg-blue-600 transition-all duration-500 ease-out group-hover:left-0 z-0"></div>

            <span className="relative z-10 font-semibold text-sm md:text-md">
              Share Your Dog & Borrow a Friend
            </span>
          </Link>
        </div>

        <div className="absolute -bottom-20 right-5 border-4 border-white rounded-full shadow-lg max-md:hidden">
          <Image
            src={dog1}
            alt="dog1"
            width={200}
            height={200}
            placeholder="blur"
            className="rounded-full z-100 w-20 h-20 object-cover"
          />
        </div>
        <div className="absolute -top-10 right-30 border-4 border-white rounded-full shadow-lg">
          <Image
            src={dog2}
            alt="dog1"
            width={500}
            height={500}
            placeholder="blur"
            className="rounded-full z-100 w-15 h-15 object-cover"
          />
        </div>
        <div className="absolute bottom-5 left-0 border-4 border-white rounded-full shadow-lg md:left-20 lg:left-30">
          <Image
            src={dog3}
            alt="dog1"
            width={400}
            height={400}
            placeholder="blur"
            className="rounded-full z-100 w-15 h-15 object-cover"
          />
        </div>
      </div>
    </main>
  );
};

export default Hero;
