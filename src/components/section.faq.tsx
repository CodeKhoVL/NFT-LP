"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronDown } from "lucide-react";
import React from "react";

const faqItems = [
  {
    title: "タイトルテキストが入ります。",
    content:
      "詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。",
  },
  {
    title: "DIVERとは何ですか？",
    content:
      "DIVERとは、ブロックチェーン技術を活用して開発されたDIVERというプロジェクト名称です。",
  },
  {
    title: "対応しているウォレットは何ですか？",
    content:
      "DIVER Walletに対応しています。暗号資産の管理やNFTを無料で送受信できる「DIVER Wallet」をはじめ...",
  },
  {
    title: "ガス代とは何ですか？",
    content:
      "ガス代とは、ブロックチェーンネットワーク上でトランザクションを実行するために支払う手数料のことです。",
  },
  {
    title: "NFTを送信するのになぜガス代がかかるのですか？",
    content: "NFTを送信する際にガス代がかかるのは、ブロックチェーン技術の特性によります。",
  },
  {
    title: "次世代NFTはなぜガス代がかからないのですか？",
    content:
      "DIVERがガス代無料でNFTを送信できる理由は、独自のブロックチェーン技術「DIVER Chain」を使用しているためです。",
  },
];

export default function FAQSection(): React.ReactElement {
  return (
    <div className="w-full min-h-screen bg-[#050C9C] py-16 flex justify-center items-center">
      {/* Container chính */}
      <div className="w-full max-w-[920px] px-4 sm:px-6 md:px-8">
        {/* Tiêu đề */}
        <div className="flex justify-center mb-12">
          <h1 className="font-bold text-4xl sm:text-5xl tracking-wide text-white text-center">
            FAQ
          </h1>
        </div>

        {/* Accordion */}
        <Accordion type="single" collapsible className="flex flex-col gap-6">
          {faqItems.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-[#050c9c] rounded-2xl p-6 bg-white"
            >
              {/* Accordion Trigger */}
              <AccordionTrigger className="flex items-center justify-between gap-4 hover:no-underline">
                <div className="flex items-center gap-4">
                  <span className="font-bold text-xl sm:text-2xl text-[#050c9c]">
                    Q
                  </span>
                  <span className="font-bold text-base sm:text-lg md:text-xl text-black">
                    {item.title}
                  </span>
                </div>
                <div className="ml-auto flex items-center justify-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-[#050c9c] flex items-center justify-center">
                    <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-200 data-[state=open]:rotate-180" />
                  </div>
                </div>
              </AccordionTrigger>
              {/* Accordion Content */}
              <AccordionContent className="overflow-hidden">
                <div className="mt-4 sm:mt-6 pl-6 sm:pl-8 md:pl-10">
                  <p className="text-sm sm:text-base md:text-lg leading-6 text-black">
                    {item.content}
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
