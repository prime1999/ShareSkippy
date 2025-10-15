import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import Image from "next/image";
import menu from "../public/assets/icons/menu.png";
import Link from "next/link";
import logIn from "../public/assets/icons/login.png";

const MobileDrawer = () => {
  return (
    <main className="flex lg:hidden">
      <Drawer>
        <DrawerTrigger>
          <Image src={menu} alt="menu image" width={20} height={20} />
        </DrawerTrigger>
        <DrawerContent>
          <div className="flex flex-col gap-4 items-center justify-center py-8">
            {" "}
            <Link
              href="/"
              className="flex items-center gap-1 cursor-pointer duration-500 hover:gap-2"
            >
              <h6 className="font-signika text-md font-semibold">Sign In</h6>
              <Image src={logIn} alt="login icon" width={20} height={20} />
            </Link>
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
        </DrawerContent>
      </Drawer>
    </main>
  );
};

export default MobileDrawer;
