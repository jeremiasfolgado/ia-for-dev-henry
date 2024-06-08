import { ChevronDownIcon } from "@/app/icons/ChevronDownIcon";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import Link from "next/link";
import { LaptopIcon } from "@/app/icons/LaptopIcon";
import { ProjectorIcon } from "@/app/icons/ProjectorIcon";
import { UsersIcon } from "@/app/icons/UsersIcon";
import { CheckIcon } from "@/app/icons/CheckIcon";

interface MenuOption {
  href: string;
  icon: React.ReactNode;

  label: string;
}

export interface CustomDropdownMenuProps {
  id: string;
  triggerLabel: string;
  options: MenuOption[];
}
const CustomDropdownMenu: React.FC<CustomDropdownMenuProps> = ({
  triggerLabel,
  options,
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="flex items-center gap-2">
          <span>{triggerLabel}</span>
          <ChevronDownIcon className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {options.map((option, index) => (
          <DropdownMenuItem key={index}>
            <Link
              href={option.href}
              className="flex items-center gap-2"
              prefetch={false}
            >
              {option.icon}
              <span>{option.label}</span>
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default CustomDropdownMenu;
