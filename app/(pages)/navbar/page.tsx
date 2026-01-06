"use client";
import { ModeToggle } from "@/components/ui/shared/toggle";
import Logo from "@/components/ui/logo";
export default function Navbar() {

  const handleLogoClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <nav className="flex flex-row justify-between items-center px-6 py-2 border-b fixed w-full top-0 z-50 backdrop-blur-sm">
      <div>
        <Logo onClick={handleLogoClick} />
      </div>
      <div className="flex flex-row gap-2 items-center">
        <div className="flex flex-row items-center gap-2 border px-3 py-1 text-md rounded-md font-inter bg-background dark:bg-input/30 dark:border-input">
          <div className="lg:w-3 lg:h-3 w-2 h-2 dark:bg-green-500 bg-green-700 rounded-full animate-pulse" />
          <p className="text-xs lg:text-base dark:text-green-500  text-green-700 font-normal font-inter">
            Available for Work
          </p>
        </div>
        <ModeToggle />
      </div>
    </nav>
  );
}
