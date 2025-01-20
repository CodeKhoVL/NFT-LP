'use client';
import '@styles/app.css';
import { Card, CardContent } from "@components/ui/card";
import React from 'react';

const cardData = [
  {
    text: "NFT市場に参加するためには、暗号通貨やデジタルウォレットの知識が必要であり、この技術的ハードルが多くの人々にとって参加の障壁となっています。",
    bgColor: "bg-white",
    textColor: "text-[#050c9c]",
  },
  {
    text: "NFTは新しい技術であるため、ユーザーが詐欺に遭うリスクが高いと思われている方もいます。",
    bgColor: "bg-white",
    textColor: "text-[#050c9c]",
  },
  {
    text: "しかし今は適正価格で取引されており、真の価値を見極めた投資や収集が可能になっています。",
    bgColor: "bg-[#3572ef]",
    textColor: "text-white",
  },
];

const StorySection = (): React.ReactElement => {
  return (
    <div className="w-full min-h-screen flex justify-center items-center p-4">
      <main className="relative w-full max-w-[1360px]">
        {/* Header Section */}
        <section className="flex flex-col items-center gap-4">
          {/* Mascot Image */}
          <img
            src="/images/blueteacher.png"
            alt="Mascot"
            className="w-[325px] h-[325px] object-contain mb-[-20px]" // Loại bỏ khoảng cách bằng giá trị âm
          />
        </section>

        {/* Title Section */}
        <div className="relative mb-6 text-center">
          <div className="bg-white py-6 px-8 rounded-full inline-block shadow-md">
            <h1 className="font-extrabold text-2xl tracking-wide text-gray-900">
              NFTが誤解されている理由
            </h1>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {cardData.map((card, index) => (
            <Card
              key={index}
              className={`rounded-[20px] h-[440px] shadow-lg hover:scale-105 transition-transform duration-300 ${
                index === 0 ? "bg-[#3572ef]" : "bg-white"
              }`}
            >
              <CardContent className="p-6 h-full flex flex-col justify-between relative">
                {/* Image */}
                <div className="relative flex-1 flex items-center justify-center">
                  {index !== 0 && (
                    <img
                      src="/images/skeleton.png"
                      alt="Card illustration"
                      className="w-[300px] h-[300px] object-contain opacity-50"
                    />
                  )}

                  <div className="absolute inset-0 flex justify-center items-center p-4">
                    <p
                      className={`text-xl leading-10 font-medium tracking-[0.20px] ${
                        index === 0 ? "text-white" : "text-[#050c9c]"
                      } text-center`}
                    >
                      {card.text}
                    </p>
                  </div>
                </div>

                {/* TAP Button */}
                {index !== 0 && (
                  <div className="absolute bottom-6 right-6 w-20 h-20 rotate-[-15deg] shadow-md bg-white rounded-lg flex items-center justify-center">
                    <span className="font-extrabold text-[#050c9c] rotate-[15deg]">
                      TAP
                    </span>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default StorySection;
