import Link from "next/link";
import { Logo } from "@/components/logo";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex border-b border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-900 ">
      {/** left */}
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[-14%] p-4">
        <Link
          href="/"
          className="flex items-center justify-center lg:justify-start gap-2"
        >
          <Logo />
        </Link>
        <Menu />
      </div>
      {/** right */}
      <div className="border-b border-gray-200 dark:border-gray-600 dark:bg-gray-900 w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#fafaf9] overflow-scroll flex flex-col">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
