"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutSection(): React.ReactElement {
  const mainContent = {
    title: "次世代NFTとは？",
    description: (
      <>
        次世代NFTとは、NFTをQRコードを撮影して簡単に受け取ったり、
        <br className="hidden md:block" />
        説明いらずの直感操作でNFTを送信することができるサービスです。
      </>
    ),
    feature: {
      title: "NFTの送受信が無料！",
      description: (
        <>
          次世代NFTの最大の特徴は、NFTの送受信が永年無料であること！
          <br className="hidden md:block" />
          いつでもどこでも、ガス代(=手数料)を気にせずにNFTを送信することができます。
        </>
      ),
    },
  };

  return (
    <main className="container mx-auto px-4 lg:max-w-[1360px] relative">
      <div className="relative">
        <div className="relative mt-[125px] md:mt-[175px] lg:mt-[225px]">
          {/* Main Content Section */}
          <section className="relative bg-gradient-to-b from-white to-sky-100 rounded-3xl px-4 md:px-6 py-8 md:py-12 z-10 w-full max-w-full mx-auto min-h-[800px] md:min-h-[900px] lg:min-h-[1000px]">
            {/* Character Image - Hidden on mobile */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -top-[150px] lg:-top-[185px]">
              <img
                src="/images/character.png"
                alt="Extra Image"
                className="w-[200px] lg:w-[250px] h-auto z-30"
              />
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 h-full">
              {/* Left Image Column */}
              <div className="hidden md:block md:col-span-3 relative self-end pb-8">
                <img
                  src="/images/girl.png"
                  alt="Feature Girl"
                  className="w-full h-auto object-contain max-h-[580px]"
                />
              </div>

              {/* Center Content Column */}
              <div className="col-span-1 md:col-span-6 flex flex-col justify-start pt-16 md:pt-24 lg:pt-32">
                {/* Title and Description */}
                <div className="text-center mb-12 md:mb-16 lg:mb-20">
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-black font-mplus leading-tight tracking-wider mb-6 lg:mb-8">
                    {mainContent.title}
                  </h1>
                  <p className="text-base md:text-lg lg:text-xl font-bold text-black font-mplus leading-relaxed tracking-wide px-2">
                    {mainContent.description}
                  </p>
                </div>

                {/* Feature Card and Description */}
                <div className="space-y-8 md:space-y-10 lg:space-y-12">
                  <Card className="rounded-full border-2 border-black bg-yellow-100 w-[90%] md:w-[80%] mx-auto transform hover:scale-105 transition-transform duration-300">
                    <CardContent className="p-4 md:p-6 lg:p-8">
                      <h2 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-gray-900 text-center">
                        {mainContent.feature.title}
                      </h2>
                    </CardContent>
                  </Card>
                  <p className="text-base md:text-lg lg:text-xl font-bold text-black font-mplus leading-relaxed tracking-wide text-center md:text-justify px-4 md:px-8 lg:px-12">
                    {mainContent.feature.description}
                  </p>
                </div>

                {/* Mobile Images */}
                <div className="md:hidden mt-12 flex justify-around items-end">
                  <img
                    src="/images/girl.png"
                    alt="Feature Girl"
                    className="w-[45%] h-auto object-contain"
                  />
                  <img
                    src="/images/boy.png"
                    alt="Feature Boy"
                    className="w-[45%] h-auto object-contain"
                  />
                </div>
              </div>

              {/* Right Image Column */}
              <div className="hidden md:block md:col-span-3 relative self-end pb-8">
                <img
                  src="/images/boy.png"
                  alt="Feature Boy"
                  className="w-full h-auto object-contain max-h-[380px]"
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}