'use client'
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
      "詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。",
  },
  {
    title: "DIVERとは何ですか？",
    content: "DIVERとは、ブロックチェーン技術を活用して開発されたDIVERというプロジェクト名称です。DIVERは、ブロックチェーンの世界でビットコインの思想とイーサリアムの利便性をベースにさらに進化させたグローバルプロジェクトであり、世界で唯一、取引手数料が完全フリーであらゆるアプリが使える次世代のプラットフォームです。",
  },
  {
    title: "対応しているウォレットは何ですか？",
    content: "DIVER Walletに対応しています。暗号資産の管理やNFTを無料で送受信できる「DIVER Wallet」をはじめ、Web3.0型チャットアプリ「Knock(ノック)」、次世代のトレカ&クーポンサービス「トレクー」、NFTと位置情報をQRコードにセットできる「ChainPin（チェインピン)」などのサービスでご利用頂けます。",
  },
  {
    title: "ガス代とは何ですか？",
    content: "ガス代とは、ブロックチェーンネットワーク上でトランザクション（送金やデータの記録）を実行するために支払う手数料のことです。この手数料はネットワークの混雑状況によって変動します。",
  },
  {
    title: "NFTを送信するのになぜガス代がかかるのですか？",
    content: "NFTを送信する際にガス代がかかるのは、ブロックチェーンという技術の特性によります。ブロックチェーンでは、多くのコンピュータが取引を確認しており、その作業にはエネルギーや計算能力が必要です。ガス代は、これらのコンピュータの作業への報酬であり、ネットワークの安全性と効率を保つために必要となっています。",
  },
  {
    title: "次世代NFTはなぜガス代がかからないのですか？",
    content: "DIVERがガス代無料でNFTを送信できる理由は、独自のブロックチェーン技術「DIVER Chain」を使用しているためです。DIVER Chainでは、すべてのトランザクションに対してガス代が発生しない設計になっています。",
  },
];

export default function FAQSection(): React.ReactElement {
  return (
    <div className="w-full min-h-screen bg-[#050C9C] py-20 flex justify-center items-center">
      <div className="w-[920px]">
        <div className="flex justify-center mb-20">
          <h1 className="font-bold text-5xl tracking-[3.84px] text-white">FAQ</h1>
        </div>

        <Accordion type="single" collapsible className="flex flex-col gap-[30px]">
          {faqItems.map((item, index) => (
            <AccordionItem
            key={index}
            value={`item-${index}`}
            className="border border-[#050c9c] rounded-[20px] px-[29px] py-10 bg-white data-[state=open]:h-auto transition-all"
          >
            <AccordionTrigger className="hover:no-underline">
              <div className="flex items-center gap-10 -mt-1"> {/* Tiêu đề được đẩy lên trên */}
                <span className="font-bold text-[32px] text-[#050c9c] font-['Roboto-Bold']">
                  Q
                </span>
                <span className="font-bold text-[22px] text-black font-['Noto_Sans_JP-Bold']">
                  {item.title}
                </span>
              </div>
              <div className="ml-auto flex items-center justify-center">
                <div className="w-12 h-12 rounded-3xl border border-[#050c9c] flex items-center justify-center">
                  <ChevronDown className="w-[26px] h-[26px] transition-transform duration-200 data-[state=open]:rotate-180" />
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="overflow-hidden">
              <div className="pl-[63px] pr-[92px] mt-2"> {/* Giảm khoảng cách nội dung */}
                <p className="text-base tracking-[0.48px] leading-6 font-['Noto_Sans_JP-Regular']">
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
