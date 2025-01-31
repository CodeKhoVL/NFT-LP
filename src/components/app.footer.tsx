"use client";
import "@styles/app.css";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { MessageCircle } from "lucide-react";
import React from "react";

const navigationItems = [
  { label: "FAQ", href: "#" },
  { label: "プライバシーポリシー", href: "#" },
];

export default function Footer(): React.ReactElement {
  return (
    <footer className="bg-[#242424] w-full">
      {/* Main Footer Section */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 px-6 sm:px-16 lg:px-[287px] py-10 sm:py-20 lg:py-40">
        {/* Logo Section */}
        <div className="flex-shrink-0 text-center lg:text-left">
          <h1 className="text-white font-['Dela_Gothic_One'] text-3xl sm:text-4xl lg:text-[52px] font-extrabold tracking-wide whitespace-nowrap">
            次世代NFT
          </h1>
        </div>

        {/* Navigation Menu */}
        <NavigationMenu className="flex-1">
          <NavigationMenuList className="flex flex-col gap-4 sm:gap-6 lg:gap-[30px] items-center lg:items-start">
            {navigationItems.map((item) => (
              <NavigationMenuItem key={item.label}>
                <NavigationMenuLink
                  href={item.href}
                  className="font-['Mplus_1p'] font-extrabold text-sm sm:text-base lg:text-lg text-white whitespace-nowrap"
                >
                  {item.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Contact Button */}
        <div className="flex-shrink-0 flex justify-center lg:justify-end">
          <Button className="h-[51px] bg-[#01b202] rounded-lg px-6 py-2.5 hover:bg-[#01b202]/90 flex items-center">
            <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 mr-2" />
            <span className="font-['Mplus_1p'] font-extrabold text-sm sm:text-base lg:text-[15px]">
              LINEでお問い合わせ
            </span>
          </Button>
        </div>

        {/* Image Section */}
        <div className="flex-shrink-0 flex justify-center lg:justify-end mt-6 lg:mt-0">
          <img
            className="w-[180px] sm:w-[200px] lg:w-[226.54px] h-auto"
            alt="Next Generation NFT Logo"
            src="/images/footer.png"
          />
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-[#242424] py-4">
        <p className="text-white text-center font-['Mplus_1p'] text-sm sm:text-base whitespace-nowrap">
          Copyright © 次世代NFT
        </p>
      </div>
    </footer>
  );
}
