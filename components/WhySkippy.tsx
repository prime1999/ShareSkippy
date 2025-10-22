import Link from "next/link";
import womanPlayingWithDog from "../public/assets/images/womanPlayingWithDog.jpg";
import dogRunning from "../public/assets/images/dogRunning.jpg";

const WhySkippy = () => {
  return (
    <section
      className="relative flex items-center justify-center w-full h-[400px] bg-fixed bg-cover object-contain bg-no-repeat bg-center mx-auto mt-16 py-8 font-signika"
      style={{ backgroundImage: `url(${dogRunning.src})` }}
      id="whySkippy"
    >
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
      ></div>
      <div className="w-full flex flex-col items-center justify-center z-100 text-center text-white lg:w-1/2">
        <h3 className="font-signika text-3xl font-semibold mb-4 text-white/80">
          Why ShareSkippy
        </h3>
        <p className="font-signika w-full">
          Did you know over 70% of city dogs don&apos;t get enough exercise?{" "}
          <br />
          Life happens — owners get busy, work long hours, face health issues,
          or juggle tight budgets. But every pup still deserves to run, play,
          and explore. <br />
          That&apos;s where you come in: volunteer, make a dog&apos;s day (and a
          human&apos;s!), and get the best reward ever: puppy love. ❤️
        </p>
        <Link
          href="/signIn"
          className="relative inline-block overflow-hidden rounded-full bg-blue-500 text-white font-roboto mt-4 px-8 py-4 shadow-lg group lg:mt-8"
        >
          <div className="absolute top-0 left-[-100%] w-full h-full bg-blue-600 transition-all duration-500 ease-out group-hover:left-0 z-0"></div>

          <span className="relative z-10 font-semibold text-md">
            Become a Pet Pal
          </span>
        </Link>
      </div>
    </section>
  );
};

export default WhySkippy;
