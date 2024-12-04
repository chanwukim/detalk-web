import Link from "next/link";

import HomeIcon from "./icons/home-icon";
import SignInIcon from "./icons/sign-in-icon";
import UserIcon from "./icons/user-icon";
import { Button } from "./ui/button";

export default function LeftNavigation() {
  return (
    <ul className="mt-16 flex flex-1 flex-col">
      <li className="pc:justify-start flex w-full justify-center">
        <Link
          href="/"
          aria-label="Home"
          className="hover:bg-accent pc:h-auto pc:w-full pc:justify-start flex h-52 w-52 items-center justify-center gap-8 rounded-lg p-12 transition-[background-color]"
        >
          <HomeIcon className="pc:h-24 pc:w-24 h-28 w-28" />
          <span className="pc:inline hidden">Home</span>
        </Link>
      </li>
      <li className="pc:justify-start flex w-full justify-center">
        <Link
          href="/"
          aria-label="Home"
          className="hover:bg-accent pc:h-auto pc:w-full pc:justify-start flex h-52 w-52 items-center justify-center gap-8 rounded-lg p-12 transition-[background-color]"
        >
          <UserIcon className="pc:h-24 pc:w-24 h-28 w-28" />
          <span className="pc:inline hidden">Profile</span>
        </Link>
      </li>
      <li className="pc:justify-start flex w-full justify-center">
        <Button rounded="full" variant="light" className="pc:px-44 pc:mt-32 mx-auto mt-16" asChild>
          <Link href="/sign-in" aria-label="Home">
            <SignInIcon size={20} className="pc:hidden" />
            <span className="pc:inline hidden">Sign in</span>
          </Link>
        </Button>
      </li>
    </ul>
  );
}
