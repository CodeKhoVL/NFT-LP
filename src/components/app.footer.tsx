'use client'
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
      <div className="flex items-center justify-between gap-8 px-[287px] py-40">
        {/* Logo Section */}
        <div className="flex items-center">
          <h1
            className="text-white font-['Dela_Gothic_One'] text-[52px] font-extrabold leading-[52px] tracking-[1.04px]"
            style={{ lineHeight: "100%" }}
          >
            次世代NFT
          </h1>
        </div>

        {/* Navigation Menu */}
        <NavigationMenu className="flex-1">
          <NavigationMenuList className="flex flex-col gap-[30px]">
            {navigationItems.map((item) => (
              <NavigationMenuItem key={item.label}>
                <NavigationMenuLink
                  href={item.href}
                  className="font-['Mplus_1p'] font-extrabold text-base text-white leading-6"
                >
                  {item.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Contact Button */}
        <Button className="h-[51px] bg-[#01b202] rounded-[7.2px] px-4 py-2.5 hover:bg-[#01b202]/90">
          <MessageCircle className="w-8 h-8 mr-2" />
          <span className="font-['Mplus_1p'] font-extrabold text-[15px] leading-[15px]">
            LINEでお問い合わせ
          </span>
        </Button>

        {/* Image Section */}
        <div className="flex items-center">
          <img
            className="w-[226.54px] h-[102.99px]"
            alt="Next Generation NFT Logo"
            src="/images/footer.png"
          />
        </div>
      </div>

      {/* Copyright Section */}
      <div className="py-4 bg-[#242424]">
        <p
          className="text-white text-center font-['Mplus_1p'] text-[14px] font-normal"
          style={{ lineHeight: "200%" }}
        >
          Copyright © 次世代NFT
        </p>
      </div>
    </footer>
  );
}
