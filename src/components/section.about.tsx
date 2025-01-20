"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutSection(): React.ReactElement {
  const mainContent = {
    title: "次世代NFTとは？",
    description: (
      <>
        次世代NFTとは、NFTをQRコードを撮影して簡単に受け取ったり、
        <br />
        説明いらずの直感操作でNFTを送信することができるサービスです。
      </>
    ),
    feature: {
      title: "NFTの送受信が無料！",
      description: (
        <>
          次世代NFTの最大の特徴は、NFTの送受信が永年無料であること！
          <br />
          いつでもどこでも、ガス代(=手数料)を気にせずにNFTを送信することができます。
        </>
      ),
    },
  };

  return (
    <main className="container mx-auto px-4 max-w-[1360px] translate-y-20 relative">
      <div className="absolute top-0 w-full h-20"></div> {/* Tạo khoảng trống ảo */}
      <div className="relative">
        {/* Extra Image Positioned Outside the Background */}
        <img
          src="/images/character.png"
          alt="Extra Image"
          className="absolute top-[-250px] left-1/2 transform -translate-x-1/2 w-[250px] h-[250px] z-30"
        />

        {/* Background Section */}
        <div
          className="relative bg-gradient-to-b from-white to-sky-100 rounded-t-3xl px-6 py-12 z-10"
          style={{
            width: "1360px",
            height: "717px",
            margin: "0 auto",
          }}
        >
          <div className="text-center mb-12">
            <h1
              style={{
                color: "#000",
                textAlign: "center",
                fontFamily: '"Mplus 1p"',
                fontSize: "48px",
                fontStyle: "normal",
                fontWeight: 900,
                lineHeight: "140%", // 67.2px
                letterSpacing: "0.48px",
              }}
            >
              {mainContent.title}
            </h1>
            <p
              style={{
                color: "#000",
                fontFamily: '"Mplus 1p"',
                fontSize: "18px",
                fontStyle: "normal",
                fontWeight: "bold",
                lineHeight: "150%", // 27px
                letterSpacing: "0.18px",
              }}
            >
              {mainContent.description}
            </p>
          </div>

          {/* Feature Description Section */}
          <div className="relative text-center mb-12">
            {/* Wrapper for Card Background */}
            <div
              className="relative inline-block w-[119px] h-[119px] mx-auto"
              style={{
                position: "relative",
                transform: "translate(-105px, 140px)", // Điều chỉnh vị trí của Card
              }}
            >
              {/* Card Component */}
              <Card
                className="w-[419px] rounded-full border-2 border-black bg-yellow-100"
                style={{
                  position: "relative",
                  transform: "translate(20px, 30px)", // Dịch chuyển thêm Card
                }}
              >
                <CardContent className="p-8">
                  {/* Title */}
                  <h2 className="text-2xl font-extrabold text-gray-900 text-center">
                    {mainContent.feature.title}
                  </h2>
                </CardContent>
              </Card>
            </div>
            {/* Description */}
            <p
              style={{
                color: "#000",
                fontFamily: '"Mplus 1p"',
                fontSize: "18px",
                fontStyle: "normal",
                fontWeight:"bold",
                lineHeight: "150%", // 27px
                letterSpacing: "0.18px",
                textAlign: "justify", // Căn đều đầu dòng
                textIndent: "0", // Không thụt lề dòng đầu
                position: "relative",
                transform: "translate(500px, 160px)", // Dịch chuyển đoạn văn bản
              }}
            >
              次世代NFTの最大の特徴は、NFTの送受信が永年無料であること！
              <br />
              いつでもどこでも、ガス代(=手数料)を気にせずにNFTを送信することができます。
            </p>
          </div>
        </div>

        {/* Foreground Images */}
        <div className="absolute inset-0 flex justify-between items-end px-4 z-20">
          {/* Left Image */}
          <img
            src="/images/girl.png"
            alt="Feature Girl"
            className="w-[420px] h-[580px] object-cover rounded-lg shadow-lg translate-y-[300px] translate-x-[60px]"
          />

          {/* Right Image */}
          <img
            src="/images/boy.png"
            alt="Feature Boy"
            className="w-[380px] h-[380px] object-cover rounded-lg shadow-lg translate-y-[250px]"
          />
        </div>
      </div>
    </main>
  );
}
