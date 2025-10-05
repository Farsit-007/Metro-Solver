"use client";

import { usePathname } from "next/navigation";
import {
  ChevronDown,
  ShoppingCart,
  User,
  Gift,
  LogOut,
  Users,
} from "lucide-react";
import p1 from "@/assets/p1.jpg";
import Image from "next/image";
import Link from "next/link";
import Lottie from "lottie-react";
import logoAnimation from "../../assets/Logo.json";

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About us", href: "/about-us" },
    {
      name: "Services",
      dropdown: [
        { name: "Web Design", href: "/services/design" },
        { name: "Development", href: "/services/dev" },
        { name: "SEO", href: "/services/seo" },
      ],
    },
    { name: "White label", href: "/white-label" },
    { name: "Contact us", href: "/contact" },
  ];

  return (
    <nav className="w-full text-white py-3   px-6 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2 relative">
          <div className="relative w-20 h-16">
            {/* Blurred corner shapes */}
            <div className="absolute -top-40 -left-52 w-76 h-76 bg-purple-600/20 rounded-full blur-3xl z-0"></div>
          

            {/* Lottie Logo */}
            <Lottie
              animationData={logoAnimation}
              loop
              autoplay
              style={{
                filter:
                  "invert(33%) sepia(98%) saturate(2637%) hue-rotate(188deg) brightness(95%) contrast(92%)",
                position: "relative",
                zIndex: 10, // ensure logo is above shapes
              }}
            />
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 bg-[#25153694] rounded-full px-5 py-2">
          {navItems.map((item, idx) =>
            item.dropdown ? (
              <div key={item.name} className="relative group">
                {/* Button */}
                <button className="flex items-center space-x-1 text-gray-300 hover:text-white text-sm font-medium">
                  <span>{item.name}</span>
                  <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
                </button>

                {/* Dropdown */}
                <div className="absolute left-0 mt-5 w-40 bg-[#1b0038]  rounded-lg shadow-lg opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all">
                  {item.dropdown.map((d) => (
                    <Link
                      key={d.name}
                      href={d.href}
                      className={`block px-4 py-2 text-sm text-gray-300 hover:text-white transition-all rounded-full ${
                        pathname === d.href
                          ? "relative border-[2px] border-transparent"
                          : ""
                      }`}
                      style={
                        pathname === d.href
                          ? {
                              background:
                                "linear-gradient(to right, #7b3fe4, white)",
                              padding: "2px",
                            }
                          : {}
                      }
                    >
                      {d.name}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.name}
                href={item.href!}
                className="text-sm font-medium text-gray-300 hover:text-white transition-all"
              >
                {pathname === item.href ? (
                  <div
                    className="relative rounded-full"
                    style={{
                      background: "linear-gradient(to right, #7b3fe4, white)",
                      padding: "2px",
                    }}
                  >
                    <div className="bg-[#1b0038] rounded-full px-4 py-1.5">
                      {item.name}
                    </div>
                  </div>
                ) : (
                  <span className="block px-4 py-1.5">{item.name}</span>
                )}
              </Link>
            )
          )}
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          {/* Cart */}
          <Link href="/cart">
            <div className="p-3 bg-[#25153694] rounded-full transition hover:bg-[#2b0060]">
              <ShoppingCart className="w-5 h-5 text-gray-200" />
            </div>
          </Link>

          {/* User Menu */}
          <div className="relative group">
            <button className="w-10 h-10 rounded-full overflow-hidden border border-[#7b3fe4] bg-[#251536de]">
              <Image src={p1} alt="User" width={40} height={40} />
            </button>

            <div className="absolute right-0 mt-3 w-64 bg-[#251536cc] rounded-2xl shadow-xl p-4 z-50 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all">
              {/* User Info */}
              <div className="flex flex-col items-center text-center mb-3">
                <Image
                  src={p1}
                  alt="User"
                  width={60}
                  height={60}
                  className="rounded-full border border-[#7b3fe4]"
                />
                <h3 className="text-white mt-2 font-semibold text-sm">
                  Albert Flores
                </h3>
                <p className="text-xs text-gray-400 py-2">baker@example.com</p>

                <div className="flex gap-2 mt-3 bg-[#25153694] rounded-full p-2">
                  {/* Website Link */}
                  <Link href="/" className="relative rounded-full">
                    <span
                      className={`block rounded-full p-[1px] transition-all ${
                        pathname === "/"
                          ? "bg-gradient-to-r from-[#633fe4] to-[#8A56F3]"
                          : "hover:bg-gradient-to-r hover:from-[#633fe4] hover:to-[#8A56F3]"
                      }`}
                    >
                      <span className="block bg-transparent rounded-full px-4 py-1 text-xs font-medium text-white text-center">
                        Website
                      </span>
                    </span>
                  </Link>

                  {/* Dashboard Link */}
                  <Link href="/dashboard" className="relative rounded-full">
                    <span
                      className={`block rounded-full p-[1px] transition-all ${
                        pathname === "/dashboard"
                          ? "bg-gradient-to-r from-[#633fe4] to-[#8A56F3]"
                          : "hover:bg-gradient-to-r hover:from-[#633fe4] hover:to-[#8A56F3]"
                      }`}
                    >
                      <span className="block bg-transparent rounded-full px-4 py-1 text-xs font-medium text-white text-center">
                        Dashboard
                      </span>
                    </span>
                  </Link>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-[#2b0060] my-3"></div>

              {/* Menu Items */}
              <ul className="space-y-5 text-sm">
                <li className="flex items-center gap-2 text-gray-300 hover:text-white cursor-pointer">
                  <User size={16} />
                  User Profile
                </li>
                <li className="flex items-center gap-2 text-gray-300 hover:text-white cursor-pointer">
                  <Users size={16} />
                  Referrals
                </li>
                <li className="flex items-center justify-between text-gray-300 hover:text-white cursor-pointer">
                  <div className="flex items-center gap-2">
                    <Gift size={16} />
                    Rewards
                  </div>
                  <span className="text-xs bg-red-500 text-white px-2 py-0.5 rounded-full">
                    468 Points
                  </span>
                </li>
                <li className="flex items-center gap-2 text-gray-300 hover:text-white cursor-pointer">
                  <LogOut size={16} />
                  Log out
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
