import Link from "next/link";

import HomeIcon from "./icons/home-icon";
import SignInIcon from "./icons/sign-in-icon";
import Portal from "./portal";
import { Button } from "./ui/button";

export default function MobileNavigation() {
  return (
    <Portal>
      <div data-id="mobile-nav" className="tablet:hidden fixed right-0 bottom-0 left-0">
        <div className="bg-background h-56 w-full border-t shadow-[0_15px_30px_-3px_rgba(0,0,0,0.3)]">
          <ul className="flex h-full items-center px-16">
            <li className="h-full flex-1 p-2">
              <Link
                href="/"
                className="hover:bg-accent text-foreground-muted flex h-full flex-col items-center justify-center rounded"
              >
                <HomeIcon size={20} />
                <span className="text-xs text-[10px]">Home</span>
              </Link>
            </li>
            <li className="h-full flex-1 p-2">
              <Link
                href="/profile"
                className="hover:bg-accent text-primary flex h-full flex-col items-center justify-center rounded"
              >
                <SignInIcon size={20} />
                <span className="text-xs text-[10px]">Sign in</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </Portal>
  );
}
