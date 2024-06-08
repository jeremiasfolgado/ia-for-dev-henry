import { FC } from "react";
import { MenuIcon } from "@/app/icons/MenuIcon"
import { Button } from "./ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu"
import Link from "next/link"


// Define una interfaz para las opciones del menú
interface MenuOption {
    href: string;
    icon: JSX.Element;
    label: string;
  }
  
  // Define las propiedades que el componente aceptará
  interface CustomMobileMenuProps {
    options: MenuOption[];
  }
const CustomMobileMenu: FC<CustomMobileMenuProps> = ({ options }) => {
    return(
        <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon">
            <MenuIcon className="h-6 w-6" />
            {/* <span className="sr-only">Toggle navigation menu</span> */}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-64 p-4">
            <div className="grid gap-4">
                {options.map((option, index) => (
                    <DropdownMenuItem key={index}>
                        <Link href={option.href} className="flex items-center gap-2" prefetch={false}>
                            {option.icon}
                            <span>{option.label}</span>
                        </Link>
                    </DropdownMenuItem>
                ))}
            </div>
         
        </DropdownMenuContent>
      </DropdownMenu>
    )}
    export default CustomMobileMenu