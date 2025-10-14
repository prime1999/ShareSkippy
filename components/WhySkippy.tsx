"use client";

import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import playingDog from "../public/assets/images/playingDog.jpg";

const WhySkippy = () => {
  useGSAP(() => {
    gsap.from("#paragraph", {
      opacity: 0,
      xPercent: 80,
      delay: 0.5,
      duration: 1,
      ease: "power1.in",
    });
    gsap.from("#title", {
      opacity: 0,
      yPercent: -80,
      duration: 1,
      ease: "power1.in",
    });
    gsap.from("#link", {
      opacity: 0,
      duration: 1,
      delay: 1,
      ease: "power1.in",
    });
  }, []);
  return (
    <section
      className="flex flex-col items-center justify-center w-full h-[400px] mx-auto my-32 font-signika"
      id="whySkippy"
    >
      <div
        className="relative w-full h-full bg-cover bg-center bg-fixed text-white"
        style={{ backgroundImage: `url(${playingDog.src})` }}
      >
        <div
          className="absoluet top-0 left-0 text-center flex flex-col items-center justify-center text-white z-100 h-full"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <h3 className="font-signika text-3xl font-bold mb-4" id="title">
            Why ShareSkippy
          </h3>
          <p
            className="font-signika w-11/12 mx-auto md:9/12 lg:7/12"
            id="paragraph"
          >
            Did you know over 70% of city dogs don&apos;t get enough exercise?{" "}
            <br />
            Life happens — owners get busy, work long hours, face health issues,
            or juggle tight budgets. But every pup still deserves to run, play,
            and explore. <br />
            That&apos;s where you come in: volunteer, make a dog&apos;s day (and
            a human&apos;s!), and get the best reward ever: puppy love. ❤️
          </p>
          <Link
            href="/signIn"
            className="relative inline-block overflow-hidden rounded-full bg-blue-500 shadow-lg text-white font-roboto mt-8 px-8 py-4 group"
            id="link"
          >
            <div className="absolute top-0 left-[-100%] w-full h-full bg-blue-600 transition-all duration-500 ease-out group-hover:left-0 z-0"></div>

            <span className="relative z-10 font-semibold text-md">
              Become a Pet Pal
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhySkippy;
