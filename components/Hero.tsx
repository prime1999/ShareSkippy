"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import HeroSlider from "@/components/HeroSlider";
import Image from "next/image";
import woman from "../public/assets/images/woman.png";
import hero from "../public/assets/images/hero1.jpg";
import grass from "../public/assets/images/grass.png";
import ladyWithDog from "../public/assets/images/ladyWithDog.png";
import backdrop from "../public/assets/images/blurBackdrop.png";
import dog1 from "../public/assets/images/dog1.jpg";
import dog2 from "../public/assets/images/dog2.jpg";
import dog3 from "../public/assets/images/dog3.jpg";
import dog4 from "../public/assets/images/test.png";

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
    <main className="relative flex items-center pt-32 pb-16 w-11/12 h-[750px] mx-auto font-signika md:w-10/12">
      <div className="w-full lg:w-1/2">
        <h6
          className="text-blue-800 font-normal text-lg max-lg:text-center lg:mt-0"
          id="heading"
        >
          Where dog lovers connect.
        </h6>
        <h1
          className="mb-2 text-5xl font-semibold text-blue-900 my-2 max-lg:text-center max-lg:mb-4 lg:mb-0"
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
        <p className="text-sm w-11/12 font-roboto max-lg:text-center" id="para">
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
      </div>
      <div className="hidden lg:block lg:w-1/2">
        <div className="relative">
          <div className="w-130 h-130 rounded-full border-2 border-dashed border-blue-200 flex items-center justify-center p-4">
            <Image
              src={backdrop}
              alt="A blurred backdrop"
              width={500}
              height={500}
              placeholder="blur"
              className="w-120 h-120"
              style={{ borderRadius: "100%" }}
            />
          </div>
          <div className="absolute top-80 left-10">
            <div className="absolute -top-50 -left-40 w-170">
              {" "}
              <Image
                src={ladyWithDog}
                alt="woman hugging a dog"
                width={1000}
                height={1000}
                className="full object-cover"
              />
              <div className="absolute left-0 w-full h-50 bottom-0 inset-x-0 bg-gradient-to-t from-white via-white/94 to-transparent"></div>
            </div>
            {/* <Image
              src={grass}
              alt="grass"
              width={500}
              height={500}
              className=""
            /> */}
          </div>
          <div className="absolute bottom-20 right-20 border-4 border-white rounded-full shadow-lg">
            <Image
              src={dog1}
              alt="dog1"
              width={200}
              height={200}
              className="rounded-full z-100 w-15 h-15 object-cover"
            />
          </div>
          <div className="absolute top-0 right-30 border-4 border-white rounded-full shadow-lg">
            <Image
              src={dog2}
              alt="dog1"
              width={500}
              height={500}
              className="rounded-full z-100 w-15 h-15 object-cover"
            />
          </div>
          <div className="absolute top-10 left-10 border-4 border-white rounded-full shadow-lg">
            <Image
              src={dog3}
              alt="dog1"
              width={500}
              height={500}
              className="rounded-full z-100 w-15 h-15 object-cover"
            />
          </div>
        </div>
      </div>
      {/* <div
        className="relative w-full h-full bg-center bg-cover object-cover"
        style={{ backgroundImage: `url(${hero.src})` }}
      >
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
        ></div>
        <div className="flex flex-col items-center justify-center h-full w-full md:w-9/12 lg:w-7/12 mx-auto z-100">
          <h6
            className="mt-2 text-white font-normal text-lg max-lg:text-center max-lg:mt-8 lg:mt-0"
            id="heading"
          >
            Where dog lovers connect.
          </h6>
          <h1
            className="mb-2 text-5xl font-semibold text-gray-200 my-2 max-lg:text-center max-lg:mb-4 lg:mb-0"
            id="main-heading"
          >
            Connect with Local Dog Lovers.
          </h1>
          <h2
            className="mb-2 text-3xl font-semibold text-blue-300 max-lg:text-center max-lg:mb-8 lg:mb-0"
            id="sub-heading"
          >
            Build a Happier Neighborhood Together
          </h2>
          <p
            className="text-sm w-11/12 font-roboto text-white text-center max-lg:text-center"
            id="para"
          >
            ShareSkippy connects dog owners with verified dog lovers in your
            neighborhood for free walks, playdates, and adventures.
          </p>
          <div className="w-full flex items-center justify-center">
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
          <HeroSlider />
        </div>
      </div> */}
    </main>
  );
};

export default Hero;
