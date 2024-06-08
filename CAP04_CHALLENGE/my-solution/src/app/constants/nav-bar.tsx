import React from "react";
import { CustomDropdownMenuProps } from "@/app/components/CustomDropdownMenu";
import { BriefcaseIcon } from "../icons/BriefcaseIcon";
import { ProjectorIcon } from "../icons/ProjectorIcon";
import { LaptopIcon } from "@/app/icons/LaptopIcon";
import { UsersIcon } from "@/app/icons/UsersIcon";
import { CheckIcon } from "@/app/icons/CheckIcon";
import { RocketIcon } from "@/app/icons/RocketIcon";

export const DROPDOWN_MENU_OPTIONS: CustomDropdownMenuProps[] = [
  {
    id: "1",
    triggerLabel: "For Students",
    options: [
      {
        href: "#",
        icon: <LaptopIcon />,
        label: "Online Courses",
      },
      {
        href: "#",
        icon: <ProjectorIcon />,
        label: "Project-based Learning",
      },
      {
        href: "#",
        icon: <UsersIcon />,
        label: "Cohort-based Programs",
      },
      {
        href: "#",
        icon: <CheckIcon />,
        label: "Job Guarantee",
      },
    ],
  },
  {
    id: "2",
    triggerLabel: "For Companies",
    options: [
      {
        href: "#",
        icon: <BriefcaseIcon />,
        label: "Hire Talent",
      },
      {
        href: "#",
        icon: <RocketIcon />,
        label: "Upskill Employees",
      },
     
      {
        href: "#",
        icon: <UsersIcon />,
        label: "Corporate Training",
      },
    ],
  },
];

export const MOBILE_MENU_OPTIONS = [
  { href: "#", icon: <LaptopIcon className="h-4 w-4" />, label: "Online Courses" },
  { href: "#", icon: <ProjectorIcon className="h-4 w-4" />, label: "Project-based Learning" },
  { href: "#", icon: <UsersIcon className="h-4 w-4" />, label: "Cohort-based Programs" },
  { href: "#", icon: <CheckIcon className="h-4 w-4" />, label: "Job Guarantee" },
  { href: "#", icon: <BriefcaseIcon className="h-4 w-4" />, label: "Hire Talent" },
  { href: "#", icon: <RocketIcon className="h-4 w-4" />, label: "Upskill Employees" },
  { href: "#", icon: <UsersIcon className="h-4 w-4" />, label: "Corporate Training" },
];
