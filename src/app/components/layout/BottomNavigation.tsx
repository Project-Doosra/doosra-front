"use client";

import { usePathname } from "next/navigation";
import { PiUsersThree, PiUserLight } from "react-icons/pi";
import { GoHome } from "react-icons/go";
import Link from "next/link";

export default function BottomNavigation() {
  const pathname = usePathname();

  const navItems = [
    { href: "/players", icon: <PiUsersThree size={24} />, label: "Players" },
    { href: "/", icon: <GoHome size={24} />, label: "Home" },
    { href: "/profile", icon: <PiUserLight size={24} />, label: "Profile" },
  ];

  return (
    <nav className="sticky bottom-0 left-0 right-0 bg-white px-4 flex justify-around items-center z-50 border-t">
      {navItems.map(({ href, icon, label }) => (
        <Link
          key={href}
          href={href}
          className={`flex flex-col items-center p-2 ${
            pathname === href ? "text-[#074799]" : "text-black"
          } hover:text-gray-600`}
        >
          <span>{icon}</span>
          <span className="text-xs font-semibold">{label}</span>
        </Link>
      ))}
    </nav>
  );
}
