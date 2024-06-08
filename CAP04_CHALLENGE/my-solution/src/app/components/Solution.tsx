/**
 * v0 by Vercel.
 * @see https://v0.dev/t/JBL68FqookW
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/app/components/ui/dropdown-menu"
import { Button } from "@/app/components/ui/button"
import { Separator } from "@/app/components/ui/separator"
import { BriefcaseIcon } from "../icons/BriefcaseIcon"
import { CheckIcon } from "../icons/CheckIcon"
import { ChevronDownIcon } from "../icons/ChevronDownIcon"
import { LaptopIcon } from "../icons/LaptopIcon"
import { MenuIcon } from "../icons/MenuIcon"
import { ProjectorIcon } from "../icons/ProjectorIcon"
import { RocketIcon } from "../icons/RocketIcon"
import { UsersIcon } from "../icons/UsersIcon"
import { Navbar } from "./nav-bar"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar/>
      
      <main className="flex-grow">
        <section className="container mx-auto flex flex-col-reverse md:flex-row items-center px-4 py-12">
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl font-bold text-gray-800">Start or Accelerate Your Career in Technology</h1>
            <p className="text-xl text-gray-600">Study Full Stack Development, Data Science, or Data Analytics</p>
            <ul className="list-inside space-y-2">
              <li className="flex items-center">
                <LaptopIcon className="text-green-500 mr-2" />
                Online, live, and flexible
              </li>
              <li className="flex items-center">
                <ProjectorIcon className="text-purple-500 mr-2" />
                Project-based
              </li>
              <li className="flex items-center">
                <UsersIcon className="text-blue-500 mr-2" />
                Cohort-based
              </li>
              <li className="flex items-center">
                <CheckIcon className="text-yellow-500 mr-2" />
                Job Guarantee
              </li>
            </ul>
            <Button className="bg-[#FFD700]">Apply</Button>
          </div>
          <div className="flex-1">
            <img src="/placeholder.svg" alt="Person working" className="mx-auto rounded-lg" />
          </div>
        </section>
      </main>
      <footer className="bg-gray-100 py-4">
        <div className="container mx-auto text-center">
          <p className="text-gray-700 font-semibold">Bootcamp #1 in Latam</p>
        </div>
      </footer>
    </div>
  )
}

// function BriefcaseIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
//       <rect width="20" height="14" x="2" y="6" rx="2" />
//     </svg>
//   )
// }


// function CheckIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M20 6 9 17l-5-5" />
//     </svg>
//   )
// }


// function ChevronDownIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="m6 9 6 6 6-6" />
//     </svg>
//   )
// }


// function LaptopIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16" />
//     </svg>
//   )
// }


// function MenuIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <line x1="4" x2="20" y1="12" y2="12" />
//       <line x1="4" x2="20" y1="6" y2="6" />
//       <line x1="4" x2="20" y1="18" y2="18" />
//     </svg>
//   )
// }


// function ProjectorIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M5 7 3 5" />
//       <path d="M9 6V3" />
//       <path d="m13 7 2-2" />
//       <circle cx="9" cy="13" r="3" />
//       <path d="M11.83 12H20a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2.17" />
//       <path d="M16 16h2" />
//     </svg>
//   )
// }


// function RocketIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
//       <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
//       <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
//       <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
//     </svg>
//   )
// }


// function UsersIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
//       <circle cx="9" cy="7" r="4" />
//       <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
//       <path d="M16 3.13a4 4 0 0 1 0 7.75" />
//     </svg>
//   )
// }