import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import CustomDropdownMenu from "../CustomDropdownMenu";
import { DROPDOWN_MENU_OPTIONS, MOBILE_MENU_OPTIONS } from "@/app/constants/nav-bar";
import CustomMobileMenu from "../CustomMobileMenu";

export const Navbar = () => {
  return (
    <header className="bg-white px-4 py-3 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link href="#" prefetch={false}>
            <img src="/placeholder.svg" alt="Henry logo" className="h-10" />
          </Link>
          <nav className="hidden md:flex space-x-4">
            {DROPDOWN_MENU_OPTIONS.map((item) => (
              <CustomDropdownMenu
                key={item.id}
                triggerLabel={item.triggerLabel}
                options={item.options}
                id={item.id}
              />
            ))}
          </nav>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="ghost">Login</Button>
          <Button className="bg-[#fcba03]">Apply</Button>
        </div>
        <div className="flex items-center space-x-2 md:hidden">
          <CustomMobileMenu options={MOBILE_MENU_OPTIONS} />
        
        </div>
      </div>
    </header>
  );
};
